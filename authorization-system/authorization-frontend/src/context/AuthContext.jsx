import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('register-token');

  const loadUser = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({
        id: res.data.id,
        username: res.data.id,
        email: res.data.email,
      });
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  const saveUser = (info) => {
    localStorage.setItem('register-token', info.jwt);
    setUser({
      id: info.user.id,
      username: info.user.username,
      email: info.user.email,
    });
  };

  const removeUser = () => {
    localStorage.removeItem('register-token');
    setUser(null);
  };

  useEffect(() => {
    loadUser();
  }, [token]);

  const value = { user, removeUser, saveUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
