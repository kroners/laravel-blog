<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'user_id' => 1,
            'title' => 'Chifa San joy lao',
            'description' => 'Me parecio un buen lugar para probar comida china. REcomensadod',
            'status_id' => 1,
            'likes' => Integer::random(5),
            'category_id' => 1,
            'active' => 1,
        ], [
            'user_id' => 1,
            'title' => 'Chifa San joy lao',
            'description' => 'Me parecio un buen lugar para probar comida china. REcomensadod',
            'status_id' => 1,
            'likes' => Integer::random(5),
            'category_id' => 1,
            'active' => 1,
        ], [
            'user_id' => 1,
            'title' => 'Chifa San joy lao',
            'description' => 'Me parecio un buen lugar para probar comida china. REcomensadod',
            'status_id' => 1,
            'likes' => Integer::random(5),
            'category_id' => 1,
            'active' => 1,
        ], [
            'user_id' => 1,
            'title' => 'Chifa San joy lao',
            'description' => 'Me parecio un buen lugar para probar comida china. REcomensadod',
            'status_id' => 1,
            'likes' => Integer::random(5),
            'category_id' => 1,
            'active' => 1,
        ], [
            'user_id' => 1,
            'title' => 'Chifa San joy lao',
            'description' => 'Me parecio un buen lugar para probar comida china. REcomensadod',
            'status_id' => 1,
            'likes' => Integer::random(5),
            'category_id' => 1,
            'active' => 1,
        ]);
    }
}
