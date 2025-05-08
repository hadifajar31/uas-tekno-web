<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{
    /**
     * Display a listing of posts
     *
     * @return Response
     */
    public function index()
    {
        // get all posts
        $posts = Post::latest()->get();

        // return view
        return inertia('Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new post
     *
     * @return Response
     */
    public function create()
    {
        return inertia('Posts/Create');
    }

    /**
     * Store a newly created post in storage
     *
     * @param  Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        // set validation
        $request->validate([
            'title'    => 'required',
            'content'  => 'required',
            'quantity' => 'required',
        ]);

        // create post
        Post::create([
            'title'    => $request->title,
            'content'  => $request->content,
            'quantity' => $request->quantity,
        ]);

        // redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Show the form for editing the specified post
     *
     * @param Post $post
     * @return Response
     */
    public function edit(Post $post)
    {
        return inertia('Posts/Edit', [
            'post' => $post,
        ]);
    }

    /**
     * Update the specified post in storage
     *
     * @param Request $request
     * @param Post $post
     * @return RedirectResponse
     */
    public function update(Request $request, Post $post)
    {
        // set validation
        $request->validate([
            'title'    => 'required',
            'content'  => 'required',
            'quantity' => 'required',
        ]);

        // update post
        $post->update([
            'title'    => $request->title,
            'content'  => $request->content,
            'quantity' => $request->quantity,
        ]);

        // redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Diubah!');
    }

    /**
     * Remove the specified post from storage
     *
     * @param Post $post
     * @return RedirectResponse
     */
    public function destroy(Post $post)
    {
        // delete post
        $post->delete();

        // redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
