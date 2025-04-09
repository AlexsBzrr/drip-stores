import HomePage from "./pages/HomePage ";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  return (
    <>
      <div className="p-4 bg-primary">
        <HomePage />
      </div>

      <div className="p-4 bg-secondary">
        <ProductListingPage />
      </div>

      <h1 className="text-3xl font-bold underline text-d">Teste tailwindcss</h1>
    </>
  );
}

export default App;
