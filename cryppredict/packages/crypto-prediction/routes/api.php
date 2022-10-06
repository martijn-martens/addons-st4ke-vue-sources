<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Packages\CryptoPrediction\Http\Controllers\Admin\SettingController;
use Packages\CryptoPrediction\Http\Controllers\AssetPredictionController;

Route::name('markets.crypto-prediction.')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'concurrent', 'last_seen'])
    ->group(function () {
        Route::get('api/predictions/crypto/assets/{asset}/index', [AssetPredictionController::class, 'index'])->name('index');
        Route::post('api/predictions/crypto/assets/{asset}/make', [AssetPredictionController::class, 'make'])->name('make');
        Route::post('api/predictions/{game}/complete', [AssetPredictionController::class, 'complete'])->name('complete');
    });

// ADMIN ROUTES
Route::prefix('api/admin')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'role:' . User::ROLE_ADMIN, 'last_seen'])
    ->group(function () {
        Route::post('settings/crypto-prediction/seed', [SettingController::class, 'seed']);
    });
