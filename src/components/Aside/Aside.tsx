import React from 'react';
import { Link } from 'react-router-dom';

import 'normalize.css';
import s from './aside.module.css'

function Aside() {
    return (
        <aside className={s.aside}>
            <nav>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dialogs">Messages</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;