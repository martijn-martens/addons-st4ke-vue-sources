<?php

Route::namespace('Packages\Raffle\Http\Controllers')
    ->prefix('api/public')
    ->middleware(['api'])
    ->group(function () {
        Route::get('raffles', 'RaffleController@featured');
    });

Route::namespace('Packages\Raffle\Http\Controllers')
    ->prefix('api')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent'])
    ->group(function () {
        Route::post('raffles/{raffle}', 'RaffleController@buy');
        Route::get('raffles', 'RaffleController@index');
    });

// ADMIN ROUTES
Route::namespace('Packages\Raffle\Http\Controllers\Admin')
    ->prefix('api/admin')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'role:' . App\Models\User::ROLE_ADMIN])
    ->group(function () {
        Route::resource('raffles', 'RaffleController')->only(['index', 'show', 'store', 'update']);
        Route::post('raffles/{raffle}/complete', 'RaffleController@complete');
    });
