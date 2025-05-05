import { Routes, Route } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import ProductListing from "../pages/ProductListing";
import HomePage from "../pages/HomePage";
import PagesLayout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import Login from "../modules/auth/pages/Login";
import ProductDetails from "../pages/ProductDetails";

function PathsContainer() {
  return (
    <Routes>
      {/* Rota de Login */}
      <Route path="/login" element={<Login />} />

      {/* Rotas sem proteção */}
      <Route element={<PagesLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListing />} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
        <Route path="/categorias" element={<ProductCard />} />
        <Route path="/meusPedidos" element={<ProductCard />} />
      </Route>

      {/* Rota para "not found" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PathsContainer;
