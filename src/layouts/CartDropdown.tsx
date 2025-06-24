import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  removeFromCart,
  updateQuantity,
  closeCart,
  CartItem,
} from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { useState } from "react";
import PaymentMethod from "./paymentMethod";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart || {});
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleRemoveItem = (id: number, size?: number, color?: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleUpdateQuantity = (
    id: number,
    size: number | undefined,
    color: string | undefined,
    quantity: number
  ) => {
    dispatch(updateQuantity({ id, size, color, quantity }));
  };

  const handleViewCart = () => {
    setShowPaymentModal(true);
  };

  const handleViewProducts = () => {
    navigate("/produtos");
  };

  const formatPrice = (price: number) => {
    const validPrice =
      isNaN(price) || price === null || price === undefined ? 0 : price;
    return validPrice.toFixed(2).replace(".", ",");
  };

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => {
      const itemPrice = isNaN(item.currentPrice) ? 0 : item.currentPrice;
      const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
      return sum + itemPrice * itemQuantity;
    }, 0);
    return isNaN(total) ? 0 : total;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={() => dispatch(closeCart())}
      />

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border z-50 max-h-[30rem] overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg">Meu Carrinho</h3>
        </div>

        {items.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
            <ButtonPrimary onClick={handleViewProducts} className="w-full">
              Ver Produtos
            </ButtonPrimary>
          </div>
        ) : (
          <>
            <div className="max-h-60 overflow-y-auto">
              {items.map((item: CartItem, index: number) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="p-4 border-b last:border-b-0"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain bg-gray-50 rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="text-xs text-gray-500 mb-2">
                        {item.size && <span>Tamanho: {item.size}</span>}
                        {item.size && item.color && <span> | </span>}
                        {item.color && <span>Cor: {item.color}</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">
                          R$ {formatPrice(item.currentPrice)}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center border rounded text-sm"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-sm px-2">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center border rounded text-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              handleRemoveItem(item.id, item.size, item.color)
                            }
                            className="ml-2 text-red-500 text-xs hover:text-red-700"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-gray-50">
              <div className="mb-3">
                <div className="flex justify-between items-center font-semibold">
                  <span>Valor total:</span>
                  <span className="text-primary text-lg">
                    R$ {formatPrice(calculateTotal())}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <ButtonPrimary onClick={handleViewCart} className="w-full">
                  Finalizar Pedido
                </ButtonPrimary>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal de Pagamento */}
      <PaymentMethod
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        total={calculateTotal()}
      />
    </>
  );
};

export default CartDropdown;
