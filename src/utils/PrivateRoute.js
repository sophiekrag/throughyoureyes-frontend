import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookie from "js-cookie";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = cookie.get("token");
  console.log(Boolean(isAuthenticated));

  return (
    <Route
      {...restOfProps}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/" />
        );
      }}
    />
  );
}

export default ProtectedRoute;
