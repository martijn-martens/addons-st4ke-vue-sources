<?php

// game routes
Route::name('games.american-roulette.')
    ->namespace('Packages\AmericanRoulette\Http\Controllers')
    ->middleware(['api', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('api/games/american-roulette/play', 'GameController@play')->name('play');
    });
