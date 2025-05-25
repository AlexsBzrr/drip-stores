import { useNavigate } from "react-router-dom";
import { collections } from "../data/Colections";
import ProductCard from "../pages/ProductCard";

const HotProduct = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/produtos/${id}`);
  };
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Mais Vendidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.slice(0, 8).map((item) => (
          <div
            onClick={() => handleClick(item.id)}
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 w-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotProduct;
