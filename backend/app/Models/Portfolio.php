<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Portfolio extends Model
{
    use HasFactory;

    protected $table = 'portfolio';
    protected $fillable = [
        'name_album',
        'category',
        'thumbnails',
    ];


    protected function thumbnails(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('cover/' . $value),
        );
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
