import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import { ILogin } from "./data/login.interface";
import { useForm } from "react-hook-form";
//import { useAuth } from "../../../contexts/AuthContext";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import axios from "axios";
import { setUser } from "../../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
const apiUrl = import.meta.env.VITE_BASE_URL;

//import { useState } from "react";

import tenis1 from "./../../../assets/images/melvin-buezo-1.svg";
import tenis2 from "./../../../assets/images/melvin-buezo-2.svg";
import gmail from "./../../../assets/images/gmail1.svg";
import facebook from "./../../../assets/images/Original.svg";
const Login = () => {
  const { register, handleSubmit } = useForm<ILogin>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setIsLoged } = useAuth();

  const handleCreateAccount = () => {
    navigate("/criarConta", { replace: true });
  };

  const handleLogin = (data: ILogin) => {
    axios
      .post(`${apiUrl}/loginCliente`, data)
      .then((response) => {
        const { nome } = response.data.data;
        sessionStorage.setItem("nome", response.data.data.nome);
        sessionStorage.setItem("token", response.data.token);
        dispatch(
          setUser({
            nome,
            token: response.data.token,
          })
        );

        toast.success(response.data.message);
        setIsLoged(true);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        console.error("Erro no login:", error);
        toast.error("Login ou senha incorretos!");
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-secondary">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 pt-32 md:pt-40 pb-8 md:pb-20 relative">
        <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto z-10 gap-8">
          {/* Formulário */}
          <div className="flex flex-col justify-center p-10 space-y-6 rounded-lg bg-white shadow-md w-full h-[24rem]">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2 className="text-3xl font-bold text-dark-gray">
                Acesse sua conta
              </h2>
              <p className="text-dark-gray-2">
                Novo cliente? Então registre-se{" "}
                <a
                  onClick={handleCreateAccount}
                  className="text-primary underline cursor-pointer"
                >
                  aqui
                </a>
                .
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray-2">
                    Login *
                  </label>
                  <input
                    type="email"
                    placeholder="Insira seu email"
                    className="mt-1 block w-full rounded-md border border-light-gray-3 p-2 shadow-sm focus:ring-primary focus:border-primary"
                    {...register("email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray-2">
                    Senha *
                  </label>
                  <input
                    type="password"
                    placeholder="Insira sua senha"
                    required
                    className="mt-1 block w-full rounded-md border border-light-gray-3 p-2 shadow-sm focus:ring-primary focus:border-primary"
                    {...register("password")}
                  />
                </div>
                <a href="#" className="text-sm text-primary underline">
                  Esqueci minha senha
                </a>
                <ButtonPrimary type="submit" className="w-full h-12">
                  Acessar Conta
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

export default Login;
