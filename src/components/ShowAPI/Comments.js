import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsLoad, errorOff } from '../../actions/apiCommentsActions';
import SingleComment from './SingleComment/SingleComment';
import style from './Comments.module.css';
import Spin from './Spin/Spin';


const Comments = (props) => {
  const error = useSelector(state => state.loadReducer.error);
  console.log('error-->', error);
  const comments = useSelector(state => {
    const { apiCommentsReducer } = state;
    return apiCommentsReducer.comments;
  });
    const dispatch = useDispatch();

  const handle = () => {
    dispatch(commentsLoad());
    dispatch(errorOff());
  }

    useEffect(() => {
      dispatch(commentsLoad());
    }, []);
  
    return (
      <div className={style.comments__wrap}>
        {error && (
            <div className={style.error__message}>
              {error}
              <button onClick={handle} className={style.btn}>Перезапустить</button>
            </div>
          )}
        <Spin />
        {!!comments.length && comments.map(res => {
          return <SingleComment key={res.id} data={res}/>
        })}
      </div>
    )
  }

export default Comments;