import { Routes, Route } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import ProductListing from "../pages/ProductListing";
import Section from "../pages/Section";
import ProductDetails from "../pages/ProductDetails";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductCard />} />
      <Route path="/categorias" element={<ProductListing />} />
      <Route path="/meusPedidos" element={<Section />} />
      <Route path="/produto/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRoutes;
