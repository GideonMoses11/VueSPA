<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
     // all Posts
     public function index()
     {
         $posts = Post::all()->toArray();
         return array_reverse($posts);
         
         
     }
 
     // add Post
     public function add(Request $request)
     {
         $post = new Post([
             'topic' => $request->input('topic'),
             'body' => $request->input('body')
         ]);
         $post->save();
 
         return response()->json('The Post successfully added');
     }
 
     // edit Post
     public function edit($id)
     {
         $post = Post::find($id);
         return response()->json($post);
     }
 
     // update Post
     public function update($id, Request $request)
     {
         $post = Post::find($id);
         $post->update($request->all());
 
         return response()->json('The Post successfully updated');
     }
 
     // delete Post
     public function delete($id)
     {
         $post = Post::find($id);
         $post->delete();
 
         return response()->json('The Post successfully deleted');
     }
}
