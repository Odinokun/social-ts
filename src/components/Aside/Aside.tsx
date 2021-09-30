import React from 'react';
import { NavLink } from 'react-router-dom';

import 'normalize.css';
import s from './aside.module.css'

function Aside() {
    return (
        <aside className={s.aside}>
            <nav>
                <ul className={s.aside__list}>
                    <li className={s.item}>
                        <NavLink className={s.aside__link} to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.aside__link} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.aside__link} to="/news" activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.aside__link} to="/music" activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.aside__link} to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;