import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <section>
        <header>
          <Header />
        </header>
        <main className="flex bg-light-gray-3">
          <section>
            <Section />
          </section>
          <section></section>
          <section></section>
          <section></section>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}

export default App;
