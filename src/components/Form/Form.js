import style from "./form.module.css";
import React from "react";
import { useState } from 'react';

const Form = ({messageList, messageText, fooText, messageAuthor, fooAuthor, setML, answer}) => {
    const [checked, setChecked] = useState(false);
    const [hidden, setHidden] = useState(true);

    const updateText = () => {
        const message = {
            id: (messageList.length + 1),
            text: messageText || '-',
            author: hidden ? '-' : messageAuthor
        };
        setML(prev => [...prev, message]);
        console.log('Список сообщений', messageList);
    };

    const chengeCheckbox = () => {
        setChecked(!checked);
        setHidden(!hidden);
    };

    return (
        <div className={style.wrap}>
            <input className={style.inp}
                type="text"
                placeholder="Тык"
                value={messageText}
                onChange={event => fooText(event.target.value)}
            />
            <label>
                <input type="checkbox" 
                checked={checked} 
                onChange={chengeCheckbox}
            />Указать автора?
            </label>
            <input className={style.inp} 
                hidden={hidden} 
                type="text" 
                placeholder="Автор"
                value={messageAuthor}
                onChange={event => fooAuthor(event.target.value)}
            />
            <button className={style.btn} 
                onClick={updateText} 
                type='button'>
                    Добавить
            </button>   
            <div className={style.text}>{answer}</div>
        </div>
    );
}
export default Form;
