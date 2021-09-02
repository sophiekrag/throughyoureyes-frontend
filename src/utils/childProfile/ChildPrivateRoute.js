import React, { useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

import { CreateChildAuthContext } from "./ChildAuthContext";
import ChildNavBar from "../../components/ChildNavBar";

function ChildPrivateRoute({ children, ...restOfProps }) {
  const { isAuth, isLoggedIn } = useContext(CreateChildAuthContext);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  return isAuth ? (
    <>
      <ChildNavBar/>
      <Route {...restOfProps}>{children}</Route>
    </>
  ) : (
    <p>
      You need to be logged in. Please login <Link to="/child/login">here</Link>
    </p>
  );
}

export default ChildPrivateRoute;