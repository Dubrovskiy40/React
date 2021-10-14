import { useDispatch } from "react-redux";
import { showModalMessage } from "../../../../actions/modalMessageActions";
import { useState } from 'react';
import { createChat } from '../../../../actions/chatsActions';
import style from "./CreateDialog.module.css";

const CreateDialog = () => {
    const [ name, setName] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createChat(name));
        dispatch(showModalMessage(`Чат - "${name}" приветствует тебя`));
        setName('');
    }

    return (
    <div  className={style.wrap}>
        <h3>Добавить новый чат</h3>
        <input type="text"
            value={name} 
            placeholder="Новый чат" 
            className={style.inp} 
            onChange={(e) => setName(e.target.value)} />
        <button type="submit" className={style.btn} onClick={submitHandler}>Добавить</button>
    </div>
    );
};
export default CreateDialog;
