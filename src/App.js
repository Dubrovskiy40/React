import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const name = 'Анатолий';
const obj = {
    city: 'Калуга',
    age: 36,
    speciality: 'frontend developer'
};

const App = () => {
    const show = true;

    return(
        <div>
            <Header title='Message for header' paragraph={show ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia?' : 'Error'} />
            <Main title=  'Message for main' person={name} />
            <Footer title='Message for footer' info={obj}/>
        </div>
    )
};

export default App; 