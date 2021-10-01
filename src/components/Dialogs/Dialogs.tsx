import React from 'react';

import s from './dialogs.module.css';
// import dialogsData from "../../helpers/dialogs.helper";
// import messagesData from "../../helpers/messages.helper";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={s.wrap}>
            <div className={s.dialogs}>
                <ul className={s.dialogs__list}>

                    {/*{dialogsData.map((item) => (*/}
                    {/*    <Dialog*/}
                    {/*        name={item.name}*/}
                    {/*        link={item.id}*/}
                    {/*        key={item.id}*/}
                    {/*    />*/}
                    {/*))}*/}

                </ul>
            </div>

            <div className={s.messages}>
                <ul className={s.messages__list}>

                    {/*{messagesData.map((item) => (*/}
                    {/*    <Message*/}
                    {/*        message={item.message}*/}
                    {/*        key={item.id}*/}
                    {/*    />*/}
                    {/*))}*/}

                </ul>
            </div>
        </div>
    )
}

export default Dialogs;