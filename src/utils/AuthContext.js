import React, { useState, createContext } from "react";

export const IsAuthContext = createContext({});

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <IsAuthContext.Provider value={isAuth}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default AuthContext;