<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class vp_footer extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('footer')->insert([
            [
                "name"=>"CAYSTU",
                "address"=>"46/10A Dung Si Thanh Khe St.Thanh Khe Tay, Da Nang 550000",
                "phone_number"=>"+84 (0) 7 6666 0952",
                "email"=>"caystudiooo.contact@gmail.com",
                "facebook" => "https://www.facebook.com/CAYYYYYYYY.studio",
                "instagram" => "https://www.instagram.com/cay.stu",
            ],
        ]);
    }
}
