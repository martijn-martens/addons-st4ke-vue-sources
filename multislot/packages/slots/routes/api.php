<?php

// game routes
Route::name('games.slots.')
    ->prefix('api')
    ->namespace('Packages\Slots\Http\Controllers')
    ->middleware(['api', 'auth:api', 'active', '2fa'])
    ->group(function () {
        // games
        Route::post('games/slots/play', 'GameController@play')->name('play');
    });

// ADMIN ROUTES
Route::namespace('Packages\Slots\Http\Controllers\Admin')
    ->prefix('api/admin')
    ->middleware(['api', 'auth:api', 'active', '2fa', 'role:' . App\Models\User::ROLE_ADMIN])
    ->group(function () {
        Route::post('settings/slots/variations/{variation}', 'SettingController@cloneVariation');
        Route::delete('settings/slots/variations/{variation}', 'SettingController@removeVariation');
        Route::post('settings/slots/variations/{variation}/image', 'SettingController@uploadImage');
    });
