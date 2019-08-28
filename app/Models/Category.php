<?php

namespace Models\App;

use App\Models\Post;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function posts()
    {
        return $this->hasMany(Post);
    }
}
