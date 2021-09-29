import React from 'react';

import s from './profile.module.css';

import MyPosts from "./MyPosts/MyPosts";


function Profile() {
  return (
    <div>
      <div className={s.img}>
        <img src="https://source.unsplash.com/random/1600x900" alt="img"/>
      </div>

        <MyPosts/>
    </div>
  );
}

export default Profile;