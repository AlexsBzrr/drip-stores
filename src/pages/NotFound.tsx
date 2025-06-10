import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <div className="text-center max-w-md animate-fadeIn">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-dark-gray mb-2">Página não encontrada</p>
        <p className="text-light-gray mb-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-85 transition"
        >
          <MoveLeft className="w-4 h-4 mr-2" />
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
