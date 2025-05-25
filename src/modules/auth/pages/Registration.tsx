import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { INewRegistration } from "./data/registration.interface";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Registration: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRecebido = location.state?.email ?? "";

  const [formData, setFormData] = useState<INewRegistration>({
    nome: "",
    email: "",
    password: "",
    cpf: "",
    telefone: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    aceitaOfertas: false,
  });

  useEffect(() => {
    if (emailRecebido) {
      setFormData((prev) => ({
        ...prev,
        email: emailRecebido,
      }));
    }
  }, [emailRecebido]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { aceitaOfertas, ...payload } = formData;
    if (aceitaOfertas) {
      // Adicionar aceitaOfertas ao payload
    }

    axios
      .post("http://localhost:3300/api/clientes", JSON.stringify(payload), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Cadastro efetuado com sucesso!");
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error || "Erro ao cadastrar!");
      });

    setFormData({
      nome: "",
      email: "",
      password: "",
      cpf: "",
      telefone: "",
      endereco: "",
      bairro: "",
      cidade: "",
      cep: "",
      complemento: "",
      aceitaOfertas: false,
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-light-gray-3 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
      <form onSubmit={handleSubmitForm} className="space-y-6">
        {/* Informações Pessoais */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Informações Pessoais</h2>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded text-light-gray-2"
              required
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="nome">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira seu nome"
              value={formData.nome}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Crie uma senha"
              value={formData.password}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="cpf">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Insira seu CPF"
              value={formData.cpf}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="telefone">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="Insira seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>
        </div>

        {/* Informações de Entrega */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Informações de Entrega</h2>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="endereco">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Insira seu endereço"
              value={formData.endereco}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="bairro">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              placeholder="Insira seu bairro"
              value={formData.bairro}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="cidade">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              placeholder="Insira sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="cep">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="Insira seu CEP"
              value={formData.cep}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="complemento">
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              placeholder="Insira complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="p-3 border border-light-gray-2 rounded"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2 accent-primary">
          <input
            type="checkbox"
            id="aceitaOfertas"
            name="aceitaOfertas"
            checked={formData.aceitaOfertas}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="aceitaOfertas" className="text-sm text-dark-gray-2">
            Quero receber por email ofertas e novidades das lojas da Digital
            Store.
          </label>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default Registration;
