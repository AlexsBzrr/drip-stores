import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import NavBar from "../components/NavBar";

const PagesLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <div className="pt-6 md:pt-16">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PagesLayout;
