import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DocumentTracker from './components/DocumentTracker';
import ThesisRoadmap from './components/ThesisRoadmap';
import MeetingNotes from './components/MeetingNotes';
import GeminiAssistant from './components/GeminiAssistant';
import { TabView } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabView>(TabView.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // In a real app, use environment variables, but here we allow user input for demo
  const [apiKey, setApiKey] = useState<string>(''); 

  const renderContent = () => {
    switch (currentTab) {
      case TabView.DASHBOARD:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header>
                <h2 className="text-3xl font-bold text-slate-800">Panel del Estudiante</h2>
                <p className="text-slate-600 mt-2">Resumen de la situación académica y administrativa.</p>
            </header>
            <MeetingNotes />
          </div>
        );
      case TabView.DOCUMENTS:
        return (
          <div className="animate-in fade-in duration-500">
            <DocumentTracker />
          </div>
        );
      case TabView.THESIS:
        return (
           <div className="animate-in fade-in duration-500">
            <ThesisRoadmap />
          </div>
        );
      case TabView.FAQ_CHAT:
        return (
           <div className="animate-in fade-in duration-500">
            <GeminiAssistant apiKey={apiKey} setApiKey={setApiKey} />
          </div>
        );
      default:
        return <MeetingNotes />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-20">
        <span className="font-bold">UNIGRAD</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar (Desktop & Mobile) */}
      <div className={`
        fixed inset-0 z-10 md:static md:inset-auto md:block transition-transform duration-300 transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 bg-slate-900 w-64
      `}>
        <Sidebar currentTab={currentTab} setTab={(tab) => {
          setCurrentTab(tab);
          setIsMobileMenuOpen(false);
        }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;