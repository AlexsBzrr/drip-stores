// images
const camisa = "/images/blusa.svg";
import ButtonSecondary from "./buttons/Buttonsecondary";
import fone from "/images/fone.svg";
const tenis = "/images/tenis.svg";

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

const CardColecoesDestaque = () => {
  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-24 pb-6">
      <h2 className="text-xl md:text-2xl leading-9 text-dark-gray-2 font-bold pt-10 pb-8 text-center md:text-left">
        Coleções em destaque
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative bg-light-blue shadow-md rounded-lg p-6 md:p-8 w-full md:w-[27rem] h-auto min-h-[18rem]"
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
                  onClick={() => handleClick(collection.id)}
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
