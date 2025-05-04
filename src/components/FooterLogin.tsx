import logo from "/images/logo-white.svg";
import facebook from "/images/face.svg";
import instagram from "/images/insta.svg";
import twitter from "/images/x.svg";

const FooterLogin = () => {
  return (
    <footer className="w-full bg-dark-gray pl-24 pr-24 ">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-4 pt-6 w-72">
          <span className="flex justify-center pb-7">
            <img className="w-64 h-10" src={logo} alt="Logo Digital Store" />
          </span>
          <p className="text-white text-xs text-justify leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <span className="flex justify-start gap-x-8 pt-5">
            <img src={facebook} alt="Logo Facebook" />
            <img src={instagram} alt="Logo Instagram" />
            <img src={twitter} alt="LogoTwitter" />
          </span>
        </div>
        <div className="col-span-2 text-white text-xs w-36 pt-2">
          <h2 className="text-lg font-semibold pb-2">Informação</h2>
          <ul className="text-white text-xs font-normal leading-9">
            <li>Sobre DripStore</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li> Meus Pedidos</li>
          </ul>
        </div>
        <div className="col-span-2 text-white text-xs w-36 pt-2">
          <h2 className="text-lg font-semibold pb-2">Categorias</h2>
          <ul className="text-white text-xs font-normal leading-9">
            <li>Sobre DripStore</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li> Meus Pedidos</li>
          </ul>
        </div>
        <div className="col-span-2 text-white text-xs w-36 pt-2">
          <h2 className="text-lg font-semibold pb-2">Contato</h2>
          <ul className="text-white text-xs font-normal leading-9">
            <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-center items-center">
        <span className="text-center text-white text-xs pb-2">
          © 2025 Digital Store
        </span>
      </div>
    </footer>
  );
};

export default FooterLogin;
