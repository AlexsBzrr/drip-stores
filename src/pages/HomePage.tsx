import CardColecoesDestaque from "../layouts/CardCollectionsHighlight";
import ColecoesDestaque from "../layouts/ColecoesHighlight";
import HotProduct from "../layouts/HotProduct";
import ProductOffering from "../layouts/ProductOffering";
import Stepper from "../layouts/Stepper";

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
