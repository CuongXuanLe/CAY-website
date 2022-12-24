<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;

class Portfolio extends Model
{
    use HasFactory;

    protected $table = 'portfolio';
    protected $fillable = [
        'name_album',
        'category',
        'thumbnails',
    ];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
