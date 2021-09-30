import React from 'react';

import s from "./message.module.css";

type MessagePropsType ={
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <li className={s.message}>{props.message}</li>
    );
}

export default Message;