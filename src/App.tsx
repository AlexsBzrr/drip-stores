import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <section>
        <main className="w-full h-auto bg-light-gray-3">
          <BrowserRouter>
            <Header />
            <NavBar />
            <AppRoutes />
          </BrowserRouter>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}

export default App;
