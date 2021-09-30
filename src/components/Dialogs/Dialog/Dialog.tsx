import React from 'react';
import {NavLink} from "react-router-dom";

import s from "./dialog-item.module.css";

type DialogPropsType ={
    name: string,
    link: number
}

function Dialog(props: DialogPropsType) {
    return (
        <li>
            <NavLink className={s.link} to={"/dialogs/" + props.link} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </li>
    );
}

export default Dialog;