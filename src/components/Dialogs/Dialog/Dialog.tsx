import React from 'react';
import {NavLink} from "react-router-dom";

import s from "./dialog.module.css";

type DialogPropsType = {
    name: string,
    id: number
}

function Dialog(props: DialogPropsType) {
    return (
        <li>
            <NavLink className={s.link} to={"/dialogs/" + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </li>
    );
}

export default Dialog;