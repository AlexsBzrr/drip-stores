// components/PrivateRoute.tsx
import { JSX } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | null;
}) => {
  const { isLoged } = useAuth();

  return isLoged ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;
