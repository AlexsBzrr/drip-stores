// images
import camisa from "../assets/images/blusa.svg";
import ButtonSecondary from "../components/buttons/Buttonsecondary";
import fone from "../assets/images/fone.svg";
import tenis from "../assets/images/tenis.svg";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: 1,
    discount: "30% OFF",
    image: camisa,
    description: "Novo drop Supreme",
    altDescription: "imagem de uma Camisa",
  },
  {
    id: 2,
    discount: "20% OFF",
    image: tenis,
    description: "Coleção Adidas",
    altDescription: "Imagem de um Tênis",
  },
  {
    id: 3,
    discount: "60% OFF",
    image: fone,
    description: "Novo Beats Bass",
    altDescription: "Imagem de um fone",
  },
];

const handleScroolToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const CardColecoesDestaque = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center pb-6">
      <h2 className="text-xl md:text-2xl leading-9 text-dark-gray-2 font-bold pt-10 pb-8 text-center md:text-left">
        Coleções em destaque
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-14 w-full px-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative bg-light-blue shadow-md rounded-lg p-6 md:p-8 w-full md:w-96 h-auto min-h-[18rem]"
          >
            <div className="z-20 relative">
              <span className="font-bold bg-yellow text-sm py-1 px-4 rounded-full inline-block">
                {collection.discount}
              </span>
              <div className="flex flex-col items-start">
                <h3 className="text-xl md:text-3xl leading-9 text-dark-gray-2 font-bold mt-3">
                  {collection.description}
                </h3>
                <ButtonSecondary
                  onClick={() => {
                    navigate("/produtos");
                    handleScroolToTop();
                  }}
                  className="mt-6"
                >
                  Comprar
                </ButtonSecondary>
              </div>
            </div>
            <img
              src={collection.image}
              alt={collection.altDescription}
              className="absolute bottom-0 right-0 w-32 md:w-64 object-contain z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardColecoesDestaque;
