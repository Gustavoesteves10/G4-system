function Contato() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <p className="text-lg mb-2">
        Precisa de ajuda ou quer falar conosco? Entre em contato:
      </p>
      <ul>
        <li>Email: <a href="mailto:suporte@g4tasks.com" className="underline">suporte@g4tasks.com</a></li>
        <li>WhatsApp: <a href="https://wa.me/5599999999999" className="underline" target="_blank" rel="noopener noreferrer">(99) 99999-9999</a></li>
      </ul>
    </div>
  );
}
export default Contato;