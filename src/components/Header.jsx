
import G4Tasks from '../assets/navegação/G4Tasks.svg';
import Items from '../assets/navegação/Items.svg';
import Fundo from '../assets/imagem/Fundo.png';

export default function Header() {
    return (
<div className="relative w-full min-h-screen">
{/* Imagem de fundo */}
<img
  src={Fundo}
  alt="Fundo"
  className="absolute top-0 left-0 w-full min-h-screen object-cover z-[-1]"
/>

{/* Header com navegação */}
<header className="relative flex justify-between items-center p-4 bg-black text-white">
  {/* Logo G4 Tasks (menor, canto superior esquerdo) */}
  <img src={G4Tasks} alt="icone G4" className="h-12" />

  {/* Menu de navegação */}
  <nav className="flex items-center space-x-6">
    <a href="#" className="text-white hover:text-gray-300">
      Planos
    </a>
    <div className="flex items-center space-x-2">
      <a href="#" className="text-white hover:text-gray-300">
        Projetos
      </a>
      {/* Ícone Items ao lado de "Projetos" */}
      <img src={Items} alt="ícone projetos" className="h-6 w-6" />
    </div>
    <a href="#" className="text-white hover:text-gray-300">
      Login
    </a>
    <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
      Comece de graça
    </button>
  </nav>
</header>

{/* Texto "Organize seus projetos com facilidade" e subtítulo */}
<div className="relative flex flex-col items-start justify-center h-[calc(100vh-64px)] text-black z-10 max-w-2xl mx-auto">
  <h1 className="text-5xl font-bold mb-4 leading-tight">
    Organize seus projetos com facilidade
  </h1>
  <p className="text-lg">
    Nosso sistema permite que você consiga criar seus projetos e organizar de uma maneira fácil e prática
  </p>
</div>
</div>
);
}