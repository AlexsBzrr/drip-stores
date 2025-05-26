# 🛍️ Drip Stores

Projeto front-end desenvolvido com foco em autenticação, cadastro de usuários e estrutura modular utilizando React + TypeScript.

---

## 📚 Sumário

- [📖 Visão Geral](#📖-visão-geral)
- [🛠️ Tecnologias Utilizadas](#🛠️-tecnologias-utilizadas)
- [📁 Estrutura de Pastas](#📁-estrutura-de-pastas)
- [🚀 Como Rodar o Projeto](#🚀-como-rodar-o-projeto)
- [📜 Scripts Disponíveis](#📜-scripts-disponíveis)
- [✅ Boas Práticas](#✅-boas-práticas)

---

## 📖 Visão Geral

O **Drip Stores** é uma aplicação desenvolvida em React com Vite e TypeScript, que oferece funcionalidades de autenticação (login, cadastro) e estrutura modularizada por contexto (auth, store, utils, interfaces, etc). O projeto segue padrões modernos de desenvolvimento com Tailwind CSS para estilização e Redux Toolkit para gerenciamento de estado.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ React 19
- 🔀 React Router DOM
- 🎯 TypeScript
- 🎨 Tailwind CSS
- 📦 Redux Toolkit + React Redux
- 🧼 ESLint
- 📥 Axios
- 🔐 React Hook Form + Input Mask
- 🔔 React Toastify
- 🌀 React Spinners
- 🧠 Lucide Icons
- ⚙️ Vite (dev/build tool)

---

## 📁 Estrutura de Pastas

```
src/
├── assets/            # Imagens e recursos estáticos
├── components/        # Componentes reutilizáveis
├── contexts/          # Context API (se aplicável)
├── data/              # Dados mockados, JSONs ou constantes
├── interfaces/        # Tipagens e interfaces TypeScript
├── layouts/           # Layouts principais da aplicação
├── modules/           # Agrupamento por funcionalidades
│   └── auth/          # Módulo de autenticação
│       ├── data/      # Dados relacionados ao auth
│       ├── Login.tsx
│       ├── Registration.tsx
│       └── CreateAccount.tsx
├── pages/             # Páginas principais
├── Routes/            # Definição das rotas da aplicação
├── store/             # Configuração do Redux Store
├── utils/             # Funções utilitárias
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── vite-env.d.ts      # Tipagens Vite
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos:

- Node.js (v18 ou superior)
- npm

### Passos:

```bash
# 1. Clonar o repositório
git clone https://github.com/AlexsBzrr/drip-stores.git

# 2. Acessar o diretório do projeto
cd drip-stores

# 3. Instalar as dependências
npm install

# 4. Rodar o projeto em modo desenvolvimento
npm run dev
```

---

## 📜 Scripts Disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build`   | Gera o build de produção                    |
| `npm run lint`    | Executa o linter com ESLint                 |
| `npm run preview` | Visualiza a build de produção localmente    |

---

## ✅ Boas Práticas

- Componentes com nomes em `PascalCase`.
- Funções e variáveis em `camelCase`.
- Tipagens explícitas com TypeScript.
- Uso de **Redux Toolkit** para gerenciamento de estado global.
- **Tailwind CSS** como padrão de estilização.
- Separação de módulos por domínio de funcionalidade (`modules/auth`, `modules/user`, etc).
- Organização de tipos em `interfaces/`.

---

## 📫 Contato

Desenvolvido por **Alex Bezerra**  
📧 alex@email.com  
🔗 [LinkedIn](https://linkedin.com/in/seu-perfil)  
🔗 [GitHub](https://github.com/AlexsBzrr)

---
