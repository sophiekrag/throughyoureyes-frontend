import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi";

export const CreateAuthContext = createContext({});

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const isLoggedIn = async () => {
    try {
      const result = await axiosApi("checkAuth");
      setIsAuth(result.status === 200);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateAuthContext.Provider value={{ isAuth, isLoggedIn }}>
      {children}
    </CreateAuthContext.Provider>
  );
};

export default AuthContext;
