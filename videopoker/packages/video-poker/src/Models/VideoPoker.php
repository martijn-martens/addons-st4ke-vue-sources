<?php

namespace Packages\VideoPoker\Models;

use App\Models\Game;
use Illuminate\Database\Eloquent\Model;

class VideoPoker extends Model
{
    const HAND_NONE = 0;
    const HAND_JACKS_OR_BETTER = 1;
    const HAND_TWO_PAIR = 2;
    const HAND_THREE_OF_A_KIND = 3;
    const HAND_STRAIGHT = 4;
    const HAND_FLUSH = 5;
    const HAND_FULL_HOUSE = 6;
    const HAND_FOUR_OF_A_KIND = 7;
    const HAND_STRAIGHT_FLUSH = 8;
    const HAND_ROYAL_FLUSH = 9;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'games_video_poker';

    /**
     * The attributes that should be hidden from JSON output.
     *
     * @var array
     */
    protected $hidden = ['deck'];

    protected $appends = ['result'];

    /**
     * This format will be used when the model is serialized to an array or JSON.
     *
     * @var array
     */
    protected $casts = [
        'deck' => 'array',
        'hold' => 'array',
        'hand' => 'array',
    ];

    public function game()
    {
        return $this->morphOne(Game::class, 'gameable');
    }

    /**
     * Getter for result attribute
     *
     * @return string
     */
    public function getResultAttribute(): string
    {
        return self::combinations()[$this->combination] ?? '';
    }

    public static function combinations(): array
    {
        return [
            self::HAND_NONE               => __('Nothing'),
            self::HAND_JACKS_OR_BETTER    => __('Jacks or better'),
            self::HAND_TWO_PAIR           => __('Two pair'),
            self::HAND_THREE_OF_A_KIND    => __('Three of a kind'),
            self::HAND_STRAIGHT           => __('Straight'),
            self::HAND_FLUSH              => __('Flush'),
            self::HAND_FULL_HOUSE         => __('Full house'),
            self::HAND_FOUR_OF_A_KIND     => __('Four of a kind'),
            self::HAND_STRAIGHT_FLUSH     => __('Straight flush'),
            self::HAND_ROYAL_FLUSH        => __('Royal flush'),
        ];
    }

    /**
     * Getter for secret_attribute attribute
     *
     * @return string
     */
    public function getSecretAttributeAttribute(): string
    {
        return 'deck';
    }

    /**
     * Getter for secret_attribute_hint attribute
     *
     * @return string
     */
    public function getSecretAttributeHintAttribute(): string
    {
        return __('The first N cards are removed from the top of the deck and placed under the remaining cards. N is the remainder of dividing the Shift value by 52.');
    }
}
