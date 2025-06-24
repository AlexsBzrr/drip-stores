import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentConfirmationModal from "./PaymentConfirmation";

const PaymentFlow = () => {
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handleOpenPaymentMethod = () => {
    setIsPaymentMethodOpen(true);
  };

  const handleClosePaymentMethod = () => {
    setIsPaymentMethodOpen(false);
  };

  const handlePaymentConfirmed = (paymentMethodId: string) => {
    setSelectedPaymentMethod(paymentMethodId);
    setIsPaymentMethodOpen(false);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenPaymentMethod}
        className="bg-pink-600 text-white px-6 py-3 rounded-lg"
      >
        Abrir Modal de Pagamento
      </button>

      <PaymentMethod
        isOpen={isPaymentMethodOpen}
        onClose={handleClosePaymentMethod}
        total={0}
        onConfirm={handlePaymentConfirmed}
      />

      <PaymentConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleCloseConfirmation}
        selectedPaymentMethod={selectedPaymentMethod}
        selectedPaymentName={""}
        total={0}
      />
    </>
  );
};

export default PaymentFlow;
