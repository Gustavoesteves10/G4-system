import { Home, BarChart2, Users, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-white p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <NavItem icon={<Home size={20} />} label="Início" />
        <NavItem icon={<BarChart2 size={20} />} label="Relatórios" />
        <NavItem icon={<Users size={20} />} label="Usuários" />
        <NavItem icon={<Settings size={20} />} label="Configurações" />
      </nav>
    </aside>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 hover:bg-red-700 p-2 rounded cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}