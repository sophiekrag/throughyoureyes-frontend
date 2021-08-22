import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { IsAuthContext } from "./AuthContext";

function PrivateRoute({ children, ...restOfProps }) {
  const {isAuth} = useContext(IsAuthContext)
  //console.log(isAuth)
  return isAuth ? 
    (<Route {...restOfProps}>{children}</Route>)
       :
    (<Redirect exact to="/" /> )
}

export default PrivateRoute;
