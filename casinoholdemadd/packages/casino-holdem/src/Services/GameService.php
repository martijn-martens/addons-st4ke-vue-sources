<?php
/** @noinspection PhpUnhandledExceptionInspection */

namespace Packages\CasinoHoldem\Services;

use App\Helpers\Games\CardDeck;
use App\Helpers\Games\Poker;
use App\Helpers\Games\PokerPlayer;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use Packages\CasinoHoldem\Helpers\PokerHand;
use Packages\CasinoHoldem\Models\CasinoHoldem;

class GameService extends ParentGameService
{
    protected $gameableClass = CasinoHoldem::class;
    protected $makeVisible = ['dealer_cards', 'dealer_hand', 'dealer_kickers', 'dealer_hand_rank'];

    public function makeSecret(): string
    {
        return implode(',', (new CardDeck())->toArray());
    }

    /**
     * Deal initial set of cards
     *
     * @param $params
     */
    public function deal($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        // load initially shuffled deck
        $deck = new CardDeck(explode(',', $provablyFairGame->secret));
        // cut the deck (provably fair)
        $deck->cut($provablyFairGame->shift_value % 52);

//      TESTING
//      -------
//      ROYAL FLUSH
//      $deck = $deck->replace(['HA','S2','HJ','C4','HQ','HK','HT','DA']);
//
//      2 ACES IN PLAYER POCKET
//      $deck = $deck->replace([0 => 'HA', 2 => 'DA']);
//
//        ---------------------------------------------------------------------

        $poker = new Poker($deck);
        $poker->addPlayers(2)->deal(2, 3)->play();

        $gameable = new $this->gameableClass();
        $gameable->deck = $deck->toArray();
        $gameable->ante_bet = $params['bet'];
        $gameable->bonus_bet = $params['bonus_bet'];
        $gameable->player_cards = $poker->getPlayer(1)->getPocketCards()->map->code;
        $gameable->community_cards = $poker->getCommunityCards()->map->code;
        $gameable->player_hand = $poker->getPlayer(1)->getHand()->get()->map->code;
        $gameable->player_hand_rank = $poker->getPlayer(1)->getHand()->getRank();

        if ($gameable->bonus_bet > 0) {
            $bonusHand = new PokerHand($poker->getPlayer(1)->getPocketCards(), $poker->getCommunityCards());
            $gameable->player_bonus_hand = $bonusHand->get()->map->code;
            $gameable->player_hand_rank = $bonusHand->getRank();
        }

        // important to save a reference to gameable in the class property, so it can be used in the parent class
        $this->gameable = $gameable;

        $this->save([
            'bet' => $gameable->ante_bet + $gameable->bonus_bet,
            'win' => 0,
            'status' => Game::STATUS_IN_PROGRESS]
        );

        return $this;
    }

