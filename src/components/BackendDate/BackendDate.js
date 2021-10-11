import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTest,
  deleteTask,
  fetchTest,
  setTest,
} from "../../actions/backendActions";

const BackendDate = () => {
  const [value, setValue] = useState("");

  const data = useSelector((state) => state.backendReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
    if (!data) {
      dispatch(fetchTest());
    }
  }, [data]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addTest(value));
    setValue("");
  };

  return (
    <>
      {data && (
        <ul>
          {data.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
      <button onClick={() => dispatch(deleteTask())}>delete</button>
    </>
  );
};

//CRUD

// Create - merhod POST
// Read - method GET
// Update - method patch/put
// Delete - method delete

export default BackendDate;