import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={style.nav}>
         <div className={style.item}>
            <NavLink exact to="/" activeClassName={style.activeLink}>Главная</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/profile" activeClassName={style.activeLink}>Профиль</NavLink>
         </div>
         <div className={`${style.item} ${style.active}`}>
            <NavLink to="/dialogs" activeClassName={style.activeLink}>Сообщения</NavLink>
         </div>
         <div className={`${style.item} ${style.active}`}>
            <NavLink to="/api" activeClassName={style.activeLink}>API</NavLink>
         </div>
      </nav>
   )
};
export default Navbar;