<?php

namespace Packages\Blackjack\Http\Requests;

use App\Rules\BalanceIsSufficient;
use Illuminate\Http\Request;

class Insurance extends Action
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return parent::authorize();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return array_merge(
            parent::rules($request),
            [
                'insurance' => 'required|boolean',
                '*' => new BalanceIsSufficient($this->provablyFairGame->game->bet / 2)
            ]
        );
    }
}
