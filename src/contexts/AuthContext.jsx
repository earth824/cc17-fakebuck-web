import { useState } from 'react';
import { createContext } from 'react';
import authApi from '../apis/auth';
import { setAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const login = async credentials => {
    const res = await authApi.login(credentials);
    setAccessToken(res.data.accessToken);
  };

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
