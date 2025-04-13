import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";
import ProductOptions from "./ProductOptions";

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
