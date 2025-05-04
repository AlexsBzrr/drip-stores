import { useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";

const tenis = "/images/laye1.svg";
const backgroud = "/images/Ellipse11.svg";

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
    <div>
      <div className="grid grid-cols-2 gap-28 pl-24 pr-24">
        <div className="relative flex flex-col items-center justify-center min-h-[30rem]">
          <img
            className="w-full h-full object-cover"
            src={oferta.imageBackGroud}
            alt="Sem Alt"
          />
          <img
            className="absolute z-10"
            src={oferta.image}
            alt="Imagem do Step"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-center w-[510px]">
          <span className="text-base leading-4 text-primary font-bold">
            {oferta.title}
          </span>
          <span className="text-6xl font-extrabold leading-[64px]">
            {oferta.headline}
          </span>
          <span className="text-lg font-normal leading-9">
            {oferta.description}
          </span>
          <ButtonPrimary className="w-56 h-12">Ver Ofertas</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductOffering;
