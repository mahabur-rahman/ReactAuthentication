import React, { useState } from "react";

const useAuth = (initValue) => {
  const [isAuth, setIsAuth] = useState(initValue);

  const login = () => {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  };

  const logout = () => {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  };

  return [isAuth, login, logout];
};

export default useAuth;
