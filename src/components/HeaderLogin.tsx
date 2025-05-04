const logo = "/images/logo.svg";
const HeaderLogin = () => {
  return (
    <div className="w-full h-16 bg-white p-4 ">
      <div className="grid grid-cols-12 mb-10 ml-24 mr-24">
        <div className="col-span-2">
          <img className="w-36" src={logo} alt="Logo Digital Store" />
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
