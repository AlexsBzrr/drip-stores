import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <button className="bg-primary text-white px-4 py-2 rounded-lg absolute top-4 left-4">
        <Link to="/">Volta</Link>
      </button>
      <span
        style={{ fontSize: "2.5rem" }}
        className=" text-primary text-9xl font-bold text-center"
      >
        404 - Página não encontrada
      </span>
    </div>
  );
};

export default NotFound;
