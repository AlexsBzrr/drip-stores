//import { AuthContext } from "./contexts/AuthContext";
import AppRoutes from "./Routes/PathsContainer";
function App() {
  return (
    <>
      <section>
        <main className="w-full h-auto  overflow-x-hidden">
          {/* <AuthContext> */}
          <AppRoutes />
          {/* </AuthContext> */}
        </main>
      </section>
    </>
  );
}

export default App;
