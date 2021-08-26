import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const userStorageInfo = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (userStorageInfo === '123') {
      setIsLoggedIn(true);
    }
  }, [userStorageInfo]);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '123');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
