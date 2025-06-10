import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IProductDetails } from "../interfaces/productsDetails.interface";
import { collections } from "../data/Colections";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { addToCart } from "../store/slices/cartSlice";

import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ProductCard from "../layouts/ProductCard";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [produto, setProduto] = useState<IProductDetails | undefined>(
    undefined
  );
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42];
  const colors = [
    { name: "Rosa", class: "bg-pink-400" },
    { name: "Vermelho", class: "bg-red-500" },
    { name: "Azul", class: "bg-cyan-500" },
    { name: "Branco", class: "bg-white" },
    { name: "Roxo", class: "bg-purple-600" },
    { name: "Preto", class: "bg-gray-800" },
    { name: "Laranja", class: "bg-orange-500" },
  ];

  const handleClick = () => {
    navigate("/produtos");
  };

  const handleAddToCart = () => {
    if (!produto) return;

    if (selectedSize === null) {
      toast.error("Por favor, selecione um tamanho");
      return;
    }

    if (selectedColor === null) {
      toast.error("Por favor, selecione uma cor");
      return;
    }

    dispatch(
      addToCart({
        id: produto.id,
        title: produto.title,
        image: produto.image,
        currentPrice: produto.currentPrice,
        previousPrice: produto.previousPrice,
        size: selectedSize,
        color: colors[selectedColor].name,
      })
    );

    toast.success("Produto adicionado ao carrinho!");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const found = collections.find((item) => item.id === parseInt(id || "0"));
      setProduto(found);
    }, 500);

    return () => clearTimeout(timeout);
  }, [id]);

  const currentColor = "#C92071";

  if (!produto) {
    return (
      <div className="flex justify-center items-center h-40">
        <FadeLoader height={15} color={currentColor} />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      {/* Caminho */}
      <nav className="text-sm text-dark-gray-2 mb-4">
        Home / Produtos / Tênis / <strong>{produto.description}</strong>
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
          <div className="flex justify-between">
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
          <p className="text-sm text-light-gray mb-2">
            Casual | Nike | REF: 3846111
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500">★★★★★</div>
            <span className="text-sm font-bold text-warning">4.7</span>
            <span className="text-sm text-light-gray">(90 avaliações)</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-black">
              R$ {produto.currentPrice.toFixed(2).replace(".", ",")}
            </span>
            <span className="line-through text-dark-gray-2 text-base">
              R$ {produto.previousPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>

          {/* Descrição */}
          <h2 className="font-semibold text-sm mb-1">Descrição do produto</h2>
          <p className="text-sm text-light-gray mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Tamanhos */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Tamanho</h3>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm transition-colors hover:bg-primary hover:text-white hover:border-primary duration-300 ${
                    selectedSize === size
                      ? "border-primary bg-primary text-white"
                      : "border-light-gray-2 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cores */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-1">Cor</h3>
            <div className="flex gap-2">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`${
                    color.class
                  } w-8 h-8 rounded-full border-2 border-white cursor-pointer transition-all ${
                    selectedColor === i
                      ? "ring-2 ring-primary ring-offset-2"
                      : "hover:ring-2 ring-black ring-offset-1"
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Botão Comprar */}
          <ButtonPrimary
            className="bg-yellow-1 hover:bg-yellow-3 text-white text-sm font-bold py-2 px-4 rounded-lg"
            onClick={handleAddToCart}
          >
            COMPRAR
          </ButtonPrimary>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-xl md:text-2xl font-bold text-dark-gray-2">
          Produtos Relacionados
        </span>
        <span
          onClick={handleClick}
          className="text-lg text-primary font-normal cursor-pointer "
        >
          Ver todos →
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {collections.slice(0, 8).map((item) => (
          <div className="bg-white rounded-xl shadow-sm p-4 w-full hover:shadow-primary cursor-pointer transition-transform duration-300 hover:scale-105">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
