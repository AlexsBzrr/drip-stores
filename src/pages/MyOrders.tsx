import { orders } from "../data/Colections.tsx";

const MyOrdersPage = () => {
  const menuItems = [
    "Meu Perfil",
    "Meus Pedidos",
    "Minhas Informações",
    "Métodos de Pagamento",
  ];

  const getStatusColor = (status: string) => {
    if (status === "Produto em trânsito") return "text-warning";
    if (status === "Finalizado") return "text-success";
    return "text-error";
  };

  return (
    <div className="flex bg-light-blue-1 min-h-screen p-8">
      {/* Sidebar */}
      <aside className="bg-white p-6 rounded-md w-64 shadow-md">
        <ul className="space-y-4 text-sm font-medium text-dark-gray">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`py-1 border-b border-light-gray-2 ${
                item === "Meus Pedidos"
                  ? "text-primary font-bold"
                  : "text-dark-gray-3"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Orders */}
      <main className="flex-1 ml-4 bg-white p-6 rounded-md  shadow-md">
        <div className="flex justify-between items-center border-b border-dashed pb-2 mb-4">
          <h1 className="text-sm font-bold text-dark-gray-2">Meus Pedidos</h1>
          <span className="text-sm text-dark-gray-2 font-medium pr-1">
            STATUS
          </span>
        </div>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-dashed border-light-gray-2 p-4 rounded-md bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={order.image}
                  alt="Tênis"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-xs text-light-gray mb-1">
                    Pedido nº {order.id}
                  </p>
                  <p className="font-semibold text-dark-gray-2">
                    {order.product}
                  </p>
                </div>
              </div>
              <span
                className={`text-sm font-semibold ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyOrdersPage;
