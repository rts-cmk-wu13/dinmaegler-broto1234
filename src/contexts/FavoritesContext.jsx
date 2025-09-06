import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
  const { user, toggleFavorite } = useAuth();

  // Get favorites from the current user
  const favorites = Array.isArray(user?.homes) ? 
    user.homes.map(h => typeof h === "string" ? h : h.id) 
    : 
    [];

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
