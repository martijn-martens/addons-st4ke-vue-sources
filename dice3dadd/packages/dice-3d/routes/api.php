<?php

// game routes
Route::name('games.dice-3d.')
    ->namespace('Packages\Dice3D\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/dice-3d/play', 'GameController@play')->name('play');
    });
