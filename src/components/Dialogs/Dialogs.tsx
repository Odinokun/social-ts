import React from 'react';

import s from './dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={s.wrap}>
            <div className={s.dialogs}>
                <ul className={s.dialogs__list}>
                    <Dialog name="Arnold" link={1}/>
                    <Dialog name="Silvester" link={2}/>
                    <Dialog name="Jan Clod" link={3}/>
                    <Dialog name="Chuck" link={4}/>
                    <Dialog name="Jackie" link={5}/>
                </ul>
            </div>

            <div className={s.messages}>
                <ul className={s.messages__list}>
                    <Message message="Hello! First message"/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore laboriosam necessitatibus nemo, nostrum nulla officia soluta tenetur? Exercitationem, repellat."/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore laboriosam necessitatibus nemo, nostrum nulla officia soluta tenetur? Exercitationem, repellat."/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi beatae commodi doloremque in molestias necessitatibus numquam perspiciatis quasi. Doloremque et exercitationem omnis tempore. Adipisci architecto cupiditate distinctio fugiat harum id magnam modi, non qui recusandae, tempora unde voluptas?"/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi beatae commodi doloremque in molestias necessitatibus numquam perspiciatis quasi. Doloremque et exercitationem omnis tempore. Adipisci architecto cupiditate distinctio fugiat harum id magnam modi, non qui recusandae, tempora unde voluptas?"/>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;