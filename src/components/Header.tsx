import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";

const logo = "/images/logo.svg";
const search = "/images/search.svg";
const searchPink = "/images/search_pink.svg";
const carrinho = "/images/mini-cart.svg";
const menu = "/images/menu.svg";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoginRoute = location.pathname === "/login";

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClick = () => navigate("/login");
  const handleClickCadastro = () => navigate("/cadastro");
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
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
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
                  <div className="flex items-center w-full bg-gray-100 rounded-lg relative">
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

                <div className="relative">
                  <button className="mr-1 md:mr-6">
                    <img className="w-6 md:w-7" src={carrinho} alt="Carrinho" />
                  </button>
                </div>

                {/* Entrar / Cadastre-se (desktop) */}
                <div className="hidden md:flex items-center">
                  <button
                    onClick={handleClickCadastro}
                    className="mr-6 text-gray-700 hover:text-gray-900"
                  >
                    Cadastre-se
                  </button>
                  <ButtonPrimary onClick={handleClick} className="px-6 py-2">
                    Entrar
                  </ButtonPrimary>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Busca Mobile */}
        {isSearchOpen && !isLoginRoute && (
          <div className="md:hidden w-full px-4 py-2 bg-white shadow-sm z-40">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="flex-1 py-2 px-4 bg-transparent outline-none text-sm text-gray-700"
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
        <nav className="hidden md:flex w-full h-20 justify-start pl-24 bg-white">
          <ul className="flex justify-between gap-x-6 items-center">
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
            <div className="mt-10 flex flex-col gap-4">
              <ButtonPrimary onClick={handleClick} className="w-full mb-2">
                Entrar
              </ButtonPrimary>
              <button
                onClick={handleClickCadastro}
                className="mr-6 text-gray-700 hover:text-gray-900"
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
