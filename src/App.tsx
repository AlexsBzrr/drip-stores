//import { AuthContext } from "./contexts/AuthContext";
import { useDispatch } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./Routes/PathsContainer";
import { useEffect } from "react";
import { setUser } from "./store/slices/userSlice";
import { ToastContainer } from "react-toastify";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const nome = sessionStorage.getItem("nome");
    const token = sessionStorage.getItem("token");

    if (nome && token) {
      dispatch(setUser({ nome, token }));
    }
  }, [dispatch]);
  return (
    <>
      <section>
        <main className="w-full h-auto  overflow-x-hidden">
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </section>
    </>
  );
}

export default App;
