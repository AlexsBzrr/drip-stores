import logo from "/images/logo-white.svg";
import facebook from "/images/face.svg";
import instagram from "/images/insta.svg";
import twitter from "/images/x.svg";
import Informations from "./Informations";

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
        <div className="col-span-6 text-white text-base  pt-6">
          <Informations />
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
