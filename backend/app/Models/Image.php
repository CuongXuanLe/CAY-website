<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Portfolio;

class Image extends Model
{
    use HasFactory;
    protected $table = 'images';

    protected $fillable = [
        'portfolio_id',
        'list_image',
    ];

    public function portfolio() {
        return $this->belongsTo(Portfolio::class);
    }
}
