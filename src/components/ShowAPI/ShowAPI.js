import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from '../../actions/apiPeopleActions';
import PeopleItem from './PeopleItem/PeopleItem';
import style from './ShowAPI.module.css';

import Spin from './../Spin/Spin';

const ShowAPI = (props) => {
  const heroes = useSelector(state => state.people);
  const error = useSelector(state => state.loaderReducer.error);
  const dispatch = useDispatch();
  console.log('heroes -->', heroes)
  const [newArr, setNewArr] = useState([]);
  const [loadFlg, setLoadFlg] = useState(false);

  useEffect(() => {
    if (!newArr.length && !loadFlg) {
      dispatch(getHeroes())
    }
  }, [newArr]);

  return (
    <ul className={style.wrap}>
      <Spin />
      {error && (
            <div className={style.error__message}>
              {error}
            </div>
      )}
      {heroes?.length ? heroes.map((hero, index) => <PeopleItem key={index} index={index} hero={hero}/>) : null}
    </ul>
  );
};

export default ShowAPI;