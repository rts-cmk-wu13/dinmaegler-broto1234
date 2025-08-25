import { useNavigate, Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { LuUserRound } from "react-icons/lu";

const Logout = () => {
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return token ? (
    <button onClick={handleLogout}><LuUserRound />Logout</button>
  ) : <Link to="/login"><LuUserRound />Login</Link>;
};

export default Logout;