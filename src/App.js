import './App.css';
import { useState, useEffect  } from 'react';
import Form from './components/Form/Form';

let answerBot = '';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');
  
  useEffect(() => {
    const last = messageList.slice(-1);
    setTimeout(() => {
      if (last.length) {
        let answerAuthor = last[0].author;
        let answerText = last[0].text;
        answerBot = `Принял сообщение от ${answerAuthor} с текстом: ${answerText}`;
        console.log('Ответ робота:', answerBot);
      }
    }, 1500);
    setMessageText('');
    setMessageAuthor('');
  }, [messageList]);

  return (
    <div className='container'>
      <h2 className='title'>"Тут можно оставить ваш комментарий ;-)"</h2>
      <Form messageList={messageList}
        messageText={messageText}
        fooText={setMessageText}
        messageAuthor={messageAuthor}
        fooAuthor={setMessageAuthor}
        setML={setMessageList}
        answer={answerBot}
      />
    </div>
  );
};

export default App;