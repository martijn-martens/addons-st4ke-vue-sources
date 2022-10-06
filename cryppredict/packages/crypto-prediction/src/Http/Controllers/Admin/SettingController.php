<?php

namespace Packages\CryptoPrediction\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;

class SettingController extends Controller
{
    public function seed()
    {
        // When using CryptoPredictionPackageSeeder::class it doesn't work
        Artisan::call('db:seed', ['--class' => '\\CryptoPredictionPackageSeeder']);

        return $this->successResponse();
    }
}
