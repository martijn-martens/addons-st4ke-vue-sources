<?php

// game routes
Route::name('games.lucky-wheel.')
    ->prefix('api')
    ->namespace('Packages\LuckyWheel\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('games/lucky-wheel/play', 'GameController@play')->name('play');
    });
