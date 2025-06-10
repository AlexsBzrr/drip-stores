import { IProductDetails } from "../interfaces/productsDetails.interface";
import { useNavigate } from "react-router-dom";

interface Props {
  item: IProductDetails;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  const handleScroolToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (id: number) => {
    handleScroolToTop();
    navigate(`/produtos/${id}`);
  };
  return (
    <div
      className="bg-white rounded-xl  cursor-pointer"
      onClick={() => handleClick(item.id)}
    >
      {item.discount && (
        <span className="font-bold bg-lime-200 text-dark-gray-2 text-xs py-1 px-3 rounded-full inline-block mb-2">
          {item.discount}
        </span>
      )}
      <img
        src={item.image}
        alt={item.description}
        className={`w-full h-32 object-contain mb-3 ${
          !item.discount ? "mt-8" : ""
        }`}
      />
      <h3 className="text-xs text-dark-gray-2 font-bold mb-1">{item.title}</h3>
      <p className="text-sm font-semibold text-dark-gray mb-1 truncate">
        {item.description}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-dark-gray-2 line-through text-base">
          R$ {item.previousPrice.toFixed(2).replace(".", ",")}
        </span>
        <span className="text-dark-gray font-bold text-base">
          R$ {item.currentPrice.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
