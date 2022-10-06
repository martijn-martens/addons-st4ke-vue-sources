<?php

// game routes
Route::name('games.multiplayer-blackjack.')
    ->namespace('Packages\MultiplayerBlackjack\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'room.lock'])
    ->group(function () {
        // game actions
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/play', 'GameController@play')->name('play');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/hit', 'GameController@hit')->name('hit');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/stand', 'GameController@stand')->name('stand');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/complete', 'GameController@complete')->name('complete');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/cancel', 'GameController@cancel')->name('cancel');
    });
