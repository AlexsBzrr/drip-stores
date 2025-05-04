import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import HeaderLogin from "../../../components/HeaderLogin";
import FooterLogin from "../../../components/FooterLogin";
import { ILogin } from "./ILogin";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";

const tenis1 = "/images/melvin-buezo-1.svg";
const tenis2 = "/images/melvin-buezo-2.svg";
const gmail = "/images/gmail1.svg";
const facebook = "/images/Original.svg";
const Login = () => {
  const { register, handleSubmit } = useForm<ILogin>();
  const navigate = useNavigate();
  const { setIsLoged } = useAuth();

  const handleLogin = (data: ILogin) => {
    console.log(data);
    // Lógica de autenticação
    if (data.email === "admin" && data.password === "admin") {
      setIsLoged(true);
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-secondary">
      <HeaderLogin />
      <div className="flex flex-1 items-center justify-center px-4 py-12 relative">
        <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto z-10 gap-8">
          {/* Formulário */}
          <div className="flex flex-col justify-center p-10 space-y-6 rounded-lg bg-white shadow-md w-full h-[30rem]">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2 className="text-3xl font-bold text-gray-900">
                Acesse sua conta
              </h2>
              <p className="text-gray-600">
                Novo cliente? Então registre-se{" "}
                <a href="#" className="text-primary underline">
                  aqui
                </a>
                .
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Login *
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu login ou email"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-primary focus:border-primary"
                    {...register("email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Senha *
                  </label>
                  <input
                    type="password"
                    placeholder="Insira sua senha"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-primary focus:border-primary"
                    {...register("password")}
                  />
                </div>
                <a href="#" className="text-sm text-primary underline">
                  Esqueci minha senha
                </a>
                <ButtonPrimary type="submit" className="w-full h-12">
                  Acessar Conta
                </ButtonPrimary>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span> Ou faça login com</span>
                  <img
                    src={gmail}
                    alt="Login com Gmail"
                    className="h-6 w-6 cursor-pointer"
                  />
                  <img
                    src={facebook}
                    alt="Login com Facebook"
                    className="h-6 w-6 cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Tênis */}
          <div className="hidden md:block relative">
            <img
              src={tenis1}
              alt="Tênis 1"
              className="absolute -top-16 left-4 max-h-[28rem] object-contain"
            />
            <img
              src={tenis2}
              alt="Tênis 2"
              className="absolute -bottom-20 right-0 max-h-[28rem] object-contain"
            />
          </div>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};

export default Login;
