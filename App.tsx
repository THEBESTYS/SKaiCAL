
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import HomeView from './components/HomeView.tsx';
import SLotteView from './components/SLotteView.tsx';
import LSphereView from './components/LSphereView.tsx';
import Footer from './components/Footer.tsx';
import { ViewType } from './types.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case ViewType.S_LOTTE:
        return <SLotteView />;
      case ViewType.L_SPHERE:
        return <LSphereView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-100 selection:text-rose-900">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
