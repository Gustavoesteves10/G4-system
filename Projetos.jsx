import React, { useState, useEffect } from "react";

export default function Projetos({ usuarioLogado }) {
  const [projetos, setProjetos] = useState(() => {
    if (usuarioLogado && usuarioLogado.email) {
      const salvos = localStorage.getItem(`projetos_${usuarioLogado.email}`);
      return salvos ? JSON.parse(salvos) : [];
    }
    return [];
  });

  const [novoProjeto, setNovoProjeto] = useState({
    nome: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    status: "Ativo",
  });
  const [editandoIdx, setEditandoIdx] = useState(null);
  const [projetoEditado, setProjetoEditado] = useState({
    nome: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    status: "Ativo",
  });

  
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.email) {
      localStorage.setItem(`projetos_${usuarioLogado.email}`, JSON.stringify(projetos));
    }
  }, [projetos, usuarioLogado]);

  
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.email) {
      const salvos = localStorage.getItem(`projetos_${usuarioLogado.email}`);
      setProjetos(salvos ? JSON.parse(salvos) : []);
    } else {
      setProjetos([]);
    }
  }, [usuarioLogado]);

  const handleAdicionarProjeto = (e) => {
    e.preventDefault();
    if (novoProjeto.nome.trim() === "") return;
    setProjetos(prev => [...prev, { ...novoProjeto }]);
    setNovoProjeto({
      nome: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
      status: "Ativo",
    });
  };

  const iniciarEdicao = (idx, projeto) => {
    setEditandoIdx(idx);
    setProjetoEditado({ ...projeto });
  };

  const salvarEdicao = (idx) => {
    const novosProjetos = [...projetos];
    novosProjetos[idx] = { ...projetoEditado };
    setProjetos(novosProjetos);
    setEditandoIdx(null);
    setProjetoEditado({
      nome: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
      status: "Ativo",
    });
  };

  const cancelarEdicao = () => {
    setEditandoIdx(null);
    setProjetoEditado({
      nome: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
      status: "Ativo",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded shadow text-green-900">
      <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
      {!usuarioLogado ? (
        <div className="mb-4 text-red-600">
          Você não possui projetos. Faça login para visualizar seus projetos.
        </div>
      ) : (
        <div>
          <form onSubmit={handleAdicionarProjeto} className="mb-6 grid gap-2">
            <input
              type="text"
              placeholder="Nome do projeto"
              value={novoProjeto.nome}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, nome: e.target.value })
              }
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              value={novoProjeto.descricao}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, descricao: e.target.value })
              }
              className="border rounded p-2"
            />
            <input
              type="date"
              placeholder="Data de início"
              value={novoProjeto.dataInicio}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, dataInicio: e.target.value })
              }
              className="border rounded p-2"
            />
            <input
              type="date"
              placeholder="Data de fim"
              value={novoProjeto.dataFim}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, dataFim: e.target.value })
              }
              className="border rounded p-2"
            />
            <select
              value={novoProjeto.status}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, status: e.target.value })
              }
              className="border rounded p-2"
            >
              <option value="Ativo">Ativo</option>
              <option value="Concluído">Concluído</option>
              <option value="Pausado">Pausado</option>
            </select>
            <button
              type="submit"
              className="bg-green-900 text-white px-4 py-2 rounded font-semibold"
            >
              Adicionar
            </button>
          </form>
          {projetos.length === 0 ? (
            <div className="text-gray-500">Nenhum projeto cadastrado.</div>
          ) : (
            <ul className="list-disc pl-5">
              {projetos.map((proj, idx) => (
                <li key={idx} className="mb-4 flex flex-col gap-1">
                  {editandoIdx === idx ? (
                    <div className="flex flex-col gap-2 bg-gray-100 p-2 rounded">
                      <input
                        type="text"
                        value={projetoEditado.nome}
                        onChange={(e) =>
                          setProjetoEditado({ ...projetoEditado, nome: e.target.value })
                        }
                        className="border rounded p-1"
                        placeholder="Nome do projeto"
                        required
                      />
                      <input
                        type="text"
                        value={projetoEditado.descricao}
                        onChange={(e) =>
                          setProjetoEditado({ ...projetoEditado, descricao: e.target.value })
                        }
                        className="border rounded p-1"
                        placeholder="Descrição"
                      />
                      <input
                        type="date"
                        value={projetoEditado.dataInicio}
                        onChange={(e) =>
                          setProjetoEditado({ ...projetoEditado, dataInicio: e.target.value })
                        }
                        className="border rounded p-1"
                        placeholder="Data de início"
                      />
                      <input
                        type="date"
                        value={projetoEditado.dataFim}
                        onChange={(e) =>
                          setProjetoEditado({ ...projetoEditado, dataFim: e.target.value })
                        }
                        className="border rounded p-1"
                        placeholder="Data de fim"
                      />
                      <select
                        value={projetoEditado.status}
                        onChange={(e) =>
                          setProjetoEditado({ ...projetoEditado, status: e.target.value })
                        }
                        className="border rounded p-1"
                      >
                        <option value="Ativo">Ativo</option>
                        <option value="Concluído">Concluído</option>
                        <option value="Pausado">Pausado</option>
                      </select>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => salvarEdicao(idx)}
                          className="bg-green-700 text-white px-2 py-1 rounded text-sm"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={cancelarEdicao}
                          className="bg-gray-300 text-black px-2 py-1 rounded text-sm"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded">
                      <span className="font-semibold">{proj.nome}</span>
                      {proj.descricao && <span>Descrição: {proj.descricao}</span>}
                      {proj.dataInicio && <span>Início: {proj.dataInicio}</span>}
                      {proj.dataFim && <span>Fim: {proj.dataFim}</span>}
                      <span>Status: {proj.status}</span>
                      <button
                        onClick={() => iniciarEdicao(idx, proj)}
                        className="bg-yellow-400 text-black px-2 py-1 rounded text-sm mt-2 w-max"
                      >
                        Editar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}