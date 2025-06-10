import { useEffect, useState } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import shoes from "./../assets/images/jordan.jpg";
import shoes2 from "./../assets/images/jorrda1.png";
import shoes3 from "./../assets/images/court.jpg";
import shoes4 from "./../assets/images/nikeup.png";
import ornaments from "./../assets/images/Ornament 11.svg";
import next from "./../assets/images/next.svg";
import prev from "./../assets/images/previous.svg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval); // limpa intervalo ao desmontar
  }, []);

  const handleScroolToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRedirect = () => {
    navigate("/produtos");
    handleScroolToTop();
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow rounded-lg overflow-hidden">
      <div className="relative">
        {/* Content container */}
        <div className="flex flex-col md:flex-row md:items-center px-4 md:px-8 lg:px-16 relative">
          {/* Text content */}
          <div className="flex flex-col gap-2 md:gap-4 items-start justify-center w-full md:w-1/2 py-6 md:py-12 order-2 md:order-1">
            <span className="text-sm md:text-base text-warning font-bold">
              {step.title}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-dark-gray font-extrabold leading-tight">
              {step.headline}
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal text-dark-gray-2 mb-4 md:mb-6">
              {step.description}
            </p>
            <ButtonPrimary
              onClick={handleRedirect}
              className="w-full md:w-56 py-3 md:py-4"
            >
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
              className="w-48 md:w-56 lg:w-96 mx-auto object-contain"
              src={step.image}
              alt="Produto Nike"
            />
          </div>
        </div>

        {/* Navigation buttons - hidden on small screens */}
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className=" absolute top-1/4  md:top-1/2 left-2 lg:left-4  transform -translate-y-1/2 text-3xl font-bold text-light-gray-2 hover:text-light-gray disabled:opacity-30"
        >
          <img className="w-8 md:w-10 lg:w-12" src={prev} alt="Anterior" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className=" absolute right-2 lg:right-4 top-1/4  md:top-1/2  transform -translate-y-1/2 text-3xl font-bold text-light-gray-2 hover:text-light-gray disabled:opacity-30"
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
              index === currentStep ? "bg-primary" : "bg-light-gray-2"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
