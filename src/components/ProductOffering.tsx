import { useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";

import tenis from "../assets/images/laye1.svg";
import backgroud from "../assets/images/Ellipse11.svg";

const Ofertas = [
  {
    title: "Oferta especial",
    headline: "Air Jordan edição de colecionador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    image: tenis,
    imageBackGroud: backgroud,
  },
];

const ProductOffering = () => {
  const [currentStep] = useState(0);
  const oferta = Ofertas[currentStep];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="relative flex justify-center items-center w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src={oferta.imageBackGroud}
            alt="Fundo"
          />
          <img
            className="absolute z-10 w-64 md:w-80 lg:w-[20rem]"
            src={oferta.image}
            alt="Tênis"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-4 text-left max-w-xl">
          <span className="text-primary text-sm md:text-base font-bold">
            {oferta.title}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-dark-gray">
            {oferta.headline}
          </h2>
          <p className="text-sm md:text-base leading-6 text-dark-gray-2">
            {oferta.description}
          </p>
          <ButtonPrimary className="w-full sm:w-56 h-12 mt-4">
            Ver Oferta
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductOffering;
