// // components/PrivateRoute.tsx
// import { JSX } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const PrivateRoute = ({
//   children,
// }: {
//   children: JSX.Element | JSX.Element[] | null;
// }) => {
//   const { isLoged } = useAuth();

//   if (!isLoged) {
//     toast.error("Você precisa estar logado para acessar essa página.");
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;
import { JSX, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | null;
}) => {
  const { isLoged } = useAuth();
  const hasShownToast = useRef(false);

  if (!isLoged) {
    if (!hasShownToast.current) {
      toast.error(
        "Acesso negado! Por favor, faça login para acessar essa página."
      );
      hasShownToast.current = true;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
