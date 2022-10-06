<?php

return [
    'version'               => '1.0.0',
    'min_bet'               => env('GAME_DICE_HEADS_OR_TAILS_MIN_BET', 1),
    'max_bet'               => env('GAME_DICE_HEADS_OR_TAILS_MAX_BET', 50),
    'bet_change_amount'     => env('GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT', 1),
    'default_bet_amount'    => env('GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT', 1), // how much in credits to bet
    'house_edge'            => env('GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE', 5), // house edge in %
    'images' => [
        'heads' => env('GAME_DICE_HEADS_OR_TAILS_IMAGES_HEADS', '/storage/games/heads-or-tails/heads.jpg'),
        'tails' => env('GAME_DICE_HEADS_OR_TAILS_IMAGES_TAILS', '/storage/games/heads-or-tails/tails.jpg'),
        'edge'  => env('GAME_DICE_HEADS_OR_TAILS_IMAGES_EDGE', '/storage/games/heads-or-tails/edge.jpg'),
    ],
    'animation' => [
        'camera_angle' => env('GAME_DICE_HEADS_OR_TAILS_ANIMATION_CAMERA_ANGLE', 15),
        'camera_position' => env('GAME_DICE_HEADS_OR_TAILS_ANIMATION_CAMERA_POSITION', -20),
        'throw_height' => env('GAME_DICE_HEADS_OR_TAILS_ANIMATION_THROW_HEIGHT', 67),
    ]
];
