import { Redirect, Route } from "react-router-dom";

const ProtectRoutes = ({ children, ...rest }) => {
  const isAuth = document.cookie;

  return (
    <Route {...rest}>{!isAuth ? <Redirect to="/signin" /> : children}</Route>
  );
};

export default ProtectRoutes;
