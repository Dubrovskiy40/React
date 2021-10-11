import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../../actions/userActions";
import style from './AuthPage.module.css';

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { error, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/profile");
    }
  }, [user]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  };
  return (
    <>
      <form onSubmit={handlerSubmit} className={style.wrap}>
        <input
          className={style.inp}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className={style.inp}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" className={style.btn}>Login</button>
      </form>
      {errorFlg && (
        <div>ERROR : THE EMAIL OR PASSWORD IS INCORRECT</div>
      )}
    </>
  );
};

export default AuthPage;