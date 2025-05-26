import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { getAuthServiceUrl } from "../config";
import { get } from "../requests";

// Exemplo do metodo get
// import { get } from "./utils/requests";
// get("/users");

// Exemplo do metodo post
// import { post } from "./utils/requests";
// post("/users", { name: "John Doe" });

// Exemplo do metodo put
// import { put } from "./utils/requests";
// put("/users/1", { name: "John Doe" });

// Exemplo do metodo patch
// import { patch } from "./utils/requests";
// patch("/users/1", { name: "John Doe" });

// Exemplo do metodo delete
// import { deleteReq } from "./utils/requests";
// deleteReq("/users/1");

const handleClickApi = async () => {
  try {
    const baseUrl = getAuthServiceUrl().replace(/\/$/, ""); // remove barra final se tiver
    const url = `${baseUrl}/users`; // seu endpoint
    console.log("🔍 Fazendo chamada para:", url);
    const data = await get<unknown>(url); // unknown por enquanto
    console.log("✅ Dados recebidos da API:", data);
  } catch (error) {
    console.error("❌ Erro ao buscar dados:", error);
  }
};

<ButtonPrimary onClick={handleClickApi} className="w-28 h-10">
  Teste API
</ButtonPrimary>;
