import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions";

const ProductListingPage = () => {
  return (
    <div>
      <h1>ProductListingPage</h1>
      <ProductCard />

      <ProductDetails />

      <ProductListing />

      <ProductOptions />
    </div>
  );
};

export default ProductListingPage;
