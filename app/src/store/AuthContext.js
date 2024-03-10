import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => undefined,
  logout: () => undefined,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);

  const loginHandler = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    sessionStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setToken(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refresh_token')
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    token: token,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};
