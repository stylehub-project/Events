import React, { useState, useEffect, useCallback } from 'react';

// --- FEATURE SCENES ---

const Scene1_RealTime = () => (
  <div className="h-full w-full flex flex-col items-center justify-center p-8 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-cine-electric/10 to-transparent opacity-50"></div>
    <h2 className="text-3xl md:text-6xl font-black text-white mb-12 tracking-tighter z-10 text-center uppercase">
        Real-Time<br/><span className="text-cine-electric">Breaking News</span>
    </h2>
    {/* Floating Cards Animation */}
    <div className="relative w-full max-w-lg h-64 z-10">
        {[1, 2, 3].map((i) => (
            <div key={i} className={`
                absolute left-0 right-0 h-20 bg-black/60 backdrop-blur-md border-l-4 border-cine-gold rounded-r-lg p-4 flex items-center space-x-4
                animate-[slideInUp_0.5s_ease-out_forwards] shadow-lg shadow-cine-gold/10
            `} style={{ 
                top: `${(i-1) * 35}%`, 
                animationDelay: `${i * 0.2}s`,
                zIndex: 10 - i,
                transform: `scale(${1 - i * 0.05})`
            }}>
                <div className="w-2 h-2 rounded-full bg-cine-gold animate-pulse"></div>
                <div className="flex-1">
                    <div className="h-2 w-16 bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-800 rounded"></div>
                </div>
                <div className="text-xs font-mono text-cine-gold">LIVE</div>
            </div>
        ))}
    </div>
  </div>
);

const Scene2_AIAnalysis = () => (
  <div className="h-full w-full flex items-center justify-center p-8 relative overflow-hidden">
     {/* Data Tunnel Background */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)] animate-pulse"></div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl z-10 items-center">
         <div className="text-left">
             <div className="inline-block px-3 py-1 bg-cine-electric/10 border border-cine-electric/30 rounded-full text-cine-electric font-mono text-xs mb-4">
                 NEURAL ENGINE v2.0
             </div>
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                 AI-POWERED<br/>ANALYSIS
             </h2>
             <p className="text-gray-400 max-w-md text-lg">
                 Instant contextual understanding. We don't just tell you what happened, we tell you <span className="text-white font-semibold">why</span>.
             </p>
         </div>
         
         {/* Visual Graphic */}
         <div className="relative aspect-square md:aspect-video bg-cine-900/50 rounded-xl border border-white/10 p-6 flex items-end justify-between space-x-2">
             {[40, 70, 50, 90, 60, 80].map((h, i) => (
                 <div key={i} className="w-full bg-gradient-to-t from-cine-electric to-transparent opacity-80 rounded-t-sm animate-grow-bar relative group" style={{ height: `${h}%`, '--target-height': `${h}%` } as any}>
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                         {h}%
                     </div>
                 </div>
             ))}
             {/* Node Lines Overlay */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ filter: 'drop-shadow(0 0 2px #3b82f6)' }}>
                 <path d="M10,200 Q150,50 400,100 T800,50" fill="none" stroke="#3b82f6" strokeWidth="2" />
             </svg>
         </div>
     </div>
  </div>
);

