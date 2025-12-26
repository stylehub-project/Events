import React, { useRef, useEffect, useState } from 'react';

// Hook to track if element is in view to trigger animations
const useInView = (options = { threshold: 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false); // Reset animation on scroll away? Optional. Let's reset for replayability.
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView] as const;
};

// --- SLIDE COMPONENTS ---

const Slide1_Hook = () => {
  const [ref, inView] = useInView();
  
  return (
    <div ref={ref} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-cine-900 snap-start">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-cine-gold rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-cine-electric rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Light Rays */}
      <div className={`absolute inset-0 bg-gradient-to-br from-cine-gold/5 via-transparent to-cine-electric/5 transition-opacity duration-[3s] ${inView ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`z-10 text-center transition-all duration-[2s] ${inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <h2 className="text-xl md:text-2xl text-cine-gold tracking-[0.5em] font-sans mb-6 uppercase">Presenting</h2>
        <h1 className={`text-6xl md:text-9xl font-serif text-white font-black tracking-tighter text-glow ${inView ? 'animate-slow-zoom' : ''}`}>
          THIS<br/><span className="text-cine-electric">WINTER...</span>
        </h1>
      </div>

      {/* Pulsing Border */}
      <div className={`absolute inset-4 md:inset-10 border border-cine-gold/20 pointer-events-none transition-all duration-1000 ${inView ? 'opacity-100 scale-100 animate-pulse-glow' : 'opacity-0 scale-95'}`}></div>
    </div>
  );
};

const Slide2_Identity = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center bg-cine-900 snap-start overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cine-800 via-cine-900 to-black opacity-80"></div>
      
      {/* Golden Frame */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
         <div className="w-[90%] h-[80%] border-y-2 border-cine-gold/60 relative">
            <div className={`absolute top-0 left-0 h-full w-[2px] bg-cine-gold/60 transition-all duration-[2s] delay-500 ease-out ${inView ? 'h-full' : 'h-0'}`}></div>
            <div className={`absolute bottom-0 right-0 h-full w-[2px] bg-cine-gold/60 transition-all duration-[2s] delay-500 ease-out ${inView ? 'h-full' : 'h-0'}`}></div>
         </div>
      </div>

      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight">
          <span className={`block transition-all duration-1000 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>SUNRISE</span>
          <span className={`block text-cine-gold transition-all duration-1000 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>INTERNATIONAL</span>
          <span className={`block transition-all duration-1000 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>PUBLIC SCHOOL</span>
        </h1>
        <div className={`w-24 h-1 bg-cine-electric mx-auto my-6 transition-all duration-1000 delay-1000 ${inView ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
        <p className={`text-lg md:text-2xl text-gray-400 font-sans tracking-[0.3em] uppercase transition-all duration-1000 delay-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Nechhwa • Sikar
        </p>
      </div>
    </div>
  );
};

const Slide3_Announcement = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center bg-black snap-start overflow-hidden">
      
      {/* Neon Lines */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cine-electric to-transparent transition-all duration-[1.5s] ${inView ? 'translate-x-0' : '-translate-x-full'}`}></div>
      <div className={`absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-cine-electric to-transparent transition-all duration-[1.5s] ${inView ? 'translate-x-0' : 'translate-x-full'}`}></div>

      <div className="z-10 text-center relative">
        <p className={`text-cine-electric font-mono text-sm tracking-widest mb-4 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>PRESENTS</p>
        
        <div className="relative group">
            <h1 className={`text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase italic tracking-tighter
                ${inView ? 'animate-glitch' : ''}
            `}>
                WINTER<br/>VACATION
            </h1>
            {/* Light Sweep */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full mix-blend-overlay ${inView ? 'animate-sweep' : 'hidden'}`}></div>
        </div>
        
        <h2 className={`text-3xl md:text-6xl font-serif text-cine-gold mt-4 font-bold tracking-widest transition-all duration-1000 delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            DANCE EVENT
        </h2>
      </div>
    </div>
  );
};

const Slide4_ImagePlaceholder = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex items-center justify-center bg-cine-900 snap-start p-8">
      <div className={`
        relative w-full max-w-4xl aspect-[4/3] md:aspect-video 
        bg-cine-800/30 border-2 border-dashed border-cine-gold/30 rounded-lg
        flex flex-col items-center justify-center group hover:border-cine-gold/80 transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}>
          <div className="absolute inset-0 bg-cine-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="p-6 rounded-full bg-cine-900/80 border border-cine-gold/50 mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-cine-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl text-cine-gold font-serif">Event Image / Poster</h3>
          <p className="text-gray-500 text-sm mt-2">Admin Placeholder Area</p>
      </div>
    </div>
  );
};

const Slide5_VideoPlaceholder = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center bg-black snap-start p-4">
      {/* Animated Background Particles (simulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(5)].map((_, i) => (
             <div key={i} className="absolute w-1 h-1 bg-cine-electric/50 rounded-full animate-float" 
             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${5 + i}s`, animationDelay: `${i}s` }}></div>
         ))}
      </div>

      <div className={`
        relative w-full max-w-6xl aspect-video bg-black
        border-y-4 border-cine-electric/20 rounded-xl overflow-hidden
        flex items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.1)]
        transition-all duration-1000
        ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}>
         {/* Pulsing Inner Border */}
         <div className="absolute inset-0 border border-cine-electric/10 animate-pulse-glow"></div>
         
         <div className="text-center z-10">
            <div className="w-20 h-20 mx-auto bg-cine-electric/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-cine-electric/50 mb-4 group cursor-pointer hover:bg-cine-electric/20 transition-colors">
                <svg className="w-8 h-8 text-cine-electric ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 className="text-2xl text-white font-serif tracking-wide">Main Dance Performance</h3>
            <p className="text-cine-electric/60 text-sm mt-2 font-mono uppercase">Video Placeholder</p>
         </div>

         {/* Scan lines */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>
    </div>
  );
};

const Slide6_Message = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center bg-cine-900 snap-start">
        <div className="max-w-4xl text-center px-6">
            <div className="overflow-hidden mb-2">
                <h2 className={`text-3xl md:text-5xl font-serif text-white font-bold transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-full'}`}>
                    A CELEBRATION OF TALENT
                </h2>
            </div>
            <div className={`h-[1px] bg-gradient-to-r from-transparent via-cine-gold to-transparent w-full mb-8 transition-all duration-1000 delay-500 ${inView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
            
            <div className="overflow-hidden">
                <h3 className={`text-xl md:text-3xl font-sans text-cine-gold tracking-[0.5em] transition-transform duration-1000 delay-300 ${inView ? 'translate-y-0' : 'translate-y-full'}`}>
                    JOY • CULTURE • CONFIDENCE
                </h3>
            </div>
        </div>
    </div>
  );
};

const Slide7_Split = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col md:flex-row bg-cine-900 snap-start">
        {/* Left: Behind Scenes */}
        <div className="flex-1 border-r border-cine-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-cine-800/20 flex items-center justify-center">
                <div className={`text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <h3 className="text-xl text-gray-300 font-serif">Behind the Scenes</h3>
                    <p className="text-xs text-gray-600 mt-2 uppercase">Image Placeholder</p>
                </div>
            </div>
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-cine-gold/20 transition-colors duration-500"></div>
        </div>

        {/* Right: Audience */}
        <div className="flex-1 relative group overflow-hidden bg-black">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-center transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <h3 className="text-xl text-gray-300 font-serif">Audience Moments</h3>
                    <p className="text-xs text-gray-600 mt-2 uppercase">Video Placeholder</p>
                </div>
            </div>
             <div className="absolute inset-0 border-4 border-transparent group-hover:border-cine-electric/20 transition-colors duration-500"></div>
        </div>
        
        {/* Divider Graphic */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cine-900 border border-gray-700 rounded-full flex items-center justify-center z-10 md:flex hidden transition-all duration-1000 ${inView ? 'scale-100' : 'scale-0'}`}>
            <span className="text-cine-gold text-xs font-bold">&</span>
        </div>
    </div>
  );
};

const Slide8_Finale = () => {
  const [ref, inView] = useInView();
  
  // Simulated particle effect via CSS
  return (
    <div ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center bg-black snap-start overflow-hidden">
        {/* Particles rising */}
        <div className="absolute inset-0 opacity-50">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-cine-gold rounded-full animate-particle-rise"
                style={{ 
                    left: `${Math.random() * 100}%`, 
                    animationDuration: `${5 + Math.random() * 10}s`,
                    animationDelay: `${Math.random() * 5}s`
                }}></div>
            ))}
        </div>

        <div className="z-10 text-center px-4">
             <h1 className={`text-4xl md:text-6xl font-serif text-white font-bold mb-4 transition-all duration-[2s] ${inView ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
                SUNRISE INTERNATIONAL<br/>PUBLIC SCHOOL
             </h1>
             <p className={`text-xl md:text-2xl text-cine-gold italic font-serif mt-8 transition-all duration-[2s] delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Where Talent Shines ✨
             </p>
        </div>

        <div className={`absolute bottom-10 text-gray-700 text-xs font-mono uppercase tracking-widest transition-opacity duration-[3s] delay-1000 ${inView ? 'opacity-50' : 'opacity-0'}`}>
            Nechhwa • Sikar • Rajasthan
        </div>
    </div>
  );
};

// --- MAIN CONTAINER ---

export const Presentation: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-black text-gray-200">
      <Slide1_Hook />
      <Slide2_Identity />
      <Slide3_Announcement />
      <Slide4_ImagePlaceholder />
      <Slide5_VideoPlaceholder />
      <Slide6_Message />
      <Slide7_Split />
      <Slide8_Finale />
    </div>
  );
};