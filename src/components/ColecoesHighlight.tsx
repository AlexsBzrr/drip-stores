import { useState } from "react";

// imports de imagens
import camisaPink from "/icons/camisaPink.svg";
import calcaPink from "/icons/pantsPink.svg";
import bonePink from "/icons/capPink.png";
import headphonePink from "/icons/headphonePink.svg";
import tenisPink from "/icons/sneakersPink.svg";
import camisaGray from "/icons/camisaGray.svg";
import calcaGray from "/icons/pantsGray.svg";
import boneGray from "/icons/capGray.png";
import headphoneGray from "/icons/headphoneGray.svg";
import tenisGray from "/icons/sneakersGray.svg";

const collections = [
  { id: 1, image: camisaPink, image2: camisaGray, title: "Camisetas" },
  { id: 2, image: calcaPink, image2: calcaGray, title: "Calças" },
  { id: 3, image: bonePink, image2: boneGray, title: "Bonés" },
  { id: 4, image: headphonePink, image2: headphoneGray, title: "Headphones" },
  { id: 5, image: tenisPink, image2: tenisGray, title: "Tênis" },
];

const ColecoesDestaque = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-start justify-center h-auto pb-16">
      <div>
        <h2 className="flex justify-center text-2xl leading-9 text-dark-gray-2 font-bold pt-[2.375rem] pb-8">
          Coleções em destaque
        </h2>
        <div className="flex gap-4 cursor-pointer">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="max-w-sm rounded-full shadow-md p-8 bg-white w-[6.5rem] h-[6.5rem] relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={
                  hoveredIndex === index ? collection.image : collection.image2
                }
                className="w-16"
                alt={collection.title}
              />
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
