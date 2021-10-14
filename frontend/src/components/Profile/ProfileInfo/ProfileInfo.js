import style from './ProfileInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showModalMessage } from '../../../actions/modalMessageActions';
import { deleteProfile } from '../../../actions/profileActions';

const ProfileInfo = (props) => {
   const profile  = useSelector((state) => state.profile);
   const dispatch = useDispatch();

   const clearProfile = () => {
      dispatch(deleteProfile());
      dispatch(showModalMessage(`ОЧИСТКА ПРОФИЛЯ ЗАВЕРШЕНА`))
   };

   return (
      <div className={style.wrap}>
         <div className={style.description}>
            <div>
               Name: {profile.name}
            </div>
            <div>
               Planet: {profile.planet}
            </div>
         </div>
         <button type="submit" className={style.btn} onClick={clearProfile}>Расщепить</button>
      </div>
   )
}
export default ProfileInfo;