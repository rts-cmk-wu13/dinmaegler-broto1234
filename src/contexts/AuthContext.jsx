import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => sessionStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (jwt, userObj) => {
    setToken(jwt);
    setUser(userObj);
    sessionStorage.setItem('token', jwt);
    sessionStorage.setItem('user', JSON.stringify(userObj));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };

  const toggleFavorite = async (homeId) => {
    if (!user) return;
    let currentFavorites = Array.isArray(user.homes)
      ? user.homes.map(h => typeof h === "string" ? h : h.id)
      : [];
    let newFavorites;
    if (currentFavorites.includes(homeId)) {
      newFavorites = currentFavorites.filter(id => id !== homeId);
    } else {
      newFavorites = [...currentFavorites, homeId];
    }
    // Update user favorites in backend if needed, then update local state:
    setUser({ ...user, homes: newFavorites });
    sessionStorage.setItem('user', JSON.stringify({ ...user, homes: newFavorites }));
 };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;