<?php

// game routes
Route::name('games.blackjack.')
    ->namespace('Packages\Blackjack\Http\Controllers')
    ->middleware(['bindings', 'throttle:60,1', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('api/games/blackjack/play', 'GameController@play')->name('play');
        Route::post('api/games/blackjack/insurance', 'GameController@insurance')->name('insurance');
        Route::post('api/games/blackjack/hit', 'GameController@hit')->name('hit');
        Route::post('api/games/blackjack/double', 'GameController@double')->name('double');
        Route::post('api/games/blackjack/stand', 'GameController@stand')->name('stand');
        Route::post('api/games/blackjack/split', 'GameController@split')->name('split');
        Route::post('api/games/blackjack/split/hit', 'GameController@splitHit')->name('split-hit');
        Route::post('api/games/blackjack/split/stand', 'GameController@splitStand')->name('split-stand');
    });
