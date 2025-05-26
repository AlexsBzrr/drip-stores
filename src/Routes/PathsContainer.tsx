import { Routes, Route } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
import HomePage from "../pages/HomePage";
import PagesLayout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import Login from "../modules/auth/pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Registration from "../modules/auth/pages/Registration";
import CreateAccount from "../modules/auth/pages/CreateAccount";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../pages/MyOrders";

function PathsContainer() {
  return (
    <Routes>
      {/* Rota de Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/loginCliente" element={<Login />} />

      {/* Rotas Usuários*/}
      <Route path="/cadastro" element={<Registration />} />
      <Route path="/criarConta" element={<CreateAccount />} />

      {/* Rotas sem proteção */}
      <Route element={<PagesLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListing />} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
        <Route path="/categorias" element={<NotFound />} />
        {/* Rotas com proteção */}
        <Route
          path="/meusPedidos"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Rota para "not found" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PathsContainer;
