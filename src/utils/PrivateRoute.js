import React, { useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

import { CreateAuthContext } from "./AuthContext";
import NavBar from "../components/NavBar";

function PrivateRoute({ children, ...restOfProps }) {
  const { isAuth, isLoggedIn } = useContext(CreateAuthContext);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  return isAuth ? (
    <>
      <NavBar/>
      <Route {...restOfProps}>{children}</Route>
    </>
  ) : (
    <p>
      You need to be logged in. Please login <Link to="/">here</Link>
    </p>
  );
}

export default PrivateRoute;
