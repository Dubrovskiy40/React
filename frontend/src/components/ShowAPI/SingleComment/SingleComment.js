import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from "../../../actions/apiCommentsActions";
import style from './SingleComment.module.css';

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  return (
      <form onSubmit={handleUpdate} className={style.border__btn}>
        <button onClick={handleDelete} className={style.btn}>&times;</button>
        <input type='text' value={commentText} onChange={handleInput} className={style.inp}/>
      </form>
  )
}

export default SingleComment;
