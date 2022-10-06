<?php

namespace Packages\CryptoPrediction\Services;

use App\Helpers\Api\AssetApi;
use Illuminate\Support\Collection;

class CryptoAssetApi extends AssetApi
{
    protected function getBaseUri(): string
    {
        return 'https://api.coincap.io/v2/';
    }

    protected function getEndpoints(): array
    {
        return [
            parent::TYPE_LIST      => 'assets?limit=2000',
            parent::TYPE_PRICE     => 'assets/%s',
            parent::TYPE_HISTORY   => 'assets/%s/history?interval=%s&start=%s&end=%s',
        ];
    }

    protected function getKeys(): array
    {
        return [
            parent::TYPE_LIST      => 'data',
            parent::TYPE_PRICE     => 'data.priceUsd',
            parent::TYPE_HISTORY   => 'data',
        ];
    }

    protected function getMappers(): array
    {
        return [
            parent::TYPE_HISTORY => function (Collection $data) {
                return $data->map(function ($item) {
                    return (object) [
                        'date'  => $item->time,
                        'value' => (float) $item->priceUsd
                    ];
                });
            }
        ];
    }
}
