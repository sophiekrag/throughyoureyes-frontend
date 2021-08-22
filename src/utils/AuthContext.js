import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi";

export const IsAuthContext = createContext({});

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <IsAuthContext.Provider value={isAuth}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default AuthContext;