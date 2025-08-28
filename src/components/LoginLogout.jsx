import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { LuUserRound } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const LoginLogout = () => {
  const { logout, user } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return user ? (
    <div className="flex items-center gap-2">
      <Link to="/favoritter" className="relative">
        <CiHeart className="w-6 h-6" />
        {favorites.length > 0 && (
              <span className="absolute top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-3 h-3 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
      </Link>
      <button onClick={handleLogout} className="flex items-center gap-1 text-green-700"><FaUser />{user}</button>
    </div>
  ) : <Link to="/login" className="flex items-center gap-1"><LuUserRound />Login</Link>;
};

export default LoginLogout;