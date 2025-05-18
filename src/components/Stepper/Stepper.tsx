import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
const shoes = "/images/shoesWhite-1.svg";
const shoes2 = "/images/laye1.svg";
const shoes3 = "/images/newtenis3.png";
const shoes4 = "/images/nikejordan.png";
const ornaments = "/images/Ornament 11.svg";
const next = "/images/next.svg";
const prev = "/images/previous.svg";

interface IStep {
  title: string;
  headline: string;
  description: string;
  image: string;
}

const steps: IStep[] = [
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
    image: shoes3,
  },
  {
    title: "Esporte e performance",
    headline: "Alta performance Nike 🏃",
    description:
      "Desempenho máximo para treinos intensos com conforto e estilo.",
    image: shoes4,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow rounded-lg overflow-hidden">
      <div className="relative">
        {/* Content container */}
        <div className="flex flex-col md:flex-row md:items-center px-4 md:px-8 lg:px-16 relative">
          {/* Text content */}
          <div className="flex flex-col gap-2 md:gap-4 items-start justify-center w-full md:w-1/2 py-6 md:py-12 order-2 md:order-1">
            <span className="text-sm md:text-base text-pink-600 font-bold">
              {step.title}
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {step.headline}
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal mb-4 md:mb-6">
              {step.description}
            </p>
            <ButtonPrimary className="w-full md:w-56 py-3 md:py-4">
              Ver Ofertas
            </ButtonPrimary>
          </div>

          {/* Image container */}
          <div className="relative flex items-center justify-center w-full md:w-1/2 py-4 order-1 md:order-2">
            <img
              className="absolute top-0 right-0 w-12 md:w-16 lg:w-20 opacity-50 md:opacity-100"
              src={ornaments}
              alt="Ornamentos"
            />
            <img
              className="w-48 md:w-64 lg:w-auto mx-auto object-contain"
              src={step.image}
              alt="Produto Nike"
            />
          </div>
        </div>

        {/* Navigation buttons - hidden on small screens */}
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          <img className="w-8 md:w-10 lg:w-12" src={prev} alt="Anterior" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          <img className="w-8 md:w-10 lg:w-12" src={next} alt="Próximo" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 py-4 md:py-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentStep ? "bg-pink-600" : "bg-gray-200"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
