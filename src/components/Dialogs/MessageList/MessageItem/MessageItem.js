import { useDispatch, useSelector } from 'react-redux';
import { showModalMessage } from '../../../../actions/modalMessageActions';
import { deleteMessage } from '../../../../actions/messageActions';
import style from './MessageItem.module.css';

const MessageItem = ({ messageList }) => {
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state.chats.activeId);
  const deleteItem = (id, author) => {
    dispatch(deleteMessage(chatId, id));
    dispatch(showModalMessage(`"${author}" - твой текст расщеплен на молекулы`));
  };
  
  return (
    <div className={style.messageItem__wrap}>
      {messageList.map((item) => (
        <div key={item.id} className={style.border__btn}>
            <button onClick={() => deleteItem(item.id, item.author)} className={style.btn}>x</button>
            <div>
              <h4>
                {item.author}
              </h4>
              <p>{item.text}</p>
            </div>
        </div>
      ))}
    </div>
  );
};
export default MessageItem;
