<?php

namespace Packages\VideoPoker\Services;

use App\Helpers\Games\CardDeck;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use Packages\VideoPoker\Models\VideoPoker;

class GameService extends ParentGameService
{
    protected $gameableClass = VideoPoker::class;

    private $deck;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->deck = new CardDeck();
    }

    public function makeSecret(): string
    {
        return implode(',', $this->deck->shuffle()->get());
    }

    /**
     * Deal initial set of cards
     *
     * @param $params
     */
    public function play($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        // load initially shuffled deck
        $this->deck->set(explode(',', $provablyFairGame->secret));
        // cut the deck (provably fair)
        $this->deck->cut($provablyFairGame->shift_value % 52);

        $gameable = new $this->gameableClass();
        $gameable->deck = $this->deck->get();
        $gameable->hand = $this->deck->get(5);
        $gameable->combination = $this->getCombination($gameable->hand);

//        TESTING
//        -------
//
//
//        ---------------------------------------------------------------------

        // important to save a reference to gameable in the class property, so it can be used in the parent class
        $this->gameable = $gameable;

        // save game
        $this->save(['bet' => $params['bet'], 'win' => 0, 'status' => Game::STATUS_IN_PROGRESS]);

        return $this;
    }

    /**
     * Hold some cards and finish the game
     *
     * @return GameService
     */
    public function draw($params): GameService
    {
        $gameable = $this->getGameable();

        // load saved deck
        $this->deck->set($gameable->deck);

        $gameable->hold = $params['hold'];

        $k = 0;
        $gameable->hand = array_map(function ($card, $i) use ($gameable, &$k) {
            return in_array($i, $gameable->hold)
                ? $card
                : $this->deck->get(1, $k++ + 5)[0];
        }, $gameable->hand, array_keys($gameable->hand));

        $gameable->combination = $this->getCombination($gameable->hand);
        $win = $this->getGame()->bet * (config('video-poker.paytable')[$gameable->combination] ?? 0);

        $this->save(['win' => $win, 'status' => Game::STATUS_COMPLETED]);

        return $this;
    }

    private function getCombination($cards)
    {
        $getRankBall = function ($card) {
            $idx = [
                'T' => 10,
                'J' => 11,
                'Q' => 12,
                'K' => 13,
                'A' => 14,
            ];
            return is_numeric($card[1]) ? $card[1] : $idx[$card[1]];
        };
        usort($cards, function ($a, $b) use ($getRankBall) {
            if ($a[1] == $b[1])
                return $a[0] < $b[0] ? -1 : 1;
            else
                return $getRankBall($a) < $getRankBall($b) ? -1 : 1;
        });

        if (
            count(array_diff(['DT', 'DJ', 'DQ', 'DK', 'DA'], $cards)) == 0 ||
            count(array_diff(['CT', 'CJ', 'CQ', 'CK', 'CA'], $cards)) == 0 ||
            count(array_diff(['HT', 'HJ', 'HQ', 'HK', 'HA'], $cards)) == 0 ||
            count(array_diff(['ST', 'SJ', 'SQ', 'SK', 'SA'], $cards)) == 0
        )
            return VideoPoker::HAND_ROYAL_FLUSH;
        elseif (
            count(array_unique([$cards[0][0], $cards[1][0], $cards[2][0], $cards[3][0], $cards[4][0]])) == 1 &&
            (
                count(array_unique([
                    $getRankBall($cards[0]) - 0,
                    $getRankBall($cards[1]) - 1,
                    $getRankBall($cards[2]) - 2,
                    $getRankBall($cards[3]) - 3,
                    $getRankBall($cards[4]) - 4])) == 1 ||
                (
                    $getRankBall($cards[4]) == 14 &&
                    $getRankBall($cards[0]) == 2 &&
                    count(array_unique([
                        $getRankBall($cards[0]) - 0,
                        $getRankBall($cards[1]) - 1,
                        $getRankBall($cards[2]) - 2,
                        $getRankBall($cards[3]) - 3])) == 1
                )
            )
        )
            return VideoPoker::HAND_STRAIGHT_FLUSH;
        elseif (
        in_array(4, array_count_values([
            $cards[0][1],
            $cards[1][1],
            $cards[2][1],
            $cards[3][1],
            $cards[4][1]
        ]))
        )
            return VideoPoker::HAND_FOUR_OF_A_KIND;
        elseif (
            in_array(3, array_count_values([
                $cards[0][1],
                $cards[1][1],
                $cards[2][1],
                $cards[3][1],
                $cards[4][1]
            ])) &&
            in_array(2, array_count_values([
                $cards[0][1],
                $cards[1][1],
                $cards[2][1],
                $cards[3][1],
                $cards[4][1]
            ]))
        )
            return VideoPoker::HAND_FULL_HOUSE;
        elseif (count(array_unique([$cards[0][0], $cards[1][0], $cards[2][0], $cards[3][0], $cards[4][0]])) == 1)
            return VideoPoker::HAND_FLUSH;
        elseif (
            count(array_unique([
                $getRankBall($cards[0]) - 0,
                $getRankBall($cards[1]) - 1,
                $getRankBall($cards[2]) - 2,
                $getRankBall($cards[3]) - 3,
                $getRankBall($cards[4]) - 4])) == 1 ||
            (
                $getRankBall($cards[4]) == 14 &&
                $getRankBall($cards[0]) == 2 &&
                count(array_unique([
                    $getRankBall($cards[0]) - 0,
                    $getRankBall($cards[1]) - 1,
                    $getRankBall($cards[2]) - 2,
                    $getRankBall($cards[3]) - 3])) == 1
            )
        )
            return VideoPoker::HAND_STRAIGHT;
        elseif (
        in_array(3, array_count_values([
            $cards[0][1],
            $cards[1][1],
            $cards[2][1],
            $cards[3][1],
            $cards[4][1]
        ]))
        )
            return VideoPoker::HAND_THREE_OF_A_KIND;
        elseif (
            (array_count_values(
                    array_count_values([
                        $cards[0][1],
                        $cards[1][1],
                        $cards[2][1],
                        $cards[3][1],
                        $cards[4][1]
                    ]))[2] ?? 0) == 2
        )
            return VideoPoker::HAND_TWO_PAIR;
        elseif (
            in_array(2, array_count_values([
                $cards[0][1],
                $cards[1][1],
                $cards[2][1],
                $cards[3][1],
                $cards[4][1]
            ])) &&
            $getRankBall("n" . array_search(2, array_count_values([
                    $cards[0][1],
                    $cards[1][1],
                    $cards[2][1],
                    $cards[3][1],
                    $cards[4][1]
                ]))) > 10
        )
            return VideoPoker::HAND_JACKS_OR_BETTER;

        return VideoPoker::HAND_NONE;
    }
}
