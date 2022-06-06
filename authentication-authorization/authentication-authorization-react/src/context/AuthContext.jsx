import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('demo-authorization');

  const loadUser = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setUser({
        id: res.data.id,
        email: res.data.email,
        username: res.data.username,
      });
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  useEffect(() => {
    loadUser();
  }, [token]);

  const saveAuthInfo = (info) => {
    // save jwt to local storage
    localStorage.setItem('demo-authorization', info.jwt);
    // save user into state
    setUser({
      id: info.user.id,
      email: info.user.email,
      username: info.user.username,
    });
  };

  const removeAuthInfo = () => {
    localStorage.removeItem('demo-authorization');
    setUser(null);
  };

  const value = {
    user,
    saveAuthInfo,
    removeAuthInfo,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
