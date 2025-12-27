import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LivingBackground } from './LivingBackground';

// --- UI COMPONENTS ---

interface CinematicFrameProps {
  type: 'image' | 'video' | 'app';
  label: string;
  subLabel?: string;
  tags?: string[];
  activeColor?: 'gold' | 'electric';
}

const CinematicMediaFrame: React.FC<CinematicFrameProps> = ({ 
  type, 
  label, 
  subLabel = "Interface Preview", 
  tags = ["LIVE DATA"], 
  activeColor = 'electric' 
}) => {
  const colorClass = activeColor === 'electric' ? 'text-cine-electric border-cine-electric' : 'text-cine-gold border-cine-gold';
  const glowColor = activeColor === 'electric' ? 'shadow-cine-electric/50' : 'shadow-cine-gold/50';

  return (
    <div className="relative group w-full h-full flex items-center justify-center p-2">
      
      {/* 1. Tech Nodes (Corners) */}
      <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${colorClass}`}></div>
          <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${colorClass}`}></div>
          <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${colorClass}`}></div>
          <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${colorClass}`}></div>
      </div>

      {/* 2. Floating Data Tags */}
      <div className="absolute -top-6 left-0 flex space-x-2">
         {tags.map((tag, i) => (
             <span key={i} className={`text-[9px] font-mono uppercase px-2 py-0.5 bg-black/50 border ${colorClass} backdrop-blur-md`}>
                {tag}
             </span>
         ))}
      </div>

      {/* 3. Main Container */}
      <div className={`
        relative w-full h-full bg-cine-800/20 backdrop-blur-sm border border-white/5 overflow-hidden
        ${type === 'app' ? 'max-w-[300px] aspect-[9/19] rounded-3xl border-4 border-cine-800' : 'rounded-sm'}
        flex items-center justify-center
      `}>
          
          {/* Animated Background inside Frame */}
          <div className="absolute inset-0 bg-gradient-to-b from-cine-900 to-cine-800 opacity-90"></div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          {/* Placeholder Icon/Text */}
          <div className="z-10 text-center p-4">
              <div className={`
                 w-16 h-16 mx-auto rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4
                 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${glowColor}
              `}>
                  {type === 'app' && <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                  {type === 'video' && <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {type === 'image' && <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              </div>
              <h3 className="text-xl font-bold font-sans text-white tracking-wide">{label}</h3>
              <p className="text-xs font-mono text-gray-500 mt-2 uppercase">{subLabel}</p>
          </div>

          {/* Scan Line Animation */}
          <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-[scanLight_3s_linear_infinite]"></div>
      </div>
    </div>
  );
};

// --- SLIDES ---

const Slide1_Hook = () => (
  <div className="h-full w-full flex items-center justify-center relative px-6">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-0"></div>
    <div className="z-10 text-center max-w-4xl">
       <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4 animate-[textReveal_1.5s_ease-out_forwards]">
          THE WORLD<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cine-electric to-white">NEVER STOPS.</span>
       </h1>
       <div className="w-0 h-[2px] bg-cine-electric mx-auto animate-[slideInRight_1s_ease-out_forwards]" style={{ animationDelay: '1s', width: '100px' }}></div>
       
       <div className="mt-8 animate-[fadeInBlur_2s_ease-out_forwards] delay-1000">
           <svg className="w-6 h-6 text-gray-500 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" /></svg>
       </div>
    </div>
  </div>
);

const Slide2_Problem = () => (
  <div className="h-full w-full flex items-center justify-center relative px-6 bg-black">
      <div className="text-center z-10">
         <h2 className="text-2xl md:text-4xl text-gray-400 font-sans font-light tracking-wide mb-6 animate-[fadeInBlur_1s_ease-out_forwards]">
            INFORMATION IS EVERYWHERE
         </h2>
         <h1 className="text-4xl md:text-7xl font-serif font-bold text-white animate-[glitch_2s_infinite]">
            BUT <span className="text-cine-gold">TRUST</span> IS RARE
         </h1>
      </div>
  </div>
);

const Slide3_Solution = () => (
  <div className="h-full w-full flex items-center justify-center relative px-6 overflow-hidden">
      {/* Zooming Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] animate-pulse"></div>
      
      <div className="z-10 text-center">
          <p className="text-cine-electric font-mono text-sm tracking-[0.4em] mb-4 animate-[slideInLeft_0.8s_ease-out_forwards]">INTRODUCING</p>
          <h1 className="text-4xl md:text-7xl font-sans font-black text-white uppercase italic transform -skew-x-6 animate-[zoomIn_0.8s_ease-out_forwards]">
             A NEW WAY TO<br/>EXPERIENCE NEWS
          </h1>
      </div>
  </div>
);

const Slide4_AppUI = () => (
  <div className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[70vh] animate-[fadeInBlur_1s_ease-out_forwards]">
         <CinematicMediaFrame 
            type="app" 
            label="NEXUS APP" 
            subLabel="Mobile Interface"
            tags={["iOS", "ANDROID"]}
            activeColor="electric"
         />
      </div>
      {/* Side Text Elements */}
      <div className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 hidden md:block text-left space-y-8">
          <div className="animate-[slideInLeft_1s_ease-out_forwards] delay-300">
             <h3 className="text-cine-electric font-mono text-xs">01</h3>
             <p className="text-white font-bold">Smart Feed</p>
          </div>
          <div className="animate-[slideInLeft_1s_ease-out_forwards] delay-500">
             <h3 className="text-cine-electric font-mono text-xs">02</h3>
             <p className="text-white font-bold">Live Alerts</p>
          </div>
      </div>
  </div>
);

const Slide5_Video = () => (
  <div className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-5xl aspect-video animate-[zoomIn_1s_ease-out_forwards]">
         <CinematicMediaFrame 
            type="video" 
            label="APP DEMO" 
            subLabel="Walkthrough"
            tags={["4K", "60FPS"]}
            activeColor="electric"
         />
      </div>
      {/* Rolling Ticker Bottom */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden bg-cine-electric/10 border-y border-cine-electric/30 py-2">
         <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="mx-8 font-mono text-xs text-cine-electric uppercase">
                    BREAKING: NEXUS APP LAUNCHING GLOBALLY • REAL-TIME AI ANALYSIS • VERIFIED SOURCES ONLY • 
                </span>
            ))}
         </div>
      </div>
  </div>
);

