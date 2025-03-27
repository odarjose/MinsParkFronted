// src/components/PrivateRoute.tsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/authContext";

const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
