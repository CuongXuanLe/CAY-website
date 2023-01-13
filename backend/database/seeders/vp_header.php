<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class vp_header extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('header')->insert([
            [
                "logo_img"=>"https://f20-zpc.zdn.vn/8091633100929075728/fb8664ebd91a0144580b.jpg",
                "logo_name"=>"CAY STUDIO"
            ],
        ]);
    }
}
