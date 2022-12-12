<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guide_list extends Model
{
    use HasFactory;

    protected $table = 'guide_list';

    protected $fillable = [
        'item',
    ];

}
