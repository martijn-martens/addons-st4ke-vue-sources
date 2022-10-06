<?php

namespace Packages\MultiplayerBlackjack\Http\Requests;

use App\Http\Requests\PlayMultiplayerGame;
use Packages\MultiplayerBlackjack\Models\MultiplayerBlackjack;

class Play extends PlayMultiplayerGame
{
    protected $gamePackageId = 'multiplayer-blackjack';
    protected $gameableClass = MultiplayerBlackjack::class;
}
