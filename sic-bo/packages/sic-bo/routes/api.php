<?php

// game routes
Route::name('games.sic-bo.')
    ->namespace('Packages\SicBo\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/sic-bo/play', 'GameController@play')->name('play');
    });