const Slide6_Features = () => (
  <div className="h-full w-full flex flex-col items-center justify-center text-left px-8">
      <div className="space-y-6 md:space-y-8">
          {["REAL-TIME UPDATES", "AI-POWERED ANALYSIS", "VERIFIED SOURCES", "SMART EXPERIENCE"].map((feat, i) => (
              <div key={i} className="overflow-hidden">
                  <h2 
                    className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase animate-[textReveal_0.8s_cubic-bezier(0.2,1,0.3,1)_forwards]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                      {feat}
                  </h2>
              </div>
          ))}
      </div>
  </div>
);

const Slide7_Split = () => (
  <div className="h-full w-full flex flex-col md:flex-row p-4 md:p-12 gap-4 md:gap-8">
      <div className="flex-1 animate-[slideInLeft_1s_ease-out_forwards]">
         <CinematicMediaFrame 
            type="image" 
            label="VISUAL STORIES" 
            subLabel="Immersive Photography"
            tags={["GALLERY"]}
            activeColor="electric"
         />
      </div>
      <div className="flex-1 animate-[slideInRight_1s_ease-out_forwards] delay-200">
         <CinematicMediaFrame 
            type="video" 
            label="LIVE COVERAGE" 
            subLabel="On the Ground"
            tags={["STREAM"]}
            activeColor="gold"
         />
      </div>
  </div>
);

const Slide8_ComingSoon = () => (
  <div className="h-full w-full flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute inset-0 bg-cine-electric/5 animate-pulse"></div>
      <h1 className="text-5xl md:text-9xl font-black text-white italic tracking-tighter transform -rotate-2 animate-[zoomIn_1s_ease-out_forwards]">
         COMING SOON
      </h1>
      <p className="mt-8 text-xl md:text-3xl font-mono text-cine-electric animate-[fadeInBlur_1.5s_ease-out_forwards] delay-500">
         THE FUTURE OF NEWS IS ALMOST HERE
      </p>
  </div>
);

