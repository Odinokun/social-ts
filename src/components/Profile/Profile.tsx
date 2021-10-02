import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePoprsType = {
    posts: object
}

function Profile(props: ProfilePoprsType) {
  return (
    <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
  );
}

export default Profile;