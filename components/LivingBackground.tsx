import React from 'react';

export const LivingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-cine-900">
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cine-900 via-[#050A15] to-black"></div>

      {/* 2. Moving Grid Floor */}
      <div className="absolute inset-0 perspective-[1000px]">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 transform-gpu rotate-x-60 scale-150 animate-grid-move"></div>
      </div>

      {/* 3. World Map Outlines (Abstract CSS Representation or SVG) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vw] opacity-10 mix-blend-screen animate-drift">
         <svg viewBox="0 0 1000 500" className="w-full h-full fill-current text-cine-electric">
            {/* Extremely simplified world map blobs for effect */}
            <path d="M150,150 Q200,100 250,150 T350,150 T450,200 T350,300 T150,250 Z" /> {/* Americas */}
            <path d="M500,100 Q600,80 700,100 T800,200 T700,350 T600,300 T550,200 Z" /> {/* Eurasia/Africa */}
            <path d="M850,250 Q900,250 950,300 T850,350 Z" /> {/* Australia */}
         </svg>
      </div>

      {/* 4. Data Lines / Tickers */}
      <div className="absolute top-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-cine-electric/20 to-transparent"></div>
      <div className="absolute bottom-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-cine-electric/20 to-transparent"></div>
      
      {/* 5. Random Data Pulses */}
      <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-white box-shadow-[0_0_10px_white] animate-pulse-fast"></div>
      <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-cine-gold box-shadow-[0_0_10px_red] animate-pulse-glow"></div>

      {/* 6. Vignette & Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-grain mix-blend-overlay"></div>
    </div>
  );
};