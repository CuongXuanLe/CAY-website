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
        DB::table('guide')->insert([
            [
                'rent_cost' => "150.000",
                'deposit_cost' => "100.000",
                'deposit_information' => "07 772 552 752 Nguyễn Minh Đức",
                'qr_image' => "https://i.pinimg.com/564x/60/c1/4a/60c14a43fb4745795b3b358868517e79.jpg",
                'link_fb' => "https://www.facebook.com/CAYYYYYYYY.studio",
                'img_studio' => "https://anlocgroup.com/wp-content/uploads/2020/09/thiet-ke-can-ho-30m2-voi-noi-that-thong-minh-1.jpg",
            ],
        ]);
    }
}
