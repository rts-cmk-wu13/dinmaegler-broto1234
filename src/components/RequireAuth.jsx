import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";

const RequireAuth = ({ children }) => {
  const { taken } = useAuth();
  const location = useLocation();

  if (!taken) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children;
}

export default RequireAuth;