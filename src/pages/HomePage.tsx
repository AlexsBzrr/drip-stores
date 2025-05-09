import CardColecoesDestaque from "../components/CardCollectionsHighlight";
import ColecoesDestaque from "../components/ColecoesHighlight";
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
