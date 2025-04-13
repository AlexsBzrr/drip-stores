import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import carrinho from "../assets/carrinho.svg";
import ButtonPrimary from "./base/ButtonPrimary";

const Header = () => {
  return (
    <div className="w-full h-48 bg-white pt-8 ">
      <div className="grid grid-cols-12 mb-10 ml-28 mr-28">
        <div className="col-span-2">
          <img className="w-64" src={logo} alt="logo" />
        </div>
        <div className="col-span-6 flex justify-between mx-auto items-center bg-light-gray-3 rounded-lg w-xs">
          <input
            className="ml-4 w-3/4 bg-transparent outline-none"
            type="text"
            placeholder="Pesquisar produto..."
          />
          <button>
            <img className="w-4 mr-4" src={search} alt="Search" />
          </button>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <button>Cadastre-se</button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <ButtonPrimary>Entrar</ButtonPrimary>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button>
            <img src={carrinho} alt="Meu carrinho" />
          </button>
        </div>
      </div>
      <div>
        <nav className="w-1/3 pl-28 pb-7">
          <ul className="flex justify-between">
            <li className="text-dark-gray-2 text-base">Home</li>
            <li className="text-dark-gray-2 text-base">Produtos</li>
            <li className="text-dark-gray-2 text-base">Categorias</li>
            <li className="text-dark-gray-2 text-base">Meus Pedidos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
