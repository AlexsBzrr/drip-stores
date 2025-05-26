import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import { useForm } from "react-hook-form";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ICreateAccount } from "./data/registration.interface";
//import { useState } from "react";

import tenis1 from "./../../../assets/images/melvin-buezo-1.svg";
import tenis2 from "./../../../assets/images/melvin-buezo-2.svg";
import gmail from "./../../../assets/images/gmail1.svg";
import facebook from "./../../../assets/images/Original.svg";
const CreateAccount = () => {
  const { register, handleSubmit } = useForm<ICreateAccount>();
  const navigate = useNavigate();
  //const [isLoged, setIsLoged] = useState(false);
  // const { setIsLoged } = useAuth();
  const handleLogin = () => {
    navigate("/loginCliente", { replace: true });
  };

  const handleCreateAccount = (data: ICreateAccount) => {
    navigate("/cadastro", { state: { email: data.email }, replace: true });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-secondary">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 pt-32 md:pt-40 pb-8 md:pb-20 relative">
        <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto z-10 gap-8">
          {/* Formulário */}
          <div className="flex flex-col justify-center p-10 space-y-6 rounded-lg bg-white shadow-md w-full h-[24rem]">
            <form onSubmit={handleSubmit(handleCreateAccount)}>
              <h2 className="text-3xl font-bold text-dark-gray pb-4">
                Crie sua conta
              </h2>
              <p className="text-dark-gray-2 pb-4 ">
                Já possui uma conta? Entre
                <a
                  onClick={handleLogin}
                  className="text-primary underline pl-1 cursor-pointer"
                >
                  aqui
                </a>
                .
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Insira seu email"
                    required
                    className="mt-1 block w-full rounded-md border border-light-gray p-2 shadow-sm focus:ring-primary focus:border-primary"
                    {...register("email")}
                  />
                </div>

                <ButtonPrimary type="submit" className="w-full h-12">
                  Criar Conta
                </ButtonPrimary>
                <div className="flex justify-center gap-4 text-sm text-dark-gray-3">
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
      <Footer />
    </div>
  );
};

export default CreateAccount;
