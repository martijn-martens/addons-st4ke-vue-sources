<?php

namespace Packages\Slots\Http\Requests;

use App\Http\Requests\PlayGame;
use App\Rules\BalanceIsSufficient;
use Packages\Slots\Models\Slots;

class Play extends PlayGame
{
    protected $gamePackageId = 'slots';
    protected $gameableClass = Slots::class;

    public function authorize()
    {
        $config = is_integer($this->variation) ? (config('slots.variations')[$this->variation] ?? NULL) : NULL;

        return parent::authorize() && $config;
    }

    public function rules()
    {
        return array_merge(
            parent::rules(),
            [
                'bet' => [
                    'required',
                    'integer',
                    'min:' . config('slots.variations')[$this->variation]->min_bet,
                    'max:' . config('slots.variations')[$this->variation]->max_bet,
                    new BalanceIsSufficient($this->user(), $this->bet)
                ],
                'lines'  => 'required|integer|min:1|max:20'
            ]
        );
    }
}
