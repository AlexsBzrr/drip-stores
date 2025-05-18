import { useNavigate } from "react-router-dom";
import { collections } from "../data/Colections";
import ProductCard from "./ProductCard";
import { useState } from "react";

const filter = "/images/filter.svg";

const ProductListing = () => {
  const navigate = useNavigate();
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleClick = (id: number) => {
    navigate(`/produtos/${id}`);
  };

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-6 py-8 gap-8 max-w-screen-xl mx-auto">
      <aside className="w-full lg:w-64 hidden lg:block">
        <FilterContent />
      </aside>
      {/* Mobile */}
      {showMobileFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white h-full w-80 max-w-full flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Filtrar por</h3>
              <button onClick={toggleMobileFilter} className="text-gray-500">
                <span className="text-3xl">×</span>
              </button>
            </div>
            <div className="p-4">
              <FilterContent />
            </div>
          </div>
        </div>
      )}

      {/* Produtos */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-auto">
              <select className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 text-sm text-gray-700 bg-white w-full">
                <option>Ordenar por: mais relevantes</option>
              </select>
            </div>
            <button
              className="lg:hidden p-3 rounded flex items-center justify-center"
              onClick={toggleMobileFilter}
            >
              <img src={filter} className="w-8" alt="Filter" />
            </button>
          </div>
          <h2 className="text-base text-center text-gray-800">
            Resultados para <strong>"Tênis"</strong> –{" "}
            <span className="font-normal">389 produtos</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {collections.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="bg-white rounded-xl shadow-sm p-4 w-full hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
const FilterContent = () => {
  return (
    <>
      <h3 className="font-semibold text-sm mb-4 lg:block hidden">
        Filtrar por
      </h3>

      <div className="mb-6">
        <h4 className="font-bold text-sm mb-2">Marca</h4>
        <ul className="space-y-1 text-sm">
          {["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2">
                <input
                  className="accent-primary"
                  type="checkbox"
                  defaultChecked={brand === "Adidas" || brand === "K-Swiss"}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-sm mb-2">Categoria</h4>
        <ul className="space-y-1 text-sm">
          {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2">
                <input
                  className="accent-primary"
                  type="checkbox"
                  defaultChecked={cat === "Esporte e lazer"}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-sm mb-2">Gênero</h4>
        <ul className="space-y-1 text-sm">
          {["Masculino", "Feminino", "Unisex"].map((gender) => (
            <li key={gender}>
              <label className="flex items-center gap-2">
                <input
                  className="accent-primary"
                  type="checkbox"
                  defaultChecked={
                    gender === "Masculino" || gender === "Feminino"
                  }
                />
                {gender}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-sm mb-2">Estado</h4>
        <ul className="space-y-1 text-sm">
          {["Novo", "Usado"].map((state) => (
            <li key={state}>
              <label className="flex items-center gap-2">
                <input
                  className="accent-primary"
                  type="radio"
                  name="estado"
                  defaultChecked={state === "Novo"}
                />
                {state}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductListing;
