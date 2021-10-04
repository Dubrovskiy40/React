import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from '../../actions/apiPeopleActions';
import PeopleItem from './PeopleItem/PeopleItem';
import style from './ShowAPI.module.css';

const ShowAPI = (props) => {
  const heroes = useSelector(state => state.heroes);
  const dispatch = useDispatch();

  const [loadFlg, setLoadFlg] = useState(false);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    if (!newArr.length && !loadFlg) {
      dispatch(getHeroes());
    }
  }, [newArr]);

  return (
    <ul className={style.wrap}>
      {heroes?.length ? heroes.map((hero) => <PeopleItem key={hero.id} hero={hero}/>) : null}
    </ul>
  );
};

export default ShowAPI;