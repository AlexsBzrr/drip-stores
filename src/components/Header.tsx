import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./buttons/ButtonPrimary";

const logo = "/images/logo.svg";
const search = "/images/search.svg";
const carrinho = "/images/mini-cart.svg";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-20 bg-white pt-8 ">
      <div className="grid grid-cols-12 mb-10 ml-24 mr-24">
        <div className="col-span-2">
          <img className="w-64" src={logo} alt="Logo Digital Store" />
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
          <ButtonPrimary onClick={handleClick} className="w-28 h-10">
            Entrar
          </ButtonPrimary>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button>
            <img className="w-8" src={carrinho} alt="Meu carrinho" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
