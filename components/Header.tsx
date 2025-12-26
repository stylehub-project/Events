import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 pointer-events-none mix-blend-difference">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 pointer-events-auto">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-cine-gold to-yellow-200 flex items-center justify-center shadow-lg shadow-cine-gold/20">
             <span className="text-cine-900 font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-sm font-serif font-bold text-white tracking-widest uppercase opacity-80">
              Sunrise <span className="text-cine-gold">Studios</span>
            </h1>
          </div>
        </div>
        
        <div className="hidden md:block">
            <span className="text-[10px] font-mono text-cine-electric tracking-[0.3em] uppercase opacity-70 border border-cine-electric/30 px-2 py-1 rounded">
                Cinematic Preview
            </span>
        </div>
      </div>
    </header>
  );
};