const Scene3_Reels = () => (
  <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-cine-850">
      <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-widest text-center">
          Short • Smart • Scrollable
      </h2>
      
      {/* Reel Stack */}
      <div className="relative w-64 h-96 md:w-80 md:h-[500px]">
          {[0, 1, 2].map((i) => (
              <div key={i} className={`
                 absolute inset-0 rounded-3xl bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden
                 flex flex-col
                 ${i === 0 ? 'animate-card-stack z-30' : (i === 1 ? 'scale-95 translate-y-4 z-20 opacity-50' : 'scale-90 translate-y-8 z-10 opacity-20')}
              `}>
                  <div className="h-1/2 bg-gray-800 relative">
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                         </div>
                     </div>
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-b from-gray-900 to-black">
                      <div className="h-4 w-3/4 bg-cine-electric rounded mb-4"></div>
                      <div className="space-y-2">
                          <div className="h-2 w-full bg-gray-800 rounded"></div>
                          <div className="h-2 w-full bg-gray-800 rounded"></div>
                          <div className="h-2 w-2/3 bg-gray-800 rounded"></div>
                      </div>
                  </div>
              </div>
          ))}
          {/* Hand/Swipe Hint */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 animate-bounce opacity-50">
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
      </div>
  </div>
);

const Scene4_Verified = () => (
  <div className="h-full w-full flex items-center justify-center p-8 bg-black relative">
      <div className="text-center z-10">
          <div className="relative inline-block mb-8">
              <svg className="w-32 h-32 text-cine-electric animate-shield-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="absolute -top-4 -right-4 bg-cine-gold text-black font-bold px-3 py-1 rounded-full text-xs shadow-glow">
                  FAKE NEWS BLOCKED
              </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
              ONLY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cine-electric">VERIFIED</span> SOURCES
          </h2>
          <p className="text-gray-500 font-mono tracking-widest uppercase">Trusted by millions</p>
      </div>
  </div>
);

const Scene5_Map = () => (
  <div className="h-full w-full flex items-center justify-center relative overflow-hidden bg-cine-900">
      {/* Interactive Map Background */}
      <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full text-cine-electric" fill="currentColor" viewBox="0 0 100 50">
              <circle cx="20" cy="20" r="1" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="50" cy="15" r="1" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="75" cy="30" r="1" className="animate-ping" style={{ animationDuration: '4s' }} />
              <circle cx="85" cy="10" r="1" className="animate-ping" style={{ animationDuration: '3.5s' }} />
              {/* Rough continents */}
              <path d="M10,10 Q20,5 30,15 T40,25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              <path d="M50,10 Q60,5 70,10 T80,20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
      </div>
      
      <div className="z-10 bg-black/40 backdrop-blur-lg border border-white/10 p-8 rounded-2xl max-w-2xl w-full text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">News From Everywhere</h2>
          <div className="flex justify-center space-x-4">
              {['Local', 'National', 'Global'].map((scope, i) => (
                  <div key={i} className={`px-6 py-2 rounded-full border transition-colors cursor-pointer ${i === 2 ? 'bg-cine-electric text-white border-cine-electric' : 'border-gray-600 text-gray-400'}`}>
                      {scope}
                  </div>
              ))}
          </div>
      </div>
  </div>
);

const Scene6_Personalized = () => (
  <div className="h-full w-full flex flex-col md:flex-row items-center justify-center p-8 gap-8 bg-gradient-to-br from-cine-900 to-black">
      <div className="flex-1 text-right space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white">YOUR NEWS.<br/>YOUR WAY.</h2>
          <p className="text-cine-electric font-mono">Dynamic Personalization</p>
      </div>
      
      <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
           {/* Mock Toggles */}
           {['Tech & Science', 'Global Economy', 'Art & Culture'].map((topic, i) => (
               <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                   <span className="text-gray-300">{topic}</span>
                   <div className={`w-12 h-6 rounded-full flex items-center px-1 ${i < 2 ? 'bg-cine-electric justify-end' : 'bg-gray-700 justify-start'}`}>
                       <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
                   </div>
               </div>
           ))}
           <div className="pt-4 border-t border-white/10">
               <div className="h-2 w-full bg-gradient-to-r from-cine-electric to-purple-500 rounded-full opacity-50"></div>
               <div className="text-right text-[10px] text-gray-400 mt-1">Learning from your habits...</div>
           </div>
      </div>
  </div>
);

const Scene7_SaveShare = () => (
  <div className="h-full w-full flex items-center justify-center p-8 bg-cine-850">
      <div className="grid grid-cols-3 gap-8 text-center">
          {[
              { icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z', label: 'SAVE' },
              { icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z', label: 'SHARE' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'LATER' } // Clock
          ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cine-electric group-hover:text-white group-hover:scale-110 transition-all duration-300 text-gray-400">
                      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <span className="text-xs md:text-sm font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
              </div>
          ))}
      </div>
  </div>
);

const Scene8_AIDaily = () => (
  <div className="h-full w-full flex items-center justify-center p-4 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cine-electric/5 to-transparent"></div>
      
      <div className="w-full max-w-2xl bg-cine-900 border border-gray-800 rounded-xl p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cine-electric via-purple-500 to-cine-electric animate-[drift_2s_linear_infinite]"></div>
          
          <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cine-electric to-purple-600 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">AI</span>
              </div>
              <h3 className="text-white font-bold">Your Daily Briefing</h3>
              <span className="text-gray-500 text-xs ml-auto">Updated 8:00 AM</span>
          </div>
          
          <div className="space-y-4">
              <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-800 rounded animate-pulse delay-100"></div>
              <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse delay-200"></div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
              <button className="text-cine-electric text-sm font-semibold hover:text-white transition-colors">Play Audio Summary</button>
              <div className="flex space-x-1">
                  {[1,2,3,4].map(i => <div key={i} className="w-1 h-4 bg-cine-electric animate-audio-wave" style={{ animationDelay: `${i*0.1}s` }}></div>)}
              </div>
          </div>
      </div>
  </div>
);

const Scene9_MultiPlatform = () => (
  <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-cine-900">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">MOBILE • WEB • FUTURE</h2>
      
      <div className="flex items-end justify-center space-x-4 md:space-x-8">
          {/* Phone */}
          <div className="w-16 h-32 md:w-24 md:h-48 border-2 border-gray-700 rounded-xl bg-black relative animate-[slideInUp_0.5s_ease-out_forwards] delay-300">
             <div className="absolute inset-1 bg-cine-electric/10 rounded-lg"></div>
          </div>
          {/* Tablet */}
          <div className="w-32 h-40 md:w-48 md:h-64 border-2 border-gray-700 rounded-xl bg-black relative animate-[slideInUp_0.5s_ease-out_forwards] delay-150">
             <div className="absolute inset-1 bg-cine-electric/10 rounded-lg"></div>
          </div>
          {/* Desktop */}
          <div className="w-64 h-48 md:w-96 md:h-72 border-2 border-gray-700 rounded-xl bg-black relative animate-[slideInUp_0.5s_ease-out_forwards]">
             <div className="absolute inset-1 bg-cine-electric/10 rounded-lg"></div>
          </div>
      </div>
  </div>
);

const Scene10_Finale = () => (
  <div className="h-full w-full flex flex-col items-center justify-center bg-black relative p-6 text-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <h1 className="text-4xl md:text-7xl font-black text-white mb-4 animate-[zoomIn_1s_ease-out_forwards]">
          SMART NEWS FOR<br/>A SMART WORLD.
      </h1>
      <p className="text-cine-electric font-mono tracking-widest text-sm md:text-base mb-12 uppercase animate-[fadeInBlur_1.5s_ease-out_forwards] delay-500">
          SPEED • TRUST • INTELLIGENCE
      </p>
      
      <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-cine-electric hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10 animate-[slideInUp_1s_ease-out_forwards] delay-700">
          EXPLORE FEATURES
      </button>
  </div>
);

const FEATURE_SCENES = [
    Scene1_RealTime,
    Scene2_AIAnalysis,
    Scene3_Reels,
    Scene4_Verified,
    Scene5_Map,
    Scene6_Personalized,
    Scene7_SaveShare,
    Scene8_AIDaily,
    Scene9_MultiPlatform,
    Scene10_Finale
];

// --- FEATURE TRAILER CONTAINER ---

export const FeatureTrailer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning || index === FEATURE_SCENES.length - 1) return;
    setDirection('next');
    setIndex(prev => prev + 1);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning || index === 0) return;
    setDirection('prev');
    setIndex(prev => prev - 1);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Activate keyboard navigation only when scrolled down to this section
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Only active if scrolled down past the first screen (approx 50% of viewport)
      if (window.scrollY < window.innerHeight * 0.5) return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev]);

  const CurrentScene = FEATURE_SCENES[index];

  return (
    <div className="relative w-full h-full bg-cine-900 border-t border-white/10 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-tech-grid bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cine-900 via-transparent to-cine-900 pointer-events-none"></div>

        {/* Scene Container */}
        <div className="relative w-full h-full">
            <div key={index} className={`w-full h-full ${isTransitioning ? (direction === 'next' ? 'animate-slide-enter-next' : 'animate-slide-enter-prev') : ''}`}>
                <CurrentScene />
            </div>
        </div>

        {/* Navigation Controls (Bottom Center) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-50 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <button 
                onClick={handlePrev} 
                disabled={index === 0}
                className={`p-2 rounded-full hover:bg-white/10 transition-colors ${index === 0 ? 'opacity-30 cursor-not-allowed' : 'text-white'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="flex space-x-1">
                {FEATURE_SCENES.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-cine-electric' : 'w-2 bg-gray-600'}`}></div>
                ))}
            </div>

            <button 
                onClick={handleNext} 
                disabled={index === FEATURE_SCENES.length - 1}
                className={`p-2 rounded-full hover:bg-white/10 transition-colors ${index === FEATURE_SCENES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-white'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
        
        {/* Section Label */}
        <div className="absolute top-8 left-8 text-xs font-mono text-gray-500 uppercase tracking-widest border border-gray-800 px-3 py-1 rounded">
            Feature Tour • Scene {index + 1}
        </div>
    </div>
  );
};