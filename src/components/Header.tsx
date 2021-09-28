import React from 'react';

import s from './header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <img src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg" alt="logo"/>
        </header>
    );
}

export default Header;