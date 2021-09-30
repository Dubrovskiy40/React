import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../../../actions/messageActions';
import { showModalMessage } from '../../../../actions/modalMessageActions';
import style from './AddForm.module.css';

const AddForm = () => {
   const [text, setText] = useState('');
   const [author, setAuthor] = useState('');
   const chatId = useSelector((state) => state.chats.activeId);
   const dispatch = useDispatch();

   const addMes = () => {
      const creatMessage = {
         text: text || '-',
         author: author || '-'
      }
      dispatch(addMessage(chatId, creatMessage));
      dispatch(showModalMessage(`Фраза твоя - "${text}"" и имя твоё - "${author}" запомнил я`));
      setText('');
      setAuthor('');
   }
   return (
      <div className={style.wrap}>
         <div>
            <input
               placeholder="Послание"
               className={style.inp}
               value={text}
               onChange={e => setText(e.target.value)} />
         </div>
         <div>
            <input
               placeholder="Оставь имя своё"
               className={style.inp}
               value={author}
               onChange={e => setAuthor(e.target.value)} />
         </div>
         <div>
            <button type="submit" onClick={addMes} className={style.btn} >Отправить послание</button>
         </div>
      </div>
   )
};
export default AddForm;