import logo from "../assets/logo-white.svg";
import facebook from "../assets/face.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/x.svg";

const Footer = () => {
  return (
    <footer className="w-full h-96 bg-dark-gray pl-24 pr-24 ">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-4  pt-6 w-72">
          <span className="flex justify-center pb-9">
            <img className="w-64 h-10" src={logo} alt="Logo Digital Store" />
          </span>
          <p className="text-white text-base text-justify leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <span className="flex justify-start gap-x-8 pt-10">
            <img src={facebook} alt="Logo Facebook" />
            <img src={instagram} alt="Logo Instagram" />
            <img src={twitter} alt="LogoTwitter" />
          </span>
        </div>
        <div className="col-span-2 text-white text-base w-36 pt-6">
          <h2 className="text-lg font-semibold pb-7">Informação</h2>
          <ul className="text-white text-base font-normal leading-9">
            <li>Sobre DripStore</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li> Meus Pedidos</li>
          </ul>
        </div>
        <div className="col-span-2 text-white text-base w-36 pt-6">
          <h2 className="text-lg font-semibold pb-7">Categorias</h2>
          <ul className="text-white text-base font-normal leading-9">
            <li>Sobre DripStore</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li> Meus Pedidos</li>
          </ul>
        </div>
        <div className="col-span-2 text-white text-base w-36 pt-6">
          <h2 className="text-lg font-semibold pb-7">Contato</h2>
          <ul className="text-white text-base font-normal leading-9">
            <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
      <hr className="mt-8" />
      <span className="flex justify-center text-white text-sm pt-4">
        © 2022 Digital Store
      </span>
    </footer>
  );
};

export default Footer;
