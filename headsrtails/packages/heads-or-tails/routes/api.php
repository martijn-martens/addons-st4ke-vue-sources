<?php

// game routes
Route::name('games.heads-or-tails.')
    ->namespace('Packages\HeadsOrTails\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        // games
        Route::post('api/games/heads-or-tails/play', 'GameController@play')->name('play');
    });

// ADMIN ROUTES
Route::namespace('Packages\HeadsOrTails\Http\Controllers\Admin')
    ->prefix('api/admin')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'role:' . App\Models\User::ROLE_ADMIN])
    ->group(function () {
        Route::post('settings/heads-or-tails/image', 'SettingController@uploadImage');
    });
