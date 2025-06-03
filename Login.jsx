import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setUsuarioLogado }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3001/api/login", {
        email,
        senha,
      });
      setMensagem(resp.data.mensagem);
      if (resp.data.sucesso) {
        setUsuarioLogado({ email });
        localStorage.setItem("usuarioLogado", JSON.stringify({ email }));
        navigate("/");
      }
    } catch (err) {
      setMensagem("Erro ao fazer login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-pattern.png')] bg-repeat">
      <form
        onSubmit={handleLogin}
        className="bg-white max-w-md w-full rounded shadow p-8"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
          Entrar no <span className="block">G4 Tasks</span>
        </h2>
        <label className="block mb-4 font-semibold text-black">
          Email
          <input
            type="email"
            className="block w-full border rounded p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-6 font-semibold text-black">
          Senha
          <input
            type="password"
            className="block w-full border rounded p-2 mt-1"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded font-semibold"
        >
          Entrar
        </button>
        {mensagem && (
          <div className="mt-4 text-center text-red-600">{mensagem}</div>
        )}
      </form>
    </div>
  );
}