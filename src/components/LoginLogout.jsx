import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { LuUserRound } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const LoginLogout = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { logout, user, token } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  console.log(user);
  console.log(token);
  console.log(favorites);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return token && user ? (
    <div className="flex items-center gap-2 relative">
      <Link to="/favoritter" className="relative">
        <CiHeart className="w-6 h-6" />
        {favorites.length > 0 && (
              <span className="absolute top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-3 h-3 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
      </Link>
        <button
        onClick={() => setShowInfo((prev) => !prev)}
          className="flex items-center gap-1 text-green-700">
            <FaUser />{user.username}
        </button>

      {showInfo && (        
        <div className="absolute right-0 top-8 bg-white border rounded shadow-md p-4 z-50 min-w-[250px]">
          <div className="mb-2">
            <div className="text-xs text-black/70">Username: <span className="font-semibold">{user.username}</span></div>
            <div className="text-xs text-black/70">Email: <span className="font-semibold">{user.email}</span></div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        </div>
         )}
    </div>
  ) : (
    <Link to="/login" className="flex items-center gap-1">
      <LuUserRound />
      Login
    </Link>
  );
};

export default LoginLogout;