    /**
     * Fold
     *
     * @return GameService
     * @throws \Exception
     */
    public function fold(): GameService
    {
        $gameable = $this->getGameable();

        $poker = new Poker(new CardDeck($gameable->deck));
        $poker->addPlayers(2)->deal(2, 3)->play();

        if ($gameable->bonus_bet > 0) {
            $bonusHand = new PokerHand($poker->getPlayer(1)->getPocketCards(), $poker->getCommunityCards());

            if ($bonusHand->isPairOfAcesOrBetter()) {
                $gameable->player_bonus_hand = $bonusHand->get()->map->code;
                $gameable->player_bonus_hand_rank = $bonusHand->getRank();
                $bonusPayout = (int) config('casino-holdem.bonus_paytable')[$gameable->player_bonus_hand_rank];
                $gameable->bonus_win = $bonusPayout > 0 ? $gameable->bonus_bet * $bonusPayout : 0;
            }
        }

        $this->save([
            'win' => $gameable->bonus_win,
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    /**
     * Call
     *
     * @return GameService
     * @throws \Exception
     */
    public function call(): GameService
    {
        $gameable = $this->getGameable();

        $poker = new Poker(new CardDeck($gameable->deck));

        // use PokerHand class from the game package
        $poker->addPlayers(2)->deal(2, 5)->getPlayers()->each(function (PokerPlayer $player) {
            $player->setHand(new PokerHand($player->getPocketCards(), $player->getCommunityCards()));
        });

        $gameable->call_bet = $gameable->ante_bet * 2;
        $gameable->community_cards = $poker->getCommunityCards()->map->code;
        $gameable->player_hand = $poker->getPlayer(1)->getHand()->get()->map->code;
        $gameable->player_kickers = $poker->getPlayer(1)->getHand()->getKickers()->count() > 0 ? $poker->getPlayer(1)->getHand()->getKickers()->map->code : collect();
        $gameable->player_hand_rank = $poker->getPlayer(1)->getHand()->getRank();
        $gameable->dealer_cards = $poker->getPlayer(2)->getPocketCards()->map->code;
        $gameable->dealer_kickers = $poker->getPlayer(2)->getHand()->getKickers()->count() > 0 ? $poker->getPlayer(2)->getHand()->getKickers()->map->code : collect();
        $gameable->dealer_hand = $poker->getPlayer(2)->getHand()->get()->map->code;
        $gameable->dealer_hand_rank = $poker->getPlayer(2)->getHand()->getRank();

        // if the dealer qualifies
        if ($poker->getPlayer(2)->getHand()->isPairOfFoursOrBetter()) {
            $gameable->dealer_qualified = TRUE;

            // compare player and dealer hands
            $result = $poker->getPlayer(1)->getHand()->compare($poker->getPlayer(2)->getHand());

            // player wins
            if ($result == PokerHand::RESULT_WIN) {
                $antePayout = (int) config('casino-holdem.ante_paytable')[$gameable->player_hand_rank];
                $gameable->ante_win = $antePayout > 0 ? $gameable->ante_bet * $antePayout : 0;
                $gameable->call_win = $gameable->call_bet * 2; // call bet always pays 1:1
            // push
            } elseif ($result == PokerHand::RESULT_PUSH) {
                $gameable->ante_win = $gameable->ante_bet;
                $gameable->call_win = $gameable->call_bet;
            }
        // If the dealer does not qualify then the Ante will pay according to the Ante pay table below and the Call bet will push.
        } else {
            $antePayout = (int) config('casino-holdem.ante_paytable')[$gameable->player_hand_rank];
            $gameable->ante_win = $antePayout > 0 ? $gameable->ante_bet * $antePayout : 0;
            $gameable->call_win = $gameable->call_bet;
        }

        if ($gameable->bonus_bet > 0) {
            $bonusHand = new PokerHand($poker->getPlayer(1)->getPocketCards(), $poker->getCommunityCards()->take(3));

            if ($bonusHand->isPairOfAcesOrBetter()) {
                $gameable->player_bonus_hand = $bonusHand->get()->map->code;
                $gameable->player_bonus_hand_rank = $bonusHand->getRank();
                $bonusPayout = (int) config('casino-holdem.bonus_paytable')[$gameable->player_bonus_hand_rank];
                $gameable->bonus_win = $bonusPayout > 0 ? $gameable->bonus_bet * $bonusPayout : 0;
            }
        }

        $this->save([
            'bet' => $gameable->ante_bet + $gameable->bonus_bet + $gameable->call_bet,
            'win' => $gameable->ante_win + $gameable->bonus_win + $gameable->call_win,
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    public static function createRandomGame(User $user): void
    {
        $instance = new self($user);

        $instance->createProvablyFairGame(random_int(10000,99999));

        $minBet = intval(config('settings.bots.games.min_bet'));
        $maxBet = intval(config('settings.bots.games.max_bet'));

        $minBonusBet = intval(config('casino-holdem.min_bonus_bet'));
        $maxBonusBet = intval(config('casino-holdem.max_bonus_bet'));

        $instance
            ->deal([
                'bet' => random_int($minBet ?: config('casino-holdem.min_bet'), $maxBet ?: config('casino-holdem.max_bet')),
                'bonus_bet' => random_int($minBonusBet, random_int(1, $maxBonusBet))
            ])
            ->unsetGameable();

        if (random_int(0, 1) == 0) {
            $instance->fold();
        } else {
            $instance->call();
        }
    }
}
