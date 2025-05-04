import Buttonsecondary from "./buttons/Buttonsecondary";
//images
const camisa = "/images/blusa.svg";
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
    <div className="flex flex-row  items-start justify-center h-auto  px-24 pb-6">
      <div>
        <h2 className="text-2xl leading-9 text-dark-gray-2 font-bold pt-[2.375rem] pb-8">
          Coleções em destaque
        </h2>

        <div className="flex gap-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="max-w-[27rem] shadow-md  rounded-lg p-8 bg-light-blue relative  w-[55.3125rem]  h-[15.6875rem]"
            >
              <div className="w-40">
                <span className="font-bold bg-yellow text-sm py-[5px] px-[0.9375rem] rounded-[1.8125rem] mt-10">
                  {collection.discount}
                </span>
                <div className="flex flex-col items-start ">
                  <h3 className="text-3xl leading-9 text-dark-gray-2 font-bold mt-3">
                    {collection.description}
                  </h3>
                  <Buttonsecondary
                    onClick={() => handleClick(collection.id)}
                    className="mt-9"
                  >
                    Comprar
                  </Buttonsecondary>
                </div>
              </div>
              <img
                src={collection.image}
                alt={collection.description}
                className="absolute bottom-0 right-0 w-64 object-contain z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardColecoesDestaque;
