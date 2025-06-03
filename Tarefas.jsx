import React, { useState, useEffect } from "react";

function isThisWeek(dateStr) {
  if (!dateStr) return false;
  const now = new Date();
  const date = new Date(dateStr);
  const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
  const lastDay = new Date(now.setDate(now.getDate() - now.getDay() + 6));
  return date >= firstDay && date <= lastDay;
}

function isNextMonth(dateStr) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  const now = new Date();
  const nextMonth = now.getMonth() === 11 ? 0 : now.getMonth() + 1;
  const year = nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
  return date.getMonth() === nextMonth && date.getFullYear() === year;
}

export default function Tarefas({ usuarioLogado }) {
  const [tarefas, setTarefas] = useState(() => {
    if (usuarioLogado && usuarioLogado.email) {
      const salvas = localStorage.getItem(`tarefas_${usuarioLogado.email}`);
      return salvas ? JSON.parse(salvas) : [];
    }
    return [];
  });

  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [detalhes, setDetalhes] = useState("");
  const [nota, setNota] = useState("");
  const [data, setData] = useState("");
  const [filtro, setFiltro] = useState("todas");

  
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.email) {
      localStorage.setItem(`tarefas_${usuarioLogado.email}`, JSON.stringify(tarefas));
    }
  }, [tarefas, usuarioLogado]);

  
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.email) {
      const salvas = localStorage.getItem(`tarefas_${usuarioLogado.email}`);
      setTarefas(salvas ? JSON.parse(salvas) : []);
    } else {
      setTarefas([]);
    }
  }, [usuarioLogado]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (novaTarefa.trim() === "") return;
    setTarefas(prev => [
      ...prev,
      { nome: novaTarefa, detalhes: "", nota: "", data: "" }
    ]);
    setNovaTarefa("");
  };

  const abrirDetalhes = (tarefa, idx) => {
    setTarefaSelecionada(idx);
    setDetalhes(tarefa.detalhes || "");
    setNota(tarefa.nota || "");
    setData(tarefa.data || "");
  };

  const salvarDetalhes = () => {
    const novasTarefas = [...tarefas];
    novasTarefas[tarefaSelecionada] = {
      ...novasTarefas[tarefaSelecionada],
      detalhes,
      nota,
      data
    };
    setTarefas(novasTarefas);
    setTarefaSelecionada(null);
  };

  const excluirTarefa = (idx) => {
    setTarefas(tarefas.filter((_, i) => i !== idx));
    if (tarefaSelecionada === idx) setTarefaSelecionada(null);
  };

  let tarefasFiltradas = tarefas;
  if (filtro === "semana") {
    tarefasFiltradas = tarefas.filter(t => isThisWeek(t.data));
  } else if (filtro === "proximoMes") {
    tarefasFiltradas = tarefas.filter(t => isNextMonth(t.data));
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded shadow text-green-900">
      <h2 className="text-2xl font-bold mb-4">Minhas Tarefas</h2>
      {/* Filtros */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${filtro === "todas" ? "bg-green-700 text-white" : "bg-gray-200"}`}
          onClick={() => setFiltro("todas")}
        >
          Todas
        </button>
        <button
          className={`px-3 py-1 rounded ${filtro === "semana" ? "bg-green-700 text-white" : "bg-gray-200"}`}
          onClick={() => setFiltro("semana")}
        >
          Esta semana
        </button>
        <button
          className={`px-3 py-1 rounded ${filtro === "proximoMes" ? "bg-green-700 text-white" : "bg-gray-200"}`}
          onClick={() => setFiltro("proximoMes")}
        >
          Próximo mês
        </button>
      </div>
      
      {usuarioLogado ? (
        <form onSubmit={adicionarTarefa} className="flex mb-4">
          <input
            type="text"
            value={novaTarefa}
            onChange={e => setNovaTarefa(e.target.value)}
            placeholder="Nova tarefa"
            className="flex-1 p-2 border rounded mr-2"
          />
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
            Adicionar
          </button>
        </form>
      ) : (
        <div className="mb-4 text-red-600">Faça login para criar tarefas.</div>
      )}
      <ul>
        {tarefasFiltradas.map((tarefa, idx) => (
          <li key={idx} className="mb-2 border-b pb-1 flex items-center justify-between">
            <div>
              <button
                className="text-green-700 underline"
                onClick={() => abrirDetalhes(tarefa, idx)}
                type="button"
              >
                {tarefa.nome}
                {tarefa.data && (
                  <span className="ml-2 text-xs text-gray-500">
                    ({tarefa.data})
                  </span>
                )}
              </button>
            </div>
            <button
              className="ml-2 text-red-600 hover:underline"
              onClick={() => excluirTarefa(idx)}
              type="button">
              Excluir
            </button>
          </li>
        ))}
      </ul>
     
      {tarefaSelecionada !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-green-900 max-w-sm w-full">
            <h3 className="text-xl font-bold mb-2">{tarefas[tarefaSelecionada].nome}</h3>
            <label className="block mb-2">
              Definir data:
              <input
                type="date"
                value={data}
                onChange={e => setData(e.target.value)}
                className="block border rounded p-1 mt-1"
              />
            </label>
            <label className="block mb-2">
              Adicionar detalhes:
              <textarea
                value={detalhes}
                onChange={e => setDetalhes(e.target.value)}
                className="block w-full border rounded p-1 mt-1"
                placeholder="Adicione detalhes..."
              />
            </label>
            <label className="block mb-2">
              Adicionar uma nota:
              <input
                type="text"
                value={nota}
                onChange={e => setNota(e.target.value)}
                className="block w-full border rounded p-1 mt-1"
                placeholder="Adicione uma nota..."
              />
            </label>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-green-700 text-white px-4 py-2 rounded"
                onClick={salvarDetalhes}
              >
                Salvar
              </button>
              <button
                className="bg-gray-300 text-green-900 px-4 py-2 rounded"
                onClick={() => setTarefaSelecionada(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}