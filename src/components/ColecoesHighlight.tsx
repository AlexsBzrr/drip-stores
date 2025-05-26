import { useState } from "react";

// imports de imagens
import camisaPink from "../assets/icons/camisaPink.svg";
import calcaPink from "../assets/icons/pantsPink.svg";
import bonePink from "../assets//icons/capPink.png";
import headphonePink from "../assets//icons/headphonePink.svg";
import tenisPink from "../assets//icons/sneakersPink.svg";
import camisaGray from "../assets//icons/camisaGray.svg";
import calcaGray from "../assets//icons/pantsGray.svg";
import boneGray from "../assets//icons/capGray.png";
import headphoneGray from "../assets//icons/headphoneGray.svg";
import tenisGray from "../assets//icons/sneakersGray.svg";

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
    <div className="flex flex-col items-center justify-center px-4 pb-16">
      <h2 className="text-xl md:text-2xl leading-9 text-dark-gray-2 font-bold pt-10 pb-8 text-center">
        Coleções em destaque
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-full shadow-md p-4 bg-white w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={
                hoveredIndex === index ? collection.image : collection.image2
              }
              className="w-10 md:w-14"
              alt={collection.title}
            />
            <span className="text-sm text-center mt-4">{collection.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColecoesDestaque;
