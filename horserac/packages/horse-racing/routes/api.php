<?php

// game routes
Route::name('games.horse-racing.')
    ->namespace('Packages\HorseRacing\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/horse-racing/play', 'GameController@play')->name('play');
    });
