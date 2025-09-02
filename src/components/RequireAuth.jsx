import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  // console.log(location);

  return token ? children :  <Navigate to="/login" state={{ from: location }} />;
}

export default RequireAuth;