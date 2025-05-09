import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProductDetails } from "./data/productsDetails.interface";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ProductCard from "./ProductCard";
import { collections } from "./ProductListing";

const ProductDetails = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<IProductDetails | undefined>(
    undefined
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const found = collections.find((item) => item.id === parseInt(id || "0"));
      setProduto(found);
    }, 500);

    return () => clearTimeout(timeout);
  }, [id]);

  if (!produto) {
    return <p className="p-8">Carregando produto...</p>;
  }

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      {/* Caminho */}
      <nav className="text-sm text-gray-500 mb-4">
        Home / Produtos / Tênis / {produto.title}
      </nav>
      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Imagem principal + miniaturas */}
        <div>
          <div className="bg-indigo-50 p-4 rounded-xl mb-4 flex justify-center">
            <img
              src={produto.image}
              alt={produto.description}
              className="w-80 h-80 object-contain"
            />
          </div>
          {/* Miniaturas (mock) */}
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-16 h-16 border rounded-md overflow-hidden p-1 bg-white"
              >
                <img
                  src={produto.image}
                  alt="variante"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Informações do produto */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{produto.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            Casual | Nike | REF: 3846111
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500">★★★★★</div>
            <span className="text-sm font-bold text-orange-500">4.7</span>
            <span className="text-sm text-gray-500">(90 avaliações)</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-black">
              R$ {produto.precoAtual}
            </span>
            <span className="line-through text-gray-400 text-base">
              {produto.precoAnterior}
            </span>
          </div>
          {/* Descrição */}
          <h2 className="font-semibold text-sm mb-1">Descrição do produto</h2>
          <p className="text-sm text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Tamanhos */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Tamanho</h3>
            <div className="flex gap-2">
              {[39, 40, 42, 43].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Cores */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-1">Tamanho</h3>
            <div className="flex gap-2">
              {[
                "bg-pink-400",
                "bg-cyan-500",
                "bg-purple-600",
                "bg-gray-800",
              ].map((color, i) => (
                <div
                  key={i}
                  className={`${color} w-6 h-6 rounded-full border-2 border-white hover:ring-2 ring-black cursor-pointer`}
                />
              ))}
            </div>
          </div>
          {/* Botão Comprar */}
          <ButtonPrimary
            className="bg-yellow-1 hover:bg-lime-300"
            onClick={() => {}}
          >
            COMPRAR
          </ButtonPrimary>
        </div>
      </div>
      <ProductCard />
    </div>
  );
};

export default ProductDetails;
