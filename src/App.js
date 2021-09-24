// import { useState, useEffect } from 'react';
import './App.css'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import HeaderNav from './components/HeaderNav/HeaderNav';
import MainContent from './components/MainContent/MainContent';
import { withTheme } from '@material-ui/core/styles';

// import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <MainContent />
        <div className='wrap'>
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/chats" component={Chats} /> */}
            <Route exact path="/"><Link to="/chats">Список чатов</Link></Route>
            <Route exact path="/"><Link to="/profile">Мой Профиль</Link></Route>
            <Route exact path="/chats/:id" component={Form} />
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default withTheme(App);