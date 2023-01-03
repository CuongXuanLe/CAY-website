<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $fillable = [
        'image',
        'portfolio_id',
    ];


    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('images/' . $value),
        );
    }

    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class);
    }
}
