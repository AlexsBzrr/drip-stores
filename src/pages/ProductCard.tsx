import { IProductDetails } from "../interfaces/productsDetails.interface";

interface Props {
  item: IProductDetails;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl  cursor-pointer">
      {item.discount && (
        <span className="font-bold bg-lime-200 text-dark-gray-2 text-xs py-1 px-3 rounded-full inline-block mb-2">
          {item.discount}
        </span>
      )}
      <img
        src={item.image}
        alt={item.description}
        className={`w-full h-40 object-contain mb-3 ${
          !item.discount ? "mt-8" : ""
        }`}
      />
      <h3 className="text-xs text-gray-500 font-bold mb-1">{item.title}</h3>
      <p className="text-sm font-semibold text-black mb-1">
        {item.description}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 line-through text-base">
          {item.previousPrice}
        </span>
        <span className="text-black font-bold text-base">
          {item.currentPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
