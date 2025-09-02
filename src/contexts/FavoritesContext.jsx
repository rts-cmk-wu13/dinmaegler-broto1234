import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever favorites change
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
//////////////////
// import { createContext, useContext, useState } from "react";
// import { useAuth } from "./AuthContext";

// const FavoritesContext = createContext();

// export function FavoritesProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);
//   const { user, updateFavorites, toggleFavorite } = useAuth();

//   return (
//     <FavoritesContext.Provider value={{ favorites, setFavorites, user, updateFavorites, toggleFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }
/////////////////////////
// import { createContext, useContext, useState, useEffect } from "react";

// const FavoritesContext = createContext();

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }

// export function FavoritesProvider({ children }) {
//   const [favorites, setFavorites] = useState(() => {
//     // Load from sessionStorage on first render
//     const stored = sessionStorage.getItem("favorites");
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     // Save to sessionStorage whenever favorites change
//     sessionStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
//     );
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

