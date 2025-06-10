import { collections } from "../data/Colections";
import ProductCard from "./ProductCard";

const HotProduct = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Mais Vendidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 w-full hover:shadow-primary cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotProduct;
