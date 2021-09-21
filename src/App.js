import { useState, useEffect } from 'react';
import './App.css'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import HeaderNav from './components/HeaderNav/HeaderNav';
import MainContent from './components/MainContent/MainContent';
import { withTheme } from '@material-ui/core/styles';

import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


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
      <Router>
        <HeaderNav />
        <MainContent />
        <div className='wrap'>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/"><Link to="/chats">Список чатов</Link></Route>
            <Route exact path="/"><Link to="/profile">Мой Профиль</Link></Route>
            <Route exact path="/chats/*" component={Form}>
              <Form messageList={messageList}
                messageText={messageText}
                fooText={setMessageText} 
                messageAuthor={messageAuthor} 
                fooAuthor={setMessageAuthor}
                setML={setMessageList}
                answer={answerBot}
              />
            </Route>
          </div>
        <Footer />
      </Router>
    </>
  );
};

export default withTheme(App);