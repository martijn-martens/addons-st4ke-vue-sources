<?php

// game routes
Route::name('games.european-roulette.')
    ->namespace('Packages\EuropeanRoulette\Http\Controllers')
    ->middleware(['api', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('api/games/european-roulette/play', 'GameController@play')->name('play');
    });
