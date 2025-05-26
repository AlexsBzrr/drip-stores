import logo from "/images/logo-white.svg";
import facebook from "/images/face.svg";
import instagram from "/images/insta.svg";
import twitter from "/images/x.svg";
import Informations from "./Informations";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto px-4 sm:px-6 lg:px-8 bg-dark-gray ">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-8">
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center text-white max-w-md">
            <span className="py-8">
              <img
                className="w-40 md:w-48"
                src={logo}
                alt="Logo Digital Store"
              />
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

          <div className="lg:col-span-6 text-white py-8 lg:py-6">
            <Informations />
          </div>
        </div>

        <hr className="w-full  pt-6 border-dark-gray-3" />
        <div className="text-white text-xs md:text-sm flex  justify-center items-center">
          <span className="pb-5">© 2025 Digital College</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
