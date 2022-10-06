<?php

namespace Packages\EuropeanRoulette\Http\Requests;

use App\Http\Requests\PlayGame;
use App\Rules\BalanceIsSufficient;
use Packages\EuropeanRoulette\Models\EuropeanRoulette;
use Packages\EuropeanRoulette\Rules\BetsAreValid;

class Play extends PlayGame
{
    protected $gamePackageId = 'european-roulette';
    protected $gameableClass = EuropeanRoulette::class;

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
