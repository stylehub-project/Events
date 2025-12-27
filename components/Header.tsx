import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none mix-blend-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 pointer-events-auto">
          {/* Tech Logo */}
          <div className="w-8 h-8 md:w-10 md:h-10 bg-cine-electric/10 border border-cine-electric rounded-sm flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-cine-electric/20 animate-pulse"></div>
             <span className="text-cine-electric font-black text-xs md:text-sm font-mono relative z-10">N</span>
             {/* Corner Accents */}
             <div className="absolute top-0 left-0 w-1 h-1 bg-cine-electric"></div>
             <div className="absolute bottom-0 right-0 w-1 h-1 bg-cine-electric"></div>
          </div>
          <div>
            <h1 className="text-sm md:text-base font-sans font-bold text-white tracking-wider uppercase">
              NEXUS <span className="text-cine-electric">NEWS</span>
            </h1>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cine-gold animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-mono tracking-widest uppercase">Global Launch</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest">v2.0.4 - BETA</span>
            <div className="h-4 w-[1px] bg-gray-700"></div>
            <span className="text-[10px] font-mono text-cine-electric tracking-[0.2em] uppercase opacity-70 border border-cine-electric/30 px-3 py-1 rounded-full bg-cine-electric/5">
                LIVE FEED
            </span>
        </div>
      </div>
    </header>
  );
};