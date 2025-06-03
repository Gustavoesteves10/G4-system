import { useNavigate } from "react-router-dom";

function Planos () {
  const navigate = useNavigate();

  return (
    <section id="planos" className="bg-green-700 text-white px-4 py-20 flex justify-center">
      <div className="max-w-5xl mx-0 grid md:grid-cols-3 gap-6 w-full">
        {/* GRÁTIS */}
        <div className="bg-white text-green-900 p-8 rounded-3xl shadow flex flex-col items-center text-center h-[480px]">
        <h4 className="text-2xl font-bold mb-3">GRÁTIS</h4>
        <p className="text-4xl font-extrabold mb-1">R$0</p>
        <p className="text-2xl mt-2 mb-2">Plano básico gratuito</p>
        <div className="flex flex-col justify-center w-full">
          <ul className="text-2xl mt-2 space-y-2">
            <li>✓ Gerenciamento de tarefas básico</li>
            <li>✓ Até 5 projetos</li>
            </ul>
          </div>  
        </div>

        {/* PLUS MENSAL */}
        <div className="bg-white text-green-900 p-8 rounded-3xl shadow flex flex-col items-center text-center h-[480px]">
          <h4 className="text-2xl font-bold mb-3">PLUS MENSAL</h4>
          <p className="text-4xl font-extrabold mb-1">R$ 3,90 <span className="text-lg font-normal">mês</span></p>
          <p className="text-2xl mt-2 mb-2">Cobrança mensal</p>
          <div className="flex-1 flex flex-col justify-center w-full">
            <ul className="text-2xl mt-4 space-y-2">
              <li>✓ Gerenciamento avançado de tarefas</li>
              <li>✓ Projetos ilimitados</li>
            </ul>
          </div>
          <button
            className="bg-green-700 text-white mt-8 px-6 py-3 rounded-lg hover:bg-green-900 w-full text-lg font-bold"
            onClick={() => navigate("/pagamento/mensal")}
          >
            Escolher Plano
          </button>
        </div>

        {/* PLUS ANUAL */}
        <div className="bg-white text-green-900 p-8 rounded-3xl shadow flex flex-col items-center text-center h-[480px]">
          <h4 className="text-2xl font-bold mb-3">PLUS ANUAL</h4>
          <p className="text-4xl font-extrabold mb-1">R$ 39,90 <span className="text-lg font-normal">ano</span></p>
          <p className="text-2xl mt-2 mb-2">Cobrança anual</p>
          <div className="flex-1 flex flex-col justify-center w-full">
            <ul className="text-2xl mt-4 space-y-2">
              <li>✓ Gerenciamento avançado de tarefas</li>
              <li>✓ Projetos ilimitados</li>
              <li>✓ Desconto equivalente a dois meses gratuitos</li>
            </ul>
          </div>
          <button
            className="bg-green-700 text-white mt-8 px-6 py-3 rounded-lg hover:bg-green-900 w-full text-lg font-bold"
            onClick={() => navigate("/pagamento/anual")}
          >
            Escolher Plano
          </button>
        </div>
      </div>
    </section>
  );
}

export default Planos;