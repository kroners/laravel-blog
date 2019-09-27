<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/welcome/posts', 'PostController@showTopNewPosts');

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function () {
    Route::post('register', 'RegisterController@create');
    Route::post('login', 'LoginController@login');
    Route::get('refresh', 'LoginController@refresh');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', 'LoginController@user');
        Route::post('logout', 'LoginController@logout');
    });
});

Route::resource('users', 'UserController');
Route::resource('posts', 'PostController');
Route::resource('comments', 'CommentController');
