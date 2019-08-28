@extends('layouts.app')

@section('content')
<div class="content pt-2">
    <div class="title m-b-md">
        El huariquero
    </div>
</div>
<div class="home_top_spots">
    <div class="container">
        <div class="row">
            <p>Aqui algunos de los mas comentados y valorados:</p>
        </div>
        @foreach ($posts as $post)
        <div class="row">
            <div class="col-sm-6 offset-3">
                <a href="/post/{{ $post->id }}">
                    <span class="text-dark">{{ $post->title }}</span>
                    <br/>
                    {{ $post->description }}
                </a>
                <p>{{ $post->created_at }}</p>
            </div>
            <div class="row pt-2 pb-4">
                <div class="col-sm6 offset-3">
                    <span class="font-weight-bold">
                        <a href="/user/{{ $post->user->id }}">
                            <span class="text-dark">{{ $post->user->username }}</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection
