// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import ProductListing from "../pages/ProductListing";
import Section from "../pages/Section";
import ProductDetails from "../pages/ProductDetails";
import HomePage from "../pages/HomePage";
import PagesLayout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import Login from "../modules/auth/pages/Login";

function PathsContainer() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PagesLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/produtos" element={<ProductCard />} />
        <Route path="/categorias" element={<ProductListing />} />
        <Route path="/meusPedidos" element={<Section />} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PathsContainer;
