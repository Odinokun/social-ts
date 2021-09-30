import React from 'react';

import s from "./profile-info.module.css";

function ProfileInfo() {
    return (
        <>
            <div className={s.img}>
                <img src="https://source.unsplash.com/random/1600x900" alt="img"/>
            </div>
            <div className={s.description}>
                <h2>Ava + description</h2>
            </div>
        </>
    );
}

export default ProfileInfo;