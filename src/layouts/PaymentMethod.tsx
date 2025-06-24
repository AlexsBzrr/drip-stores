import { X, CreditCard, DollarSign, Smartphone } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface PaymentMethodProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

// Modal de Formas de Pagamento
const PaymentMethod = ({ isOpen, onClose, total }: PaymentMethodProps) => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");
  const paymentMethods = [
    { id: "pix", name: "Pix", icon: Smartphone, color: "bg-teal-600" },
    {
      id: "credit",
      name: "Cartão de Crédito",
      icon: CreditCard,
      color: "bg-blue-600",
    },
    { id: "cash", name: "Dinheiro", icon: DollarSign, color: "bg-green-600" },
  ];
  const reloadPage = () => {
    navigate(0); // Faz reload da rota atual
  };
  const handlePaymentConfirm = () => {
    if (selectedPayment) {
      toast.success(
        `Pagamento confirmado via ${
          paymentMethods.find((p) => p.id === selectedPayment)?.name
        }`
      );
      onClose();
      setTimeout(() => reloadPage(), 3000);
      navigate("/");
    } else {
      toast.error("Selecione uma forma de pagamento");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              Escolha o método de pagamento:
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Payment Methods */}
          <div className="p-4 space-y-3">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
                    selectedPayment === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <span className="font-medium text-left">{method.name}</span>
                </button>
              );
            })}
          </div>

          {/* Total */}
          <div className="px-4 py-2 bg-gray-50 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Valor total:</span>
              <span className="font-bold text-lg text-pink-600">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 border-t space-y-2">
            <button
              onClick={handlePaymentConfirm}
              disabled={!selectedPayment}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                selectedPayment
                  ? "bg-pink-600 hover:bg-pink-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirmar Pagamento
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
