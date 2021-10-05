import { useDispatch } from "react-redux";
import { deleteHehoes } from "../../../actions/apiPeopleActions";
import style from './PeopleItem.module.css';

const PeopleItem = ({ hero, index }) => {

  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(deleteHehoes(index));
    console.log('delete -->', hero.name)
  };

  return (
    <li className={`${style.border__btn} ${style.item}`}>
      <button className={style.btn} onClick={handlerClick}>&times;</button>
      <ul>{hero.name}
        <li className={style.item}>{hero.birth_year}</li>
        <li className={style.item}>{hero.gender}</li>
      </ul>
    </li>
  );
};

export default PeopleItem;