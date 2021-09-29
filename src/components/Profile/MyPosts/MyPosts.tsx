import React from 'react';

import Post from "./Post/Post";

import s from './my-posts.module.css'

function MyPosts() {
    return (
        <div className={s.wrap}>
            <h2 className={s.title}>My Posts</h2>
            <form>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
            </form>
            <Post message={"Hello world"}/>
            <Post message={"Second message"}/>
            <Post message={"Odinokun - React developer"}/>
        </div>
    );
}

export default MyPosts;