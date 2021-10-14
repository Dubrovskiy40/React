import style from './Main.module.css';
import img from '../images/stormtrooper.png';
import AuthPage from './AuthPage/AuthPage';

const Main = (props) => {

    return (
       <div className={style.main__wrap}>
          <h2>Самая главная страница во вселенной</h2>
          <img src={img} className={style.main__img} alt="title__img" />
          <AuthPage />
       </div>
    )
 }
 export default Main;