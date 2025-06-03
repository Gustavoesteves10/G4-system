import { useState } from "react";
import axios from "axios";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [termos, setTermos] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termos) {
      setMensagem("Você precisa aceitar os termos para continuar.");
      return;
    }
    try {
      const resp = await axios.post("http://localhost:3001/api/registro", {
        nome,
        email,
        senha,
      });
      setMensagem(resp.data.mensagem);
    } catch (err) {
      setMensagem("Erro ao registrar.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-pattern.png')] bg-repeat">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-md w-full rounded shadow p-8"
      >
        <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">
          Criar uma conta no <span className="block">G4 Tasks</span>
        </h2>
        <div className="flex gap-2 mb-4 justify-center">
        </div>
        <label className="block mb-2 font-semibold text-black">
          Nome completo *
          <input
            type="text"
            className="block w-full border rounded p-2 mt-1"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label className="block mb-2 font-semibold text-black">
          Email *
          <input
            type="email"
            className="block w-full border rounded p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4 font-semibold text-black">
          Senha *
          <input
            type="password"
            className="block w-full border rounded p-2 mt-1"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        <label className="flex items-center mb-4 text-sm text-black">
          <input
            type="checkbox"
            className="mr-2"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
            required
          />
          Li e concordo com os{" "}
          <a href="#" className="underline mx-1 text-green-800">
            Termos de Uso
          </a>
          e com a{" "}
          <a href="#" className="underline text-green-800">
            Política de privacidade
          </a>
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-green-900 text-white py-2 rounded font-semibold"
          >
            Cadastrar
          </button>
        </div>
        {mensagem && (
          <div className="mt-4 text-center text-red-600">{mensagem}</div>
        )}
      </form>
    </div>
  );
}