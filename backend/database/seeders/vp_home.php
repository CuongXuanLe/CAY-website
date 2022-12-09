<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class vp_home extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('home')->insert([
            [
                'title1' => "home",
                'description1' => "home",
                'subtitle1' => "home",
                'background1' => "home",
                'description2' => "home",
                'background2' => "home"
            ],
        ]);
    }
}
