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

  // To update user's favorites on the server
    const updateFavorites = async (homesArray) => {
      if (!user || !token) return;
      const res = await fetch(`https://dinmaegler.onrender.com/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ homes: homesArray }),
      });
      if (!res.ok) throw new Error("Could not update favorites");
      const updatedUser = await res.json();
      setUser(updatedUser);
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
    };

    // Toggle favorite home
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
    await updateFavorites(newFavorites);
 };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;