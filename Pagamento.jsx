import { useParams, useNavigate } from "react-router-dom";

function Pagamento() {
  const { tipo } = useParams();
  const navigate = useNavigate();

  
  const planos = {
    mensal: {
      nome: "PLUS MENSAL",
      preco: "R$ 3,90/mês",
      descricao: "Cobrança mensal. Gerenciamento avançado de tarefas e projetos ilimitados.",
    },
    anual: {
      nome: "PLUS ANUAL",
      preco: "R$ 39,90/ano",
      descricao: "Cobrança anual. Projetos ilimitados e desconto equivalente a dois meses gratuitos.",
    },
  };

  
  if (!planos[tipo]) {
    navigate("/");
    return null;
  }

  const plano = planos[tipo];

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-700">
      <div className="bg-white rounded-3xl shadow p-8 max-w-md w-full text-green-900 text-center">
        <h2 className="text-3xl font-bold mb-2">{plano.nome}</h2>
        <p className="text-2xl font-extrabold mb-2">{plano.preco}</p>
        <p className="mb-6">{plano.descricao}</p>
        <form>
          <input
            type="text"
            placeholder="Nome no cartão"
            className="block w-full border rounded p-2 mb-3"
            required
          />
          <input
            type="text"
            placeholder="Número do cartão"
            className="block w-full border rounded p-2 mb-3"
            required
          />
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Validade"
              className="flex-1 border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              className="flex-1 border rounded p-0"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-lg font-bold w-full hover:bg-green-900"
          >
            Pagar {plano.preco}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pagamento;