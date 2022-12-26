<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Carbon\Carbon;

class Schedule extends Model
{
    use HasApiTokens, HasFactory;
    const UPDATED_AT = null;
    protected $table = 'schedule';

    protected $fillable = [
        'title',
        'phone',
        'birthday',
        'email',
        'note',
        'start',
        'end',
        'created_at',
        'approval',
    ];

    protected $dates = [
        'birthday',
        'start',
        'end',
        'created_at',
    ];

    protected $attributes = [
        'approval' => false,
    ];

    protected $appends = [
        'formatted_birthday',
        'formatted_start',
        'formatted_end',
        'formatted_created_at',
    ];

    public function getFormattedBirthdayAttribute()
    {
        return $this->birthday?->format('d-m-Y') ?? '';
    }

    public function getFormattedCreatedAtAttribute()
    {
        return $this->created_at->format('d-m-Y');
    }

    public function getFormattedStartAttribute()
    {
        return $this->start->format('H:i');
    }

    public function getFormattedEndAttribute()
    {
        return $this->end->format('H:i');
    }
}
