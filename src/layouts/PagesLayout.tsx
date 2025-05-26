import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import NavBar from "../components/NavBar";

const PagesLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PagesLayout;
