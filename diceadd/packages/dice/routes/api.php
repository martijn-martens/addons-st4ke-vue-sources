<?php

// game routes
Route::name('games.dice.')
    ->namespace('Packages\Dice\Http\Controllers')
    ->middleware(['bindings', 'throttle:60,1', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('api/games/dice/play', 'GameController@play')->name('play');
    });
