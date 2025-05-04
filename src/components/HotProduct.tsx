//images
const tenis = "/images/tenis2.svg";

const collections = [
  {
    id: 1,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },

  {
    id: 2,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },

  {
    id: 3,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
  {
    id: 4,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
  {
    id: 5,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
  {
    id: 6,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
  {
    id: 7,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
  {
    id: 8,
    discount: "30% OFF",
    image: tenis,
    description: "K-Swiss V8 - Masculino",
    precoAtual: "R$ 100.00",
    precoAnterior: "R$ 200.00",
    title: "Tênis",
  },
];

const HotProduct = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Mais Vendidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 w-full hover:shadow-lg transition-shadow duration-300"
          >
            <span className="font-bold bg-lime-200 text-dark-gray-2 text-xs py-1 px-3 rounded-full inline-block mb-2">
              {item.discount}
            </span>
            <img
              src={item.image}
              alt={item.description}
              className="w-full h-40 object-contain mb-3"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-xs text-gray-400 font-bold ">{item.title}</h3>
              <h3 className="text-sm text-black font-semibold mb-2">
                {item.description}
              </h3>
              <div className="flex gap-3 items-center">
                <h3 className="line-through text-gray-400 font-normal text-xl">
                  {item.precoAnterior}
                </h3>
                <h3 className="font-bold text-xl text-black">
                  {item.precoAtual}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotProduct;
