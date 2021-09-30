import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, addChat } from '../../../actions/chatsActions';
import { deleteMessageList } from '../../../actions/messageActions';
import { showModalMessage } from '../../../actions/modalMessageActions';
import style from './DialogList.module.css';
import CreateDialog from './CreateDialog/CreateDialog';

const DialogList = () => {
   const chats = useSelector(state => state.chats.chats);
   const dispatch = useDispatch();
   const handlerChat = (id) => dispatch(addChat(id));
   const delChat = (id, name) => {
      dispatch(deleteChat(id));
      dispatch(deleteMessageList(id));
      dispatch(showModalMessage(`Чат - "${name}" прощается с тобой`));
   }

   return (
      <div className={style.wrap}>
         <h2>Список чатов:</h2>
         {chats.map((chat) => (
            <div className={style.border__btn}
               key={chat.id}
               onClick={() => handlerChat(chat.id)}
            >
               <h3 className={style.title}>
                  {chat.name}
               </h3>
               <div>
                  <button onClick={() => delChat(chat.id, chat.name)} className={style.btn}>x</button>
               </div>
            </div>))}
            <CreateDialog />
      </div>
   )
}
export default DialogList;
