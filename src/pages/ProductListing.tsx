import { useNavigate } from "react-router-dom";
import { collections } from "../data/Colections";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/produtos/${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-6 py-8 gap-8 max-w-screen-xl mx-auto">
      {/* Filtros (visível em telas médias e grandes) */}
      <aside className="w-full lg:w-64 hidden lg:block">
        <h3 className="font-semibold text-sm mb-4">Filtrar por</h3>

        <div className="mb-6">
          <h4 className="font-bold text-sm mb-2">Marca</h4>
          <ul className="space-y-1 text-sm">
            {["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map(
              (brand) => (
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
              )
            )}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-sm mb-2">Categoria</h4>
          <ul className="space-y-1 text-sm">
            {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
              (cat) => (
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
              )
            )}
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
                    defaultChecked={state === "Novo"}
                  />
                  {state}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Produtos */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-base text-gray-800">
            Resultados para <strong>“Tênis”</strong> –{" "}
            <span className="font-normal">389 produtos</span>
          </h2>
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Ordenar por: mais relevantes</option>
          </select>
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

export default ProductListing;
