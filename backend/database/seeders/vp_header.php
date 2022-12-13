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
                "logo_img"=>"http://thietkelogosaigon.com/wp-content/uploads/2020/01/attachment_91976356-e1539290932445.png",
                "logo_name"=>"CAYYY STUDIO"
            ],
        ]);
    }
}
