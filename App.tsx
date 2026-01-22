
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import SLotteView from './components/SLotteView';
import LSphereView from './components/LSphereView';
import Footer from './components/Footer';
import { ViewType } from './types';

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
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow pt-20">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
