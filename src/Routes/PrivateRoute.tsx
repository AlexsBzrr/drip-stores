// components/PrivateRoute.tsx
import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoged } = useAuth();
  return isLoged ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
