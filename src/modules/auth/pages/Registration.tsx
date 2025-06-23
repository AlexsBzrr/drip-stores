import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { INewRegistration } from "./data/registration.interface";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

const apiUrl = import.meta.env.VITE_BASE_URL;

const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11);
  return numbers.replace(
    /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
    (_, p1, p2, p3, p4) => {
      return `${p1}.${p2}.${p3}-${p4}`;
    }
  );
};

const formatCEP = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 8);
  return numbers.replace(/(\d{5})(\d{0,3})/, (_, p1, p2) => {
    return `${p1}-${p2}`;
  });
};

const formatTelefone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11);
  return numbers.replace(/(\d{2})(\d{4,5})(\d{0,4})/, (_, p1, p2, p3) => {
    return `(${p1}) ${p2}-${p3}`;
  });
};

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

  const [cpfError, setCpfError] = useState<string>("");

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

    let newValue: string | boolean = value;

    if (type === "checkbox") {
      newValue = checked;
    } else {
      if (name === "cpf") {
        newValue = formatCPF(value);
      } else if (name === "cep") {
        newValue = formatCEP(value);
      } else if (name === "telefone") {
        newValue = formatTelefone(value);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "cpf") {
      const unmaskedCpf = (newValue as string).replace(/\D/g, "");
      if (unmaskedCpf.length === 11 && !cpfValidator.isValid(unmaskedCpf)) {
        setCpfError("CPF inválido!");
      } else {
        setCpfError("");
      }
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const unmask = (value: string) => value.replace(/\D/g, "");

    const cpfLimpo = unmask(formData.cpf);
    if (!cpfValidator.isValid(cpfLimpo)) {
      toast.error("CPF inválido!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }

    const payload = {
      ...formData,
      cpf: cpfLimpo,
      telefone: unmask(formData.telefone),
      cep: unmask(formData.cep),
    };

    if (formData.aceitaOfertas) {
      payload["aceitaOfertas"] = true;
    }

    axios
      .post(`${apiUrl}/clientes`, JSON.stringify(payload), {
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
              minLength={6}
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
              className={`p-3 border rounded ${
                cpfError
                  ? "border-red-500"
                  : formData.cpf
                  ? "border-green-500"
                  : "border-light-gray-2"
              }`}
              required
            />
            {cpfError && (
              <span className="text-red-500 text-sm">{cpfError}</span>
            )}
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
