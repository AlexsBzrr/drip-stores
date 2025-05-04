import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const shoes = "/images/shoesWhite-1.svg";
const shoes2 = "/images/Laye1.svg";
const ornaments = "/images/Ornament 11.svg";

const steps = [
  {
    title: "Melhores ofertas personalizadas",
    headline: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: shoes,
  },
  {
    title: "Novidades imperdíveis",
    headline: "Lançamentos Nike 2025 🚀",
    description:
      "Descubra os novos modelos com tecnologia avançada e design moderno.",
    image: shoes2,
  },
  {
    title: "Coleção clássica",
    headline: "Nike Air Retorno 👟",
    description:
      "Os modelos mais icônicos de volta para o seu estilo retrô favorito.",
    image: shoes,
  },
  {
    title: "Esporte e performance",
    headline: "Alta performance Nike 🏃",
    description:
      "Desempenho máximo para treinos intensos com conforto e estilo.",
    image: shoes2,
  },
  {
    title: "Esporte e performance",
    headline: "Alta performance Nike 🏃",
    description:
      "Desempenho máximo para treinos intensos com conforto e estilo.",
    image: shoes,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div>
      <div className="grid grid-cols-2 pl-24 pr-24">
        <div className="flex flex-col gap-4 items-start justify-center w-[510px]">
          <span className="text-base leading-4 text-warning font-bold">
            {step.title}
          </span>
          <span className="text-6xl font-extrabold leading-[64px]">
            {step.headline}
          </span>
          <span className="text-lg font-normal leading-9">
            {step.description}
          </span>
          <ButtonPrimary className="w-56 h-12">Ver Ofertas</ButtonPrimary>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-[30rem]">
          <img
            className="absolute top-6 right-10 w-20"
            src={ornaments}
            alt="Ornamentos"
          />
          <img src={step.image} alt="Imagem do Step" />
        </div>
      </div>
      <div className="flex justify-center gap-2 pt-10 pb-8">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`border w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStep ? "bg-primary" : "bg-light-gray-2"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
