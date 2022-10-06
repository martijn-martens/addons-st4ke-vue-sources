<?php

// game routes
Route::name('games.video-poker.')
    ->namespace('Packages\VideoPoker\Http\Controllers')
    ->middleware(['bindings', 'throttle:60,1', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('api/games/video-poker/play', 'GameController@play')->name('play');
        Route::post('api/games/video-poker/draw', 'GameController@draw')->name('draw');
    });
