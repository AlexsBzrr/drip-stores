import logo from "/images/logo-white.svg";
import facebook from "/images/face.svg";
import instagram from "/images/insta.svg";
import twitter from "/images/x.svg";
import Informations from "./Informations";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-gray px-4 md:px-12 lg:px-24 py-10">
      <div className="flex flex-col lg:grid lg:grid-cols-10 gap-8">
        <div className="lg:col-span-4 flex flex-col items-start lg:items-center text-white max-w-md">
          <span className="pb-6">
            <img className="w-40 md:w-48" src={logo} alt="Logo Digital Store" />
          </span>
          <p className="text-sm md:text-base leading-6 md:leading-7 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <span className="flex gap-6 pt-6">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </span>
        </div>

        <div className="lg:col-span-6 text-white pt-8 lg:pt-6">
          <Informations />
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      <div className="text-white text-xs md:text-sm text-center">
        © 2022 Digital College
      </div>
    </footer>
  );
};

export default Footer;
