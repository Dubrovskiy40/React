import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Main from "./components/Main/Main";
import ShowAPI from "./components/ShowAPI/ShowAPI";

function App(props) {
  return (
      <Router>
        <div className="app__wrap">
          <Header />
          <Navbar />
          <div className='app__content'>
            <Route exact path='/' render={ () => <Main />} />
            <Route path='/profile' render={ () => <Profile />} />
            <Route path='/dialogs' render={ () => <Dialogs />} />
            <Route path='/api' render={ () => <ShowAPI />} />
          </div>
        </div>
        <Footer />
      </Router>
  );
};

export default (App);