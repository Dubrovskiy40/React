import style from './Header.module.css';
import { useSelector } from 'react-redux';
import img from '../images/logo.png';

const descriptionsLogo = 'logo';

const Header = () => {
    const profile  = useSelector((state) => state.profile);

    return(
        <header className={style.header}>
            <img src={img} alt={descriptionsLogo} className={style.header__img} />
            <h2>Социальная сеть принадлежит: {profile.name}</h2>
        </header>
    ) 
};

export default Header;