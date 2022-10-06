<?php

// game routes
Route::name('games.casino-holdem.')
    ->namespace('Packages\CasinoHoldem\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/casino-holdem/play', 'GameController@play')->name('play');
        Route::post('api/games/casino-holdem/fold', 'GameController@fold')->name('fold');
        Route::post('api/games/casino-holdem/call', 'GameController@call')->name('call');
    });
