import { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import HeaderNav from './components/HeaderNav/HeaderNav';
import MainContent from './components/MainContent/MainContent';

import { withTheme } from '@material-ui/core/styles';

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
    <>
      <HeaderNav />
      <MainContent />
      <Form messageList={messageList}
        messageText={messageText}
        fooText={setMessageText}
        messageAuthor={messageAuthor}
        fooAuthor={setMessageAuthor}
        setML={setMessageList}
        answer={answerBot}
      />
      <Footer />
    </>
  );
};

export default withTheme(App);