import React, { useState, useEffect, useCallback } from 'react';
import { LivingBackground } from './LivingBackground';

// --- SUB-COMPONENTS FOR SLIDES ---

const BrandedPlaceholder: React.FC<{ type: string; label: string; animateBorder?: boolean }> = ({ type, label, animateBorder }) => (
  <div className={`relative w-full max-w-5xl aspect-video bg-black/40 backdrop-blur-sm border border-cine-gold/20 flex flex-col items-center justify-center overflow-hidden rounded-sm group
    ${animateBorder ? 'animate-pulse-glow' : ''}
  `}>
    {/* Animated Border Lines */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cine-gold to-transparent animate-[slideInRight_3s_linear_infinite]"></div>
    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-cine-gold to-transparent animate-[slideInLeft_3s_linear_infinite]"></div>
    
    {/* Watermark */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
       <h1 className="text-6xl md:text-9xl font-serif font-black text-white text-center leading-none">
         SUNRISE<br/>SCHOOL
       </h1>
    </div>

    {/* Content */}
    <div className="z-10 text-center p-8">
       <div className={`w-16 h-16 mx-auto mb-6 rounded-full border border-cine-gold/40 flex items-center justify-center ${type === 'video' ? 'bg-cine-electric/10' : 'bg-cine-gold/10'}`}>
          {type === 'video' ? (
             <svg className="w-6 h-6 text-cine-electric" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          ) : (
             <svg className="w-6 h-6 text-cine-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          )}
       </div>
       <h3 className="text-2xl font-serif text-white mb-2">{label}</h3>
       <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">Admin Content Area</p>
    </div>
  </div>
);

// --- SLIDE DEFINITIONS ---

const Slide1_Hook = () => (
  <div className="h-full w-full flex items-center justify-center relative">
    <div className="text-center z-10">
      <h2 className="text-cine-gold tracking-[0.6em] text-sm md:text-base font-sans uppercase mb-8 animate-[fadeInBlur_1s_ease-out_forwards]">Presenting</h2>
      <h1 className="text-7xl md:text-9xl font-serif font-black text-white text-glow animate-[zoomIn_1.5s_cubic-bezier(0.25,1,0.5,1)_forwards]">
        THIS<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cine-electric to-white">WINTER...</span>
      </h1>
      <div className="mt-12 h-[1px] w-24 bg-cine-electric mx-auto animate-[slideInRight_1s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}></div>
    </div>
  </div>
);

const Slide2_Identity = () => (
  <div className="h-full w-full flex items-center justify-center relative">
    <div className="absolute inset-4 border border-cine-gold/30 rounded-lg animate-border-trace"></div>
    <div className="text-center z-10 px-6">
      <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight">
        <div className="overflow-hidden"><span className="block animate-text-reveal" style={{ animationDelay: '0.2s' }}>SUNRISE</span></div>
        <div className="overflow-hidden"><span className="block text-cine-gold animate-text-reveal" style={{ animationDelay: '0.4s' }}>INTERNATIONAL</span></div>
        <div className="overflow-hidden"><span className="block animate-text-reveal" style={{ animationDelay: '0.6s' }}>PUBLIC SCHOOL</span></div>
      </h1>
      <p className="mt-8 text-gray-400 tracking-[0.4em] uppercase text-sm md:text-lg animate-[fadeInBlur_1s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
        Nechhwa • Sikar
      </p>
    </div>
  </div>
);

const Slide3_Announcement = () => (
  <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
     <div className="absolute inset-0 bg-cine-electric/5 mix-blend-overlay animate-pulse"></div>
     <div className="text-center relative z-10">
        <p className="text-cine-electric font-mono tracking-widest text-sm mb-4 animate-[slideInLeft_0.8s_ease-out_forwards]">PRESENTS</p>
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter drop-shadow-[4px_4px_0_rgba(0,243,255,0.3)] animate-[zoomIn_0.8s_backwards]" style={{ animationDelay: '0.3s' }}>
           WINTER<br/>VACATION
        </h1>
        <h2 className="text-3xl md:text-6xl font-serif text-cine-gold mt-2 animate-[slideInRight_0.8s_ease-out_forwards]" style={{ animationDelay: '0.6s' }}>
           DANCE EVENT
        </h2>
     </div>
  </div>
);

const Slide4_Image = () => (
  <div className="h-full w-full flex items-center justify-center p-8">
      <BrandedPlaceholder type="image" label="Event Poster / Image" animateBorder={false} />
  </div>
);

const Slide5_Video = () => (
  <div className="h-full w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl aspect-video">
         <div className="absolute -inset-4 bg-cine-electric/10 blur-xl rounded-full opacity-50 animate-pulse"></div>
         <BrandedPlaceholder type="video" label="Main Dance Performance" animateBorder={true} />
      </div>
  </div>
);

const Slide6_Message = () => (
  <div className="h-full w-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6 animate-[fadeInBlur_1s_ease-out_forwards]">
        A CELEBRATION OF TALENT
      </h2>
      <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-cine-gold to-transparent my-4 animate-[slideInRight_1.5s_ease-out_forwards]"></div>
      <h3 className="text-xl md:text-3xl font-sans text-cine-gold tracking-[0.3em] uppercase animate-[textReveal_1s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}>
        Joy • Culture • Confidence
      </h3>
  </div>
);

const Slide7_Split = () => (
  <div className="h-full w-full flex flex-col md:flex-row p-4 gap-4">
      <div className="flex-1 flex items-center justify-center bg-cine-800/20 border border-cine-gold/10 rounded animate-[slideInLeft_1s_ease-out_forwards]">
         <div className="text-center">
            <h3 className="text-cine-gold font-serif text-xl mb-2">Behind the Scenes</h3>
            <p className="text-xs text-gray-500 uppercase">Image Placeholder</p>
         </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-black/40 border border-cine-electric/10 rounded animate-[slideInRight_1s_ease-out_forwards]">
         <div className="text-center">
            <h3 className="text-white font-serif text-xl mb-2">Audience Moments</h3>
            <p className="text-xs text-gray-500 uppercase">Video Placeholder</p>
         </div>
      </div>
  </div>
);

const Slide8_Finale = () => (
  <div className="h-full w-full flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] bg-cine-gold/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>
      <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white animate-[zoomIn_2s_ease-out_forwards]">
             SUNRISE INTERNATIONAL<br/>PUBLIC SCHOOL
          </h1>
          <p className="text-2xl md:text-4xl text-cine-gold italic font-serif mt-8 animate-[fadeInBlur_2s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
             Where Talent Shines ✨
          </p>
      </div>
  </div>
);

const SLIDES = [
  Slide1_Hook,
  Slide2_Identity,
  Slide3_Announcement,
  Slide4_Image,
  Slide5_Video,
  Slide6_Message,
  Slide7_Split,
  Slide8_Finale
];

// --- MAIN ENGINE ---

export const CinematicPlayer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // We keep track of the "previous" slide to animate it out
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (isTransitioning || index === SLIDES.length - 1) return;
    setDirection('next');
    setExitingIndex(index);
    setIndex(prev => prev + 1);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning || index === 0) return;
    setDirection('prev');
    setExitingIndex(index);
    setIndex(prev => prev - 1);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  // Handle Animation End
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setExitingIndex(null);
      }, 1200); // Match longest CSS transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Keyboard Controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev]);

  // Get transition class based on slide index for variety
  const getTransitionClass = (idx: number, state: 'enter' | 'exit') => {
    // Varied transitions per slide pair
    const type = idx % 2 === 0 ? 'slide' : (idx % 3 === 0 ? 'zoom' : 'fade');
    return `${type}-${state}-${direction}`;
  };

  const CurrentSlide = SLIDES[index];
  const ExitingSlide = exitingIndex !== null ? SLIDES[exitingIndex] : null;

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden touch-none select-none">
      <LivingBackground />

      {/* Main Stage */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Exiting Slide (Underneath or fading out) */}
        {ExitingSlide && (
          <div className={`absolute inset-0 w-full h-full z-10 ${getTransitionClass(exitingIndex!, 'exit')}`}>
             <ExitingSlide />
          </div>
        )}

        {/* Active Slide */}
        <div 
          key={index} 
          className={`absolute inset-0 w-full h-full z-20 ${isTransitioning ? getTransitionClass(index, 'enter') : ''}`}
        >
           <CurrentSlide />
        </div>

      </div>

      {/* Cinematic Controls (Floating) */}
      <div className="fixed bottom-8 right-8 z-50 flex space-x-4">
          <button 
             onClick={handlePrev}
             disabled={index === 0}
             className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover:border-cine-gold hover:bg-cine-gold/10 ${index === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80'}`}
          >
             <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
             onClick={handleNext}
             disabled={index === SLIDES.length - 1}
             className={`w-12 h-12 rounded-full border border-cine-gold flex items-center justify-center transition-all duration-300 hover:bg-cine-gold hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] ${index === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 text-cine-gold'}`}
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
          </button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center space-x-2">
         {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 ${i === index ? 'w-8 bg-cine-gold shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'w-2 bg-gray-700'}`}
            ></div>
         ))}
      </div>
    </div>
  );
};