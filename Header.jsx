import { Link, useLocation, useNavigate } from "react-router-dom";
import { setScrollToPlanos } from "../scrollToPlanos";

function Header({ usuarioLogado, setUsuarioLogado }) {
   const location = useLocation();
   const navigate = useNavigate();

   const scrollToPlanos = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            setScrollToPlanos(true);
            navigate("/");
        } else {
            const el = document.getElementById("planos");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        
    <header className="bg-black w-full">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-0 py-4">
      <Link to="/" className="text-white font-bold text-3xl hover:underline transition">
                G4 Tasks
            </Link>
      <nav className="flex items-center gap-8 text-lg">
      <a href="#planos" onClick={scrollToPlanos} className="text-white">Planos</a>
      <Link to="/projetos" className="text-white">Projetos</Link>
      <Link to="/tarefas" className="text-white">Tarefas</Link>
      {!usuarioLogado && (
    <>
      <Link to="/login" className="text-white">Login</Link>
      <Link to="/registro" className="bg-white text-green-700 font-bold px-4 py-2 rounded hover:bg-green-100 transition">
        Registre-se
      </Link>
    </>
  )}
  {usuarioLogado && (
    <span className="flex items-center gap-2">
      <span className="text-red-500 text-xl"></span>
      Olá, {usuarioLogado.email}
      <button onClick={() => {
  setUsuarioLogado(null);
  localStorage.removeItem("usuarioLogado");
      }}
      className="ml-4 px-2 py-1 bg-red-600 rounded text-white">
        Sair
      </button>
    </span>
  )}
</nav>
    </div>
  </header>
    );
}

export default Header;
