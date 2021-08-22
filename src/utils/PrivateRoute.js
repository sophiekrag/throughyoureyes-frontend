import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...restOfProps }) {
  const isAuthenticated = true
  console.log(Boolean(isAuthenticated));

  return isAuthenticated ? 
    (<Route {...restOfProps}>{children}</Route>)
       :
    (<Redirect exact to="/" /> )
}

export default PrivateRoute;
