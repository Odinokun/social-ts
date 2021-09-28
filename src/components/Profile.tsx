import React from 'react';

import s from './profile.module.css'

function Profile() {
  return (
    <div>
      <div className={s.img}>
        <img src="https://source.unsplash.com/random/1600x900" alt="img"/>
      </div>
    </div>
  );
}

export default Profile;