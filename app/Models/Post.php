<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Models\App\Category;
use Models\App\Comment;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment);
    }

    public function category()
    {
        return $this->belongsTo(Category);
    }
}
