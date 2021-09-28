import React from 'react';

import s from './aside.module.css'

function Aside() {
    return (
        <aside className={s.aside}>
            <nav>
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Music</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;