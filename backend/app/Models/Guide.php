<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    use HasFactory;

    protected $table = 'guide';

    protected $fillable = [
        'rent_cost',
        'deposit_cost',
        'deposit_information',
        'qr_image',
        'link_fb',
        'img_studio',
    ];

}
