import React from 'react';

import s from './my-posts.module.css'

import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.wrap}>
            <form>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
            </form>

            {/*{postsData.map((item) => (*/}
            {/*    <Post message={item.message} likes={item.likes} key={item.id}/>*/}
            {/*))}*/}
        </div>
    );
}

export default MyPosts;