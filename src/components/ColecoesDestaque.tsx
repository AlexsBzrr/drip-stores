//images
import Camisa from "../assets/camisa-pink.svg";
const collections = [
  {
    id: 1,
    image: Camisa,
    title: "Camisetas",
  },

  {
    id: 2,
    image: Camisa,
    title: "Calças",
  },

  {
    id: 3,
    image: Camisa,
    title: "Bonés",
  },
  {
    id: 4,
    image: Camisa,
    title: "Headphones",
  },
  {
    id: 5,
    image: Camisa,
    title: "Tênis",
  },
];

const ColecoesDestaque = () => {
  return (
    <div className="flex flex-row  items-start justify-center h-auto  pb-16">
      <div>
        <h2 className="flex justify-center text-2xl leading-9 text-dark-gray-2 font-bold pt-[2.375rem] pb-8">
          Coleções em destaque
        </h2>
        <div className="flex gap-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="max-w-sm rounded-full p-8 bg-white  w-[6.5rem]  h-[6.5rem] relative"
            >
              <img src={collection.image} className=" w-16 " />
              <span className="flex justify-center mt-10">
                {collection.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColecoesDestaque;
