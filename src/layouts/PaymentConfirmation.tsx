import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  DollarSign,
  XIcon,
  ChevronRightIcon,
  ShieldIcon,
  CheckIcon,
} from "lucide-react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { ClockLoader } from "react-spinners";
import ButtonSecondary from "../components/buttons/Buttonsecondary";
import { useNavigate } from "react-router-dom";

interface PaymentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPaymentMethod: string | null;
  total: number;
  selectedPaymentName: string | null | undefined;
}

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

const PaymentConfirmationModal = ({
  isOpen,
  onClose,
  selectedPaymentMethod,
  selectedPaymentName,
  total,
}: PaymentConfirmationModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const navigate = useNavigate();

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsProcessing(false);
    setIsSuccess(true);

    setTimeout(() => {
      onClose();
      reloadPage();
    }, 3000);
    navigate("/home");
  };

  if (!isOpen) return null;

  const selectedMethod = paymentMethods.find(
    (m) => m.id === selectedPaymentMethod
  );

  const currentColor = "#fff";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all h-[40rem]">
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              {isSuccess ? "Pagamento Aprovado!" : "Confirmar Pagamento"}
            </h2>
            {!isProcessing && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XIcon />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            // Success State
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 w-8 h-8">
                  <CheckIcon />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pagamento Processado com Sucesso!
              </h3>
              <p className="text-gray-600 mb-4">
                Você receberá um e-mail de confirmação em instantes.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>ID da Transação:</strong> #TXN-2024-789123
                </p>
                <p className="text-xs text-green-600 mt-2">
                  Redirecionando em alguns segundos...
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Resumo do Pedido
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Produto Premium</span>
                    <span className="font-medium">R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxa de processamento</span>
                    <span className="font-medium">R$ 0,00</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">
                        R$ {total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Método de Pagamento Selecionado
                </h3>

                <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedMethod && (
                        <>
                          <div
                            className={`w-10 h-10 ${selectedMethod.color} rounded-lg flex items-center justify-center`}
                          >
                            <div className="text-white w-5 h-5">
                              <selectedMethod.icon />
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {selectedPaymentName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {selectedPaymentMethod === "credit" &&
                                "•••• •••• •••• 4532"}
                              {selectedPaymentMethod === "pix" &&
                                "Chave PIX: ***@email.com"}
                              {selectedPaymentMethod === "cash" &&
                                "Pagamento em dinheiro"}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="text-gray-400 w-4 h-4">
                      <ChevronRightIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 mb-2 ">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-green-600 w-4 h-4">
                    <ShieldIcon />
                  </div>
                  <span className="text-sm font-medium text-green-800">
                    Transação Segura
                  </span>
                </div>
                <p className="text-sm text-green-700">
                  Seus dados estão protegidos com criptografia SSL de 256 bits.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="p-6 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-3 h-8">
              <ButtonPrimary
                onClick={handleConfirmPayment}
                disabled={isProcessing}
                className="col-span-1 w-full"
              >
                {isProcessing ? (
                  <>
                    <div className="flex justify-center items-center ">
                      <ClockLoader size={25} color={currentColor} />
                    </div>
                  </>
                ) : (
                  "Confirmar Pagamento"
                )}
              </ButtonPrimary>

              <ButtonSecondary
                onClick={onClose}
                disablad={isProcessing}
                className="col-span-1 w-full"
              >
                Cancelar
              </ButtonSecondary>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Ao confirmar, você concorda com nossos
              <a href="#" className="text-blue-600 hover:underline ml-1">
                Termos de Uso
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
