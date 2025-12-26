import React from 'react';
import { AspectRatio } from '../types';

interface CinematicDisplayProps {
  aspectRatio: AspectRatio;
  animationStyle: string;
  overlayText?: string;
  subText?: string;
  isPlaying: boolean;
}

export const CinematicDisplay: React.FC<CinematicDisplayProps> = ({
  aspectRatio,
  animationStyle,
  overlayText,
  subText,
  isPlaying
}) => {
  // Container aspect ratio
  const aspectClass = aspectRatio === '16:9' ? 'aspect-video w-full' : 'aspect-[9/16] h-[500px] mx-auto';
  
  // Dynamic Backgrounds based on style
  const getBackground = () => {
    switch(animationStyle) {
      case 'glitch':
        return 'bg-gradient-to-br from-cine-900 via-gray-900 to-black';
      case 'energetic':
        return 'bg-gradient-to-t from-cine-900 via-cine-800 to-cine-700';
      case 'particle':
        return 'bg-gradient-to-b from-cine-900 to-black';
      default: // cinematic/elegant
        return 'bg-gradient-to-br from-cine-900 via-cine-850 to-cine-900';
    }
  };

  return (
    <div className={`${aspectClass} ${getBackground()} relative overflow-hidden rounded-lg shadow-2xl border border-cine-gold/20 group`}>
      
      {/* 1. Volumetric Atmosphere (Global) */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 mix-blend-screen ${isPlaying ? 'animate-volumetric' : ''}`}>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cine-gold/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-cine-gold/5 to-transparent"></div>
      </div>

      {/* 2. Dust Motes / Particles */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover mix-blend-overlay"></div>

      {/* 3. Spotlights / Lens Flares */}
      <div className={`absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-cine-gold/10 to-transparent transform -skew-x-12 blur-3xl ${isPlaying ? 'animate-pulse-slow' : ''}`}></div>

      {/* 4. Content Container */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 ${isPlaying ? 'animate-slow-zoom' : ''}`}>
        
        {/* Subtext (Top or Pre-header) */}
        {subText && animationStyle === 'glitch' && (
           <p className={`text-cine-goldLight tracking-[0.3em] text-sm font-bold mb-4 uppercase ${isPlaying ? 'animate-glitch' : ''}`}>
             {subText}
           </p>
        )}

        {/* Main Text */}
        {overlayText && (
          <div className="relative">
             <h2 className={`
                font-serif font-black leading-tight whitespace-pre-line
                ${aspectRatio === '16:9' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'}
                ${animationStyle === 'glitch' ? 'text-white drop-shadow-[2px_2px_0px_rgba(255,0,0,0.5)]' : 'metallic-text'}
                ${isPlaying ? 'animate-fade-in-up' : ''}
             `}>
               {overlayText}
             </h2>
             
             {/* Glow Effect Duplicate for 'Cinematic' style */}
             {animationStyle === 'cinematic' && (
                <h2 className={`
                  absolute inset-0 font-serif font-black leading-tight whitespace-pre-line blur-lg opacity-50 text-cine-gold
                  ${aspectRatio === '16:9' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'}
                  ${isPlaying ? 'animate-pulse' : ''}
                `}>
                  {overlayText}
                </h2>
             )}
          </div>
        )}

        {/* Subtext (Bottom) */}
        {subText && animationStyle !== 'glitch' && (
          <div className={`mt-6 overflow-hidden`}>
            <p className={`
              text-cine-goldLight/80 tracking-[0.4em] text-xs md:text-sm font-tech uppercase border-t border-cine-gold/30 pt-4
              ${isPlaying ? 'animate-fade-in-up' : ''}
            `} style={{ animationDelay: '0.5s' }}>
              {subText}
            </p>
          </div>
        )}

      </div>
      
      {/* 5. Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,15,28,0.8)_100%)] pointer-events-none"></div>
      
      {/* 6. Letterbox Bars (Cinematic aspect ratio simulation within container) */}
      <div className="absolute top-0 left-0 right-0 h-[10%] bg-black z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-black z-20"></div>

    </div>
  );
};