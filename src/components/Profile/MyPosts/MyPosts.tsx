import React from 'react';

import s from './my-posts.module.css'

import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElement = props.posts.map((item) =>
        <Post message={item.message} likes={item.likes} key={item.id}/>
    )

    return (
        <div>
            <div className={s.wrap}>
                <form>
                    <textarea name="" id=""></textarea>
                    <button>Add post</button>
                </form>
            </div>
            <div>{postElement}</div>
        </div>
    );
};

export default MyPosts;