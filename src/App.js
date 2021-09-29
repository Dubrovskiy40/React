<<<<<<< HEAD
=======
// import { useState, useEffect } from 'react';
>>>>>>> lesson_05
import './App.css'
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import Header from './components/Header/Header';
=======
import HeaderNav from './components/HeaderNav/HeaderNav';
import MainContent from './components/MainContent/MainContent';
import { withTheme } from '@material-ui/core/styles';

// import Chats from './components/Chats/Chats';
>>>>>>> lesson_05
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Main from "./components/Main/Main";

<<<<<<< HEAD
function App(props) {
=======
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
>>>>>>> lesson_05
  return (
      <Router>
<<<<<<< HEAD
        <div className="app__wrap">
          <Header />
          <Navbar />
          <div className='app__content'>
            <Route exact path='/' render={ () => <Main />} />
            <Route path='/profile' render={ () => <Profile />} />
            <Route path='/dialogs' render={ () => <Dialogs />} />
          </div>
=======
        <HeaderNav />
        <MainContent />
        <div className='wrap'>
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/chats" component={Chats} /> */}
            <Route exact path="/"><Link to="/chats">Список чатов</Link></Route>
            <Route exact path="/"><Link to="/profile">Мой Профиль</Link></Route>
            <Route exact path="/chats/:id" component={Form} />
>>>>>>> lesson_05
        </div>
        <Footer />
      </Router>
  );
};

export default (App);