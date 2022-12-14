<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class vp_contact extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contact')->insert([
            [
                'phone_number' => "+84 (0) 7 6666 0952",
                'email' => "caystudio.contact@gmail.com",
                'facebook' => "https://www.facebook.com/CAYYYYYYYY.studio",
                'instagram' => "https://www.instagram.com/cay.stu/",
                'address' => "46/10A Dũng Sĩ Thanh Khê, Thanh Khe Tay, Đà Nẵng",       
            ],
        ]);
    }
}
