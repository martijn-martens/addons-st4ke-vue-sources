<?php

namespace Packages\Raffle\Helpers\Queries;

use App\Helpers\Queries\Query;

class RaffleQuery extends Query
{
    protected $searchableColumns = ['title'];
}
