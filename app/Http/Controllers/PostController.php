<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create($request)
    {
        return view('posts.create');
    }

    public function store()
    {
        $data = request()->validate([
            'caption' => 'required',
            'image' => ['required', 'image'],
            'description' => 'required',
        ]);

        $imagePath = request('image')->store('uploads', 'public');

        $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200);
        $image->save();

        auth()->user()->posts()->create([
            'caption' => $data['caption'],
            'image' => $imagePath,
        ]);
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function update()
    { }

    public function showTopNewPosts(Request $request)
    {
        $top_posts = Post::where('active', true)->take(10)->get();
        $new_posts = Post::where('active', true)->take(10)->get();

        return response()->json(['top_posts' => $top_posts, 'new_posts' => $new_posts]);
    }
}
