import React, { useState, createContext } from "react";
import axiosApi from ".././AxiosApi";

export const CreateChildAuthContext = createContext({});

const ChildAuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const isLoggedIn = async () => {
    try {
      const result = await axiosApi.get("checkAuth/child");
      setIsAuth(result.status === 200);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateChildAuthContext.Provider value={{ isAuth, isLoggedIn }}>
      {children}
    </CreateChildAuthContext.Provider>
  );
};

export default ChildAuthContext;