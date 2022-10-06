<?php

namespace Packages\AmericanRoulette\Http\Requests;

use App\Http\Requests\PlayGame;
use App\Rules\BalanceIsSufficient;
use Packages\AmericanRoulette\Models\AmericanRoulette;
use Packages\AmericanRoulette\Rules\BetsAreValid;

class Play extends PlayGame
{
    protected $gamePackageId = 'american-roulette';
    protected $gameableClass = AmericanRoulette::class;

    public function rules()
    {
        $totalBetAmount = is_array($this->bets) ? array_sum($this->bets) : 0;

        return [
            'hash' => 'required|size:64',
            'bets' => [
                'required',
                'array',
                new BetsAreValid(),
                new BalanceIsSufficient($this->user(), $totalBetAmount)
            ]
        ];
    }
}