const Slide9_Finale = () => (
  <div className="h-full w-full flex flex-col items-center justify-center bg-black px-4 relative">
      <div className="z-10 text-center">
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto bg-cine-electric mb-8 rounded-lg flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.6)] animate-[zoomIn_1s_ease-out_forwards]">
             <span className="text-4xl md:text-6xl font-black text-black">N</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight animate-[textReveal_1s_ease-out_forwards] delay-300">
             NEXUS NEWS
          </h1>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm font-mono text-gray-400 animate-[fadeInBlur_1.5s_ease-out_forwards] delay-700">
             <span>INFORMED</span>
             <span className="text-cine-electric">•</span>
             <span>INTELLIGENT</span>
             <span className="text-cine-electric">•</span>
             <span>INSTANT</span>
          </div>
      </div>
      
      {/* Background Data Rain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
             <div 
               key={i}
               className="absolute w-[1px] bg-gradient-to-b from-transparent via-cine-electric to-transparent opacity-30"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: '-20%',
                 height: `${Math.random() * 20 + 10}%`,
                 animation: `float ${2 + Math.random() * 3}s linear infinite`,
                 animationDelay: `${Math.random() * 2}s`
               }}
             ></div>
          ))}
      </div>
  </div>
);

const SLIDES = [
  Slide1_Hook,
  Slide2_Problem,
  Slide3_Solution,
  Slide4_AppUI,
  Slide5_Video,
  Slide6_Features,
  Slide7_Split,
  Slide8_ComingSoon,
  Slide9_Finale
];

// --- MAIN ENGINE ---

export const CinematicPlayer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (isTransitioning || index === SLIDES.length - 1) return;
    setDirection('next');
    setExitingIndex(index);
    setIndex(prev => prev + 1);
    setIsTransitioning(true);
  }, [index, isTransitioning, SLIDES.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning || index === 0) return;
    setDirection('prev');
    setExitingIndex(index);
    setIndex(prev => prev - 1);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setExitingIndex(null);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Only listen to keyboard if NOT recording and is top visible player (simplified for now)
  // We'll leave keyboard active for the top player as default behavior
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Basic prevention of conflict with second trailer: only work if window scroll Y is near 0
      if (window.scrollY > 200) return;
      if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev]);

  // --- RECORDING LOGIC ---
  const stopRecording = useCallback(() => {
     if (recorder && recorder.state !== 'inactive') {
        recorder.stop();
        setIsRecording(false);
     }
  }, [recorder]);

  useEffect(() => {
    if (!isRecording) return;
    const SLIDE_DURATION = 4000;
    const timeout = setTimeout(() => {
       if (index < SLIDES.length - 1) {
          handleNext();
       } else {
          setTimeout(stopRecording, 2000);
       }
    }, SLIDE_DURATION);
    return () => clearTimeout(timeout);
  }, [index, isRecording, handleNext, stopRecording]);

  const handleStartRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
       alert("Screen recording is not supported on this device/browser. Try Chrome Desktop.");
       return;
    }
    try {
       const stream = await navigator.mediaDevices.getDisplayMedia({
          video: { displaySurface: "browser" },
          audio: true 
       });
       const options = { mimeType: 'video/webm;codecs=vp9' };
       const mediaRecorder = new MediaRecorder(stream, options);
       chunksRef.current = [];
       mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunksRef.current.push(e.data);
       };
       mediaRecorder.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `nexus-news-launch-${Date.now()}.webm`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          stream.getTracks().forEach(track => track.stop());
          setIsRecording(false);
       };
       setRecorder(mediaRecorder);
       mediaRecorder.start();
       setIsRecording(true);
       setIndex(0); 
    } catch (err) {
       console.error("Recording failed", err);
    }
  };

  const getTransitionClass = (idx: number, state: 'enter' | 'exit') => {
    const impactSlides = [0, 2, 7, 8];
    const type = impactSlides.includes(idx) ? 'zoom' : 'slide';
    return `${type}-${state}-${direction}`;
  };

  const CurrentSlide = SLIDES[index];
  const ExitingSlide = exitingIndex !== null ? SLIDES[exitingIndex] : null;

  return (
    // Changed from fixed inset-0 to relative h-full to allow stacking in App.tsx
    <div className="relative w-full h-[100dvh] overflow-hidden touch-none select-none bg-black">
      <LivingBackground />

      {/* Main Stage */}
      <div className="relative w-full h-full flex items-center justify-center">
        {ExitingSlide && (
          <div className={`absolute inset-0 w-full h-full z-10 ${getTransitionClass(exitingIndex!, 'exit')}`}>
             <ExitingSlide />
          </div>
        )}
        <div 
          key={index} 
          className={`absolute inset-0 w-full h-full z-20 ${isTransitioning ? getTransitionClass(index, 'enter') : ''}`}
        >
           <CurrentSlide />
        </div>
      </div>

      {/* Recording Status Overlay */}
      {isRecording && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] flex items-center space-x-2 bg-cine-gold/90 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
             <div className="w-3 h-3 bg-white rounded-full"></div>
             <span className="text-xs font-bold tracking-widest uppercase">REC • {index + 1}/{SLIDES.length}</span>
          </div>
      )}

      {/* Controls */}
      {!isRecording && (
        <>
            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-50 flex items-center space-x-2 md:space-x-4">
                <button 
                  onClick={handleStartRecording}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cine-gold/50 flex items-center justify-center transition-all duration-300 hover:bg-cine-gold/20 hover:border-cine-gold bg-black/50 backdrop-blur"
                  title="Record & Download Video"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-cine-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
                <div className="w-[1px] h-8 bg-gray-700 mx-2 hidden md:block"></div>
                <button 
                    onClick={handlePrev}
                    disabled={index === 0}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover:border-cine-electric hover:bg-cine-electric/10 bg-black/50 backdrop-blur ${index === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80'}`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                    onClick={handleNext}
                    disabled={index === SLIDES.length - 1}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-cine-electric flex items-center justify-center transition-all duration-300 hover:bg-cine-electric hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] bg-black/50 backdrop-blur ${index === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 text-cine-electric'}`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            {/* Progress Indicator */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center space-x-1 md:space-x-2">
                {SLIDES.map((_, i) => (
                    <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 ${i === index ? 'w-6 md:w-8 bg-cine-electric shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-1.5 md:w-2 bg-gray-800'}`}
                    ></div>
                ))}
            </div>
        </>
      )}
      
      {/* Decorative Global Sparks (replaces cheers) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {[...Array(10)].map((_, i) => (
             <div 
               key={i}
               className="absolute w-0.5 h-4 bg-cine-electric opacity-50 animate-rise"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: '100%',
                 animationDuration: `${3 + Math.random() * 5}s`,
                 animationDelay: `${Math.random() * 5}s`
               }}
             ></div>
         ))}
      </div>
    </div>
  );
};