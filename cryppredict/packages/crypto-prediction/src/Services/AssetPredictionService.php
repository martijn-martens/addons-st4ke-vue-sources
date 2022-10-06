<?php

namespace Packages\CryptoPrediction\Services;

use App\Services\AssetPredictionService as ParentAssetPredictionService;
use Packages\CryptoPrediction\Models\CryptoPrediction;

class AssetPredictionService extends ParentAssetPredictionService
{
    protected $apiClass = CryptoAssetApi::class;

    protected $gameableClass = CryptoPrediction::class;
}
