import React from 'react';

import {DialogsPageType} from "../../redux/state";

import s from './dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs: React.FC<DialogsPageType> = (props) => {

        let dialogsElements = props.dialogs.map((item) =>
            <Dialog name={item.name} id={item.id} key={item.id}/>
        )

        let messagesElements = props.messages.map((item) =>
            <Message message={item.message} key={item.id}/>
        )

        return (
            <div className={s.wrap}>
                <div className={s.dialogs}>
                    <ul className={s.dialogs__list}>

                        {dialogsElements}

                    </ul>
                </div>

                <div className={s.messages}>
                    <ul className={s.messages__list}>

                        {messagesElements}

                    </ul>
                </div>
            </div>
        )
    }
;

export default Dialogs;
