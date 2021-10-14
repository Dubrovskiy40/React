import MessageItem from './MessageItem/MessageItem';
import { useSelector } from 'react-redux';
import AddForm from './AddForm/AddForm';
import ModalMessage from './ModalMessage/ModalMessage';
import style from './MessageList.module.css';

// import { useEffect, useState } from "react";

const MessageList = () => {
//   const [messageList, setMessageList] = useState();

//   useEffect(() => {
//     fetch("http://localhost:3001/dialogs")
//       .then((response) => response.json())
//       .then((messageList) => setMessageList(messageList));
//   }, []);

   const chatId = useSelector((state) => state.chats.activeId);
   const messageList = useSelector((state) => state.messages[chatId]);


   return (
      <div className={style.wrap}>
         <AddForm />
         {/* <MessageItem messageList={messageList} /> */}
         <MessageItem messageList={messageList} />
         <ModalMessage />
      </div>
   )
}
export default MessageList;