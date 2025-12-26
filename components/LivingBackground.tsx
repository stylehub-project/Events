import React from 'react';

export const LivingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-cine-900">
      {/* 1. Deep Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cine-900 via-cine-800 to-black"></div>

      {/* 2. Moving Light Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cine-gold/5 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cine-electric/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '5s' }}></div>

      {/* 3. Rotating Gradient Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] opacity-20 animate-drift">
         <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_140deg,rgba(251,191,36,0.1)_180deg,transparent_220deg,transparent_360deg)]"></div>
      </div>

      {/* 4. Film Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-grain mix-blend-overlay"></div>

      {/* 5. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
};