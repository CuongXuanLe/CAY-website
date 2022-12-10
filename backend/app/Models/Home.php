<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;

    protected $table = 'home';

    protected $fillable = [
        'title1',
        'description1',
        'background1',
        'subtitle1',
        'description2',
        'background2',
        'imgAbout',
        'descriptionAbout'
    ];
}
