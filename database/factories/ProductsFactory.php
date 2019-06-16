<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Products;
use Faker\Generator as Faker;

$factory->define(App\Products::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence,
        'price' => $faker->latitude(0.50, 100),
        'weigth' => $faker->latitude(0.50, 10),
        'size' => $faker->buildingNumber
    ];
});
