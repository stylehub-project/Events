import React from 'react';
import { Header } from './components/Header';
import { CinematicPlayer } from './components/CinematicPlayer';

const App: React.FC = () => {
  return (
    <div className="h-[100dvh] w-full text-gray-200 font-sans selection:bg-cine-gold selection:text-black overflow-hidden">
      <Header />
      <main className="h-full w-full">
        <CinematicPlayer />
      </main>
    </div>
  );
};

export default App;