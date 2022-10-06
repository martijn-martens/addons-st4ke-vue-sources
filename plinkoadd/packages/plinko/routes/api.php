<?php

// game routes
Route::name('games.plinko.')
    ->namespace('Packages\Plinko\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/plinko/play', 'GameController@play')->name('play');
    });
