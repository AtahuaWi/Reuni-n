import React from 'react';
import { TabView } from '../types';
import { LayoutDashboard, FileText, GraduationCap, MessageSquareText } from 'lucide-react';

interface Props {
  currentTab: TabView;
  setTab: (tab: TabView) => void;
}

const Sidebar: React.FC<Props> = ({ currentTab, setTab }) => {
  const navItems = [
    { id: TabView.DASHBOARD, label: 'Resumen', icon: LayoutDashboard },
    { id: TabView.DOCUMENTS, label: 'Trámites', icon: FileText },
    { id: TabView.THESIS, label: 'Ruta de Tesis', icon: GraduationCap },
    { id: TabView.FAQ_CHAT, label: 'Asistente IA', icon: MessageSquareText },
  ];

  return (
    <div className="w-full md:w-64 bg-slate-900 text-white flex flex-col h-full md:min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-wider">UNI<span className="text-blue-400">GRAD</span></h1>
        <p className="text-xs text-slate-400 mt-1">Portal Maestría TD</p>
      </div>
      
      <nav className="flex-1 px-4 pb-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 bg-slate-800 m-4 rounded-lg">
        <p className="text-xs text-slate-400 text-center">
          Basado en la reunión del 2024
        </p>
      </div>
    </div>
  );
};

export default Sidebar;