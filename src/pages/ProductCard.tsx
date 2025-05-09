import { collections } from "../pages/ProductListing";
const ProductCard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Produtos Relacionados</h2>
        <a href="#" className="text-sm text-pink-500 hover:underline">
          Ver todos →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collections.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow duration-300"
          >
            <span className="bg-green-100 text-green-700 font-bold text-xs py-1 px-2 rounded-full inline-block mb-2">
              30% OFF
            </span>
            <img
              src={item.image}
              alt="relacionado"
              className="w-full h-32 object-contain mb-2"
            />
            <h3 className="text-xs text-gray-400 font-bold">Tênis</h3>
            <p className="text-sm font-semibold text-black mb-1">
              {item.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                {item.precoAnterior}
              </span>
              <span className="text-black font-bold text-sm">
                {item.precoAtual}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
