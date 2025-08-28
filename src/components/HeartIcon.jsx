import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from '../contexts/FavoritesContext';
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

const HeartIcon = ({ home, favoriteHomeIcon=true, boligStyle }) => {
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  // console.log(favorites);

  return (
    <div className={`relative z-33 ${boligStyle ? "" : "h-6"}`}>
      {favoriteHomeIcon && user && (
          <button 
            onClick={() => toggleFavorite(home.id)} 
            className={`${boligStyle ? "absolute top-2 right-2 p-2 bg-white rounded-full" : ""}`}
            >   
              {favorites.includes(home.id) ? (
                <IoIosHeart className="text-gray-500 fill-gray-600" />
                ) : (
                <IoIosHeartEmpty className="text-gray-500" />
              )}                   
          </button>
        )}
    </div>
  )
}
export default HeartIcon