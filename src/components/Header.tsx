import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toast } from "react-toastify";
import CartDropdown from "./CartDropdown";
import { toggleCart } from "../store/slices/cartSlice";

import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import searchPink from "../assets/images/search_pink.svg";
import carrinho from "../assets/images/mini-cart.svg";
import menu from "../assets/images/menu.svg";
import account from "../assets/images/account.svg";

const NavItem = ({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      isActive
        ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
        : "text-dark-gray-2 hover:text-primary"
    }
  >
    {label}
  </NavLink>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const isLoginRoute = location.pathname === "/login";

  // Ref para o dropdown do perfil
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const user = useSelector((state: RootState) => state.user);
  const { totalItems } = useSelector((state: RootState) => state.cart);

  // useEffect para fechar o dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("nome");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isLoged");
    toast.success("Logout efetuado com sucesso!");
    navigate("/login", { replace: true });
    setIsProfileMenuOpen(false);
  };

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };

  const handleClick = () => navigate("/loginCliente");
  const handleClickCadastro = () => navigate("/criarConta");
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);
    return isMobile;
  }

  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white shadow-sm relative z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={toggleMobileMenu}>
              <img src={menu} alt="Menu" />
            </button>
            <img
              className="h-8 md:h-10 w-32 md:w-48"
              src={logo}
              alt="Digital Store"
            />
          </div>
          {!isLoginRoute && (
            <>
              {/* Campo de busca (desktop) */}
              {!isMobile && (
                <div className="flex items-center flex-1 max-w-xl mx-8">
                  <div className="flex items-center w-full bg-light-gray-3 rounded-lg relative">
                    <input
                      className="flex-1 py-2 px-4 bg-transparent outline-none"
                      type="text"
                      placeholder="Pesquisar produto..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch} className="px-4">
                      <img className="w-4" src={search} alt="Buscar" />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center relative">
                {/* Botão busca (mobile) */}
                <button
                  className="md:hidden mr-3 absolute -left-28"
                  onClick={toggleSearch}
                >
                  <img
                    src={isMobile && !isSearchOpen ? searchPink : search}
                    alt="Buscar"
                    className="w-4"
                  />
                </button>

                {/* Carrinho */}
                <div className="relative">
                  <button
                    title="Carrinho"
                    className="mr-1 md:mr-6 relative"
                    onClick={handleCartToggle}
                  >
                    <img className="w-6 md:w-7" src={carrinho} alt="Carrinho" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {totalItems > 99 ? "99+" : totalItems}
                      </span>
                    )}
                  </button>
                  <CartDropdown />
                </div>

                {/* Entrar / Cadastre-se (desktop) */}
                <div
                  className={`${
                    user.token || isMobile ? "hidden" : ""
                  }  items-center>`}
                >
                  <button
                    onClick={handleClickCadastro}
                    className="mr-6 text-dark-gray-2 hover:text-dark-gray"
                  >
                    Cadastre-se
                  </button>
                  <ButtonPrimary onClick={handleClick} className="px-6 py-2">
                    Entrar
                  </ButtonPrimary>
                </div>

                {/* Dropdown do Perfil */}
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    title="Perfil"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className={`${
                      !user.token || isMobile ? "hidden" : ""
                    } flex items-center gap-1 hover:text-primary transition-colors cursor-pointer pl-3`}
                  >
                    <img src={account} alt="account" />
                    <span>Olá, {user.nome}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isProfileMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                      <ul className="flex flex-col text-sm text-dark-gray-3">
                        <li className="px-4 py-2 hover:bg-light-gray-3 cursor-pointer">
                          Minhas informações
                        </li>
                        <li className="px-4 py-2 hover:bg-light-gray-3 cursor-pointer">
                          Metodos de Pagamento
                        </li>

                        <hr className="my-1" />
                        <li
                          onClick={handleLogout}
                          className="px-4 py-2 text-red-500 hover:bg-light-gray-3 cursor-pointer"
                        >
                          <ButtonPrimary className="w-full">
                            Sair da Conta
                          </ButtonPrimary>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Busca Mobile */}
        {isSearchOpen && !isLoginRoute && (
          <div className="md:hidden w-full px-4 py-2 bg-white shadow-sm z-40">
            <div className="flex items-center bg-dark-gray-3 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="flex-1 py-2 px-4 bg-transparent outline-none text-sm text-dark-gray-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch} className="px-4">
                <img src={search} alt="Buscar" className="w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navegação desktop */}
      {!isLoginRoute && (
        <nav className="hidden md:flex w-full h-20 justify-start px-4 md:px-8 lg:px-12 bg-white max-w-screen-xl mx-auto">
          <ul className="flex justify-between gap-x-6 items-center ">
            <li>
              <NavItem to="/home" label="Home" />
            </li>
            <li>
              <NavItem to="/produtos" label="Produtos" />
            </li>
            <li>
              <NavItem to="/categorias" label="Categorias" />
            </li>
            <li>
              <NavItem to="/meusPedidos" label="Meus Pedidos" />
            </li>
          </ul>
        </nav>
      )}

      {/* Menu lateral Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-black bg-opacity-40">
          <aside className="bg-white w-4/5 h-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={toggleMobileMenu}
            >
              ✕
            </button>
            <div
              className={`${
                !user.token ? "hidden" : ""
              }  gap-2 flex flex-col justify-start `}
            >
              <span className="text-lg font-semibold">Olá, {user.nome}</span>
              <span>Minhas Informações</span>
              <span>Métodos de Pagamento</span>
              <ButtonPrimary onClick={handleLogout} className="px-6 py-2 mt-4">
                Sair da Conta
              </ButtonPrimary>
              <hr className="my-8 bg-light-gray" />
            </div>

            <p className="text-lg font-semibold mb-4">Páginas</p>
            <ul className="flex flex-col gap-4 text-base">
              <li>
                <NavItem to="/home" label="Home" onClick={toggleMobileMenu} />
              </li>
              <li>
                <NavItem
                  to="/produtos"
                  label="Produtos"
                  onClick={toggleMobileMenu}
                />
              </li>
              <li>
                <NavItem
                  to="/categorias"
                  label="Categorias"
                  onClick={toggleMobileMenu}
                />
              </li>
              <li>
                <NavItem
                  to="/meusPedidos"
                  label="Meus Pedidos"
                  onClick={toggleMobileMenu}
                />
              </li>
            </ul>
            <hr className="my-8 bg-light-gray" />
            <div
              className={`${
                user.token ? "hidden" : ""
              } mt-10 flex flex-col gap-4`}
            >
              <ButtonPrimary onClick={handleClick} className="w-full mb-2">
                Entrar
              </ButtonPrimary>
              <button
                onClick={handleClickCadastro}
                className="mr-6 text-dark-gray-2 hover:text-dark-gray"
              >
                Cadastre-se
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Header;
