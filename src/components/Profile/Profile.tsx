import React from 'react';
import {ProfilePageType} from "../../redux/state";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type profilePropsType = {
    profilePage: ProfilePageType
}

const Profile:React.FC<profilePropsType> = (props) => (
    <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}/>
    </div>
);

export default Profile;