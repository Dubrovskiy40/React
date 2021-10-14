import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);
  return user ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
};

export default PrivateRoute 