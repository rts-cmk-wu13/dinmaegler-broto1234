import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;