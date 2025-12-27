import React from 'react';
import { Header } from './components/Header';
import { CinematicPlayer } from './components/CinematicPlayer';
import { FeatureTrailer } from './components/FeatureTrailer';

const App: React.FC = () => {
  return (
    <div className="w-full text-gray-200 font-sans selection:bg-cine-gold selection:text-black">
      <Header />
      <main className="w-full">
        {/* Section 1: The Cinematic Launch Trailer */}
        <section className="h-[100dvh] w-full relative">
           <CinematicPlayer />
        </section>

        {/* Section 2: The Feature Tour Trailer */}
        <section className="h-[100dvh] w-full relative border-t-2 border-cine-electric/20">
           <FeatureTrailer />
        </section>
      </main>
    </div>
  );
};

export default App;