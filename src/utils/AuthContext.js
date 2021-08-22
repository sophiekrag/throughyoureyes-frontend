import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi";

export const IsAuthContext = createContext({});

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const isLoggedIn = async () => {
    try {
      const result = await axiosApi.get("checkAuth");
      setIsAuth(result.status === 200);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IsAuthContext.Provider value={{ isAuth, isLoggedIn }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default AuthContext;
