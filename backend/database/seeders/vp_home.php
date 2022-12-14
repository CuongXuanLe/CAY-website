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
                'title1' => "CREATIVE FORM IN OUR DESIGN",
                'description1' => "Eg. Our agents are engaged and experienced in the Miami real 
                estate market and well informed about the communities
                they services.",
                'subtitle1' => "CAY STUDIO",
                'background1' => "https://images.unsplash.com/photo-1574025876844-6c9ba8602866",
                'description2' => "Eg. A news article discusses current or recent news of either general interest or of a specific toppic tesst2",
                'background2' => "https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b",
                'imgAbout' => "https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b",
                'descriptionAbout' => "Eg. Test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
            ],
        ]);
    }
}
