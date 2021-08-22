import React, { useContext } from "react";
import { Redirect, Route, Link } from "react-router-dom";

import { IsAuthContext } from "./AuthContext";

function PrivateRoute({ children, ...restOfProps }) {
  const { isLoggedIn } = useContext(IsAuthContext);
  const { isAuth } = useContext(IsAuthContext);

  isLoggedIn();

  if (!isAuth) {
    return (
      <p>
        You need to be logged in. Please login{" "}
        <Link exact to="/">
          here
        </Link>
      </p>
    );
  }

  return isAuth ? (
    <Route {...restOfProps}>{children}</Route>
  ) : (
    <Redirect exact to="/" />
  );
}

export default PrivateRoute;
