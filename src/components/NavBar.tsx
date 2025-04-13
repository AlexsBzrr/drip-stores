import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-start pl-24 pb-7 bg-white">
      <ul className="flex justify-between gap-x-6">
        <li className="text-dark-gray-2 text-base ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-dark-gray-2 text-base">
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                : ""
            }
          >
            Produtos
          </NavLink>
        </li>
        <li className="text-dark-gray-2 text-base">
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                : ""
            }
          >
            Categorias
          </NavLink>
        </li>
        <li className="text-dark-gray-2 text-base">
          <NavLink
            to="/meusPedidos"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                : ""
            }
          >
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
