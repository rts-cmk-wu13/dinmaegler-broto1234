import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [user, setUser] = useState(localStorage.getItem('user'));

  const login = (user) => {
    setUser(user);
    localStorage.setItem('user', user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(sessionStorage.getItem('token'));
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Restore user from sessionStorage on mount
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (newToken) => {
//     setToken(newToken);
//     sessionStorage.setItem('token', newToken);

//     // Fetch user info after login
//     const res = await fetch("https://dinmaegler.onrender.com/users/me", {
//       headers: { Authorization: `Bearer ${newToken}` },
//     });
//     const userData = await res.json();
//     setUser(userData);
//     sessionStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     sessionStorage.removeItem('token');
//     sessionStorage.removeItem('user');
//   };

//   const updateFavorites = async (homesArray) => {
//     if (!user || !token) return;

//     console.log("Updating favorites for user:", user.id, "with homes:", homesArray);

//     const res = await fetch(`https://dinmaegler.onrender.com/users/${user.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ homes: homesArray }),
//     });

//     if (!res.ok) {
//       throw new Error("Kunne ikke opdatere favoritter");
//     }

//     // Optionally update user in context and sessionStorage
//     const updatedUser = await res.json();
//     console.log(updatedUser);

//     setUser(updatedUser);
//     sessionStorage.setItem("user", JSON.stringify(updatedUser));
//   };
  
//   const toggleFavorite = async (homeId) => {
//     if (!user) return;
//     // Always map homes to IDs (handles both string and object cases)
//     let currentFavorites = Array.isArray(user.homes)
//       ? user.homes.map(h => typeof h === "string" ? h : h.id)
//       : [];
//     let newFavorites;
//     if (currentFavorites.includes(homeId)) {
//       newFavorites = currentFavorites.filter(id => id !== homeId);
//     } else {
//       newFavorites = [...currentFavorites, homeId];
//     }
//     console.log("toggleFavorite: homeId:", homeId, "currentFavorites:", currentFavorites, "newFavorites:", newFavorites);
//     if (!Array.isArray(newFavorites) || newFavorites.some(id => typeof id !== "string" || !id)) {
//       console.error("Invalid favorites array:", newFavorites);
//       return;
//     }
//     await updateFavorites(newFavorites);
//   };
  
//   return (
//     <AuthContext.Provider value={{ token, user, login, logout, updateFavorites, toggleFavorite }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;