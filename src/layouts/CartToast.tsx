import React from "react";

interface CartToastProps {
  productName: string;
  productImage: string;
  onViewCart: () => void;
  onContinueShopping: () => void;
}

const CartToast: React.FC<CartToastProps> = ({
  productName,
  productImage,
  onViewCart,
  onContinueShopping,
}) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-lg border max-w-sm">
      <img
        src={productImage}
        alt={productName}
        className="w-12 h-12 object-contain bg-gray-50 rounded"
      />
      <div className="flex-1">
        <p className="text-sm font-medium text-green-600 mb-1">
          ✓ Produto adicionado!
        </p>
        <p className="text-xs text-gray-600 line-clamp-1">{productName}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={onContinueShopping}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Continuar
          </button>
          <button
            onClick={onViewCart}
            className="text-xs text-primary hover:text-primary-dark font-medium"
          >
            Ver carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartToast;
