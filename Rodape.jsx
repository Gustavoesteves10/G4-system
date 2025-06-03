function Rodape() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-lg">G4 Tasks</span>
          <p className="text-sm mt-1">Organize suas tarefas e projetos com facilidade.</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/sobre" className="hover:underline">Sobre</a>
          <a href="/contato" className="hover:underline">Contato</a>
        </div>
        <div className="text-sm mt-4 md:mt-0 text-center md:text-right">
          © {new Date().getFullYear()} G4 Tasks. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Rodape;