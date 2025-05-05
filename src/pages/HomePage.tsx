import CardColecoesDestaque from "../components/CardColecoesDestaque";
import ColecoesDestaque from "../components/ColecoesDestaque";
import HotProduct from "../components/HotProduct";
import ProductOffering from "../components/ProductOffering";
import Stepper from "../components/Stepper/Stepper";

const HomePage = () => {
  return (
    <div>
      <div className="bg-light-gray-3">
        <Stepper />
      </div>
      <CardColecoesDestaque />
      <ColecoesDestaque />
      <HotProduct />
      <ProductOffering />
    </div>
  );
};

export default HomePage;
