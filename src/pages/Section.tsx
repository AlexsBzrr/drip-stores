import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { getAuthServiceUrl } from "../utils/config";

// Interfaces para tipagem
interface ProductOption {
  title: string;
  shape: "circle" | "square";
  radius?: number;
  type: "text" | "color";
  values: string[];
}

interface Users {
  id: number;
  firstname: string;
  email: string;
}

interface ProductFormData {
  enabled: boolean;
  name: string;
  slug: string;
  stock: number;
  description: string;
  price: number;
  price_with_discount: number;
  category_ids: number[];
  options: ProductOption[];
}

interface FileWithPreview extends File {
  preview?: string;
}

const Section: React.FC = () => {
  // Estado inicial para o produto
  const [product, setProduct] = useState<ProductFormData>({
    enabled: true,
    name: "",
    slug: "",
    stock: 0,
    description: "",
    price: 0,
    price_with_discount: 0,
    category_ids: [],
    options: [
      {
        title: "Tamanho",
        shape: "circle",
        radius: 4,
        type: "text",
        values: ["P", "M", "G"],
      },
      {
        title: "Cor",
        shape: "square",
        type: "color",
        values: ["#000", "#fff"],
      },
    ],
  });

  // Estado para armazenar os arquivos de imagem
  const [imageFiles, setImageFiles] = useState<FileWithPreview[]>([]);

  // Estado para controlar o feedback ao usuário
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);

  const handleGetUser = () => {
    axios.get(`${getAuthServiceUrl()}/user`).then((response) => {
      setUsers(response.data.users);
    });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  // Função para manipular mudanças nos campos de texto
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "price" || name === "price_with_discount" || name === "stock"
          ? parseFloat(value)
          : value,
    });

    // Auto-gerar o slug baseado no nome
    if (name === "name") {
      setProduct((prev) => ({
        ...prev,
        slug: value
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
      }));
    }
  };

  // Função para adicionar categorias
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(e.target.value);
    if (categoryId) {
      setProduct((prev) => ({
        ...prev,
        category_ids: [...prev.category_ids, categoryId],
      }));
    }
  };

  // Função para processar as imagens
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).map((file) => {
      const fileWithPreview = file as FileWithPreview;
      fileWithPreview.preview = URL.createObjectURL(file);
      return fileWithPreview;
    });

    setImageFiles((prev) => [...prev, ...newFiles]);
  };

  // Função para enviar o formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      // Criar um FormData para enviar arquivos junto com os dados
      const formData = new FormData();

      // Adicionar campos básicos
      formData.append("enabled", product.enabled.toString());
      formData.append("name", product.name);
      formData.append("slug", product.slug);
      formData.append("stock", product.stock.toString());
      formData.append("description", product.description);
      formData.append("price", product.price.toString());
      formData.append(
        "price_with_discount",
        product.price_with_discount.toString()
      );

      // Adicionar categorias (como array)
      product.category_ids.forEach((catId) => {
        formData.append("category_ids", catId.toString());
      });

      // Adicionar opções como JSON
      formData.append("options", JSON.stringify(product.options));

      // Adicionar arquivos de imagem
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      // Configurar headers para multipart/form-data
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Enviar para a API
      // const response = await axios.post(
      //   "http://localhost:3000/product",
      //   formData,
      //   config
      // );

      const baseUrl = getAuthServiceUrl().replace(/\/$/, "");
      const url = `${baseUrl}/product`;
      const response = await axios.post(url, formData, config);

      setMessage("Produto cadastrado com sucesso!");
      console.log("Produto cadastrado:", response.data);

      // Limpar o formulário após cadastro bem-sucedido
      setProduct({
        enabled: true,
        name: "",
        slug: "",
        stock: 0,
        description: "",
        price: 0,
        price_with_discount: 0,
        category_ids: [],
        options: [
          {
            title: "Tamanho",
            shape: "circle",
            radius: 4,
            type: "text",
            values: ["P", "M", "G"],
          },
          {
            title: "Cor",
            shape: "square",
            type: "color",
            values: ["#000", "#fff"],
          },
        ],
      });
      setImageFiles([]);
    } catch (err) {
      const error = err as Error;
      setError(`Erro ao cadastrar produto: ${error.message}`);
      console.error("Erro ao cadastrar produto:", error);
    } finally {
      setLoading(false);
    }
  };

  // Remover uma categoria
  const removeCategory = (indexToRemove: number) => {
    setProduct((prev) => ({
      ...prev,
      category_ids: prev.category_ids.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  // Remover uma imagem
  const removeImage = (indexToRemove: number) => {
    // Liberar URL.createObjectURL para evitar memory leaks
    if (imageFiles[indexToRemove].preview) {
      URL.revokeObjectURL(imageFiles[indexToRemove].preview!);
    }

    setImageFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Função para adicionar categoria manualmente
  const addCategory = () => {
    const selectElement = document.querySelector("select") as HTMLSelectElement;
    if (!selectElement || !selectElement.value) return;

    const categoryId = parseInt(selectElement.value);
    if (categoryId && !product.category_ids.includes(categoryId)) {
      setProduct((prev) => ({
        ...prev,
        category_ids: [...prev.category_ids, categoryId],
      }));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Produto</h1>

      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dados básicos do produto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Nome do Produto</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              value={product.slug}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
            <small className="text-light-gray">
              Gerado automaticamente do nome
            </small>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Estoque</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Preço (R$)</label>
            <input
              type="number"
              name="price"
              step="0.01"
              value={product.price}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Preço com Desconto (R$)</label>
            <input
              type="number"
              name="price_with_discount"
              step="0.01"
              value={product.price_with_discount}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Descrição</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            rows={4}
            required
          ></textarea>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="enabled"
              checked={product.enabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProduct({ ...product, enabled: e.target.checked })
              }
              className="mr-2"
            />
            Produto ativo
          </label>
        </div>

        {/* Categorias */}
        <div>
          <label className="block mb-1">Categorias</label>
          <div className="flex gap-2 mb-2">
            <select
              onChange={handleCategoryChange}
              className="border p-2 rounded"
            >
              <option value="">Selecione uma categoria</option>
              <option value="1">Categoria 1</option>
              <option value="2">Categoria 2</option>
              <option value="3">Categoria 3</option>
            </select>
            <button
              type="button"
              onClick={addCategory}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Adicionar
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.category_ids.map((category, index) => (
              <div
                key={index}
                className="bg-light-gray-3 px-3 py-1 rounded-full flex items-center"
              >
                <span>Categoria {category}</span>
                <button
                  type="button"
                  onClick={() => removeCategory(index)}
                  className="ml-2 text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upload de imagens */}
        <div>
          <label className="block mb-1">Imagens do Produto</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-2 rounded"
          />
          <div>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  className="bg-light-gray-3 px-3 py-1 rounded-full flex items-center"
                >
                  {user.firstname}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {imageFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file.preview}
                  alt={`Produto ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ×
                </button>
                <small className="block truncate mt-1">{file.name}</small>
              </div>
            ))}
          </div>
        </div>

        {/* Botão de envio */}
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded font-bold disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Produto"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Section;
