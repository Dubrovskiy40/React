import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useState } from 'react';
import { addProfile } from '../../actions/profileActions';
import { showModalMessage } from "../../actions/modalMessageActions";
import ModalMessage from '../../components/Dialogs/MessageList/ModalMessage/ModalMessage';
import { useDispatch, useSelector } from 'react-redux';

const Profile = (props) => {
    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    const submithandler = (e) => {
        e.preventDefault();
        const userProfile = {
            name: name,
            planet: planet,
        }
        dispatch(addProfile(userProfile));
        dispatch(showModalMessage(`У нас пополнение! Джедай: "${name}", с планеты: "${planet}"`));
        setName('');
        setPlanet('');
    }

    return(
        <div className={style.profile__wrap}>
            <form onSubmit={submithandler} className={style.profile__form}>
            <label className={style.form__item}>Имя
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className={style.profile__inp} />
            </label>
            <label className={style.form__item}>Планета
                <input type='text' value={planet} onChange={(e) => setPlanet(e.target.value)} className={style.profile__inp} />
            </label>
            <div>
                <button type='submit' className={style.profile__btn}>Добавить нового джедая</button>
            </div>
            </form>
            {profile.name ? <ProfileInfo /> : null}
            <div className={style.modal}>
                <ModalMessage />
            </div>
        </div>
    ) 
};
export default Profile;