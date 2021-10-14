import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Main from "./components/Main/Main";
import Comments from "./components/ShowAPI/Comments";
import BackendDate from './components/BackendDate/BackendDate';
import PrivateRoute from './components/SecureRoute/SecureRoute';

function App(props) {
  const history = useHistory();

  return (
      <Router history={history}>
        <div className="app__wrap">
          <Header />
          <Navbar />
          <div className='app__content'>
            <Route exact path='/' render={ () => <Main />} />
            <PrivateRoute path='/profile' render={ () => <Profile />} />
            <PrivateRoute path='/dialogs' render={ () => <Dialogs />} />
            <PrivateRoute path='/api' render={ () => <Comments />} />
            <Route path='/backendDate' render={ () => <BackendDate />} />
          </div>
        </div>
        <Footer />
      </Router>
  );
};

export default (App);