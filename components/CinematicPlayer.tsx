import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LivingBackground } from './LivingBackground';

// --- ADVANCED CINEMATIC UI COMPONENTS ---

interface CinematicFrameProps {
  type: 'image' | 'video';
  label: string;
  subLabel?: string;
  tags?: string[];
  activeColor?: 'gold' | 'electric';
}

const CinematicMediaFrame: React.FC<CinematicFrameProps> = ({ 
  type, 
  label, 
  subLabel = "Admin Content Area", 
  tags = ["EVENT HIGHLIGHT"], 
  activeColor = type === 'video' ? 'electric' : 'gold' 
}) => {
  const colorClass = activeColor === 'electric' ? 'text-cine-electric border-cine-electric' : 'text-cine-gold border-cine-gold';
  const bgGlow = activeColor === 'electric' ? 'bg-cine-electric/5' : 'bg-cine-gold/5';

  return (
    <div className="relative group w-full h-full flex items-center justify-center p-2 md:p-0">
      
      {/* 1. Floating Depth Shadow */}
      <div className={`absolute top-10 left-0 right-0 h-full w-[90%] mx-auto ${bgGlow} blur-3xl opacity-20 transform translate-y-8 animate-pulse-glow transition-all duration-1000 group-hover:opacity-40`}></div>

      {/* 2. CHEERS PARTICLES (Surrounding the frame) */}
      <div className="absolute -inset-8 md:-inset-16 z-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(30)].map((_, i) => (
             <div 
               key={i}
               className={`absolute rounded-full ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} blur-[1px]`}
               style={{
                 left: `${Math.random() * 100}%`,
                 bottom: '-20%',
                 width: `${Math.random() * 3 + 2}px`,
                 height: `${Math.random() * 3 + 2}px`,
                 animation: `rise ${4 + Math.random() * 4}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                 animationDelay: `-${Math.random() * 5}s`,
                 opacity: Math.random() * 0.4 + 0.1
               }}
             ></div>
          ))}
      </div>

      {/* 3. Floating Info Tags (Outside Frame) */}
      <div className="absolute top-[-30px] left-2 md:left-[-20px] md:top-[-20px] z-20 flex flex-row md:flex-col items-start space-x-2 md:space-x-0 md:space-y-2 pointer-events-none">
         {tags.map((tag, i) => (
             <div key={i} className={`
                flex items-center space-x-2 bg-black/80 backdrop-blur border-l-2 ${colorClass.split(' ')[1]} 
                px-3 py-1 animate-[fadeInBlur_0.5s_ease-out_forwards]
             `} style={{ animationDelay: `${0.5 + i * 0.2}s` }}>
                <div className={`w-1.5 h-1.5 rounded-full ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} animate-pulse`}></div>
                <span className={`text-[9px] md:text-[10px] font-mono tracking-widest ${activeColor === 'electric' ? 'text-cine-electric' : 'text-cine-gold'}`}>{tag}</span>
             </div>
         ))}
      </div>

      {/* 4. Main Frame Container */}
      <div className={`
        relative w-full h-full bg-black/60 backdrop-blur-md border ${activeColor === 'electric' ? 'border-cine-electric/30' : 'border-cine-gold/30'}
        overflow-hidden rounded-sm flex flex-col items-center justify-center
        transform transition-transform duration-700 group-hover:scale-[1.01]
      `}>
         
         {/* ACTIVE BACKGROUND (When Empty) */}
         <div className="absolute inset-0 z-0 opacity-40">
            {/* School Brand Loop */}
            <div className="absolute top-10 inset-x-0 overflow-hidden opacity-20">
               <div className="flex whitespace-nowrap animate-marquee">
                  {[...Array(4)].map((_, i) => (
                     <span key={i} className="text-2xl md:text-4xl font-serif font-black text-transparent stroke-white mx-8 uppercase opacity-30" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                        SUNRISE INTERNATIONAL PUBLIC SCHOOL • NECHHWA • SIKAR •
                     </span>
                  ))}
               </div>
            </div>
            
            {/* Moving Gradients */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_90deg,transparent_0deg,${activeColor === 'electric' ? 'rgba(0,243,255,0.05)' : 'rgba(251,191,36,0.05)'}_180deg,transparent_360deg)] animate-[drift_10s_linear_infinite]`}></div>
         </div>

         {/* Light Scan Effect */}
         <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-scan-light pointer-events-none"></div>

         {/* Animated Border Lines */}
         <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${activeColor === 'electric' ? 'via-cine-electric' : 'via-cine-gold'} to-transparent animate-[slideInRight_4s_linear_infinite] opacity-50`}></div>
         <div className={`absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent ${activeColor === 'electric' ? 'via-cine-electric' : 'via-cine-gold'} to-transparent animate-[slideInLeft_4s_linear_infinite] opacity-50`}></div>

         {/* Corner Nodes */}
         <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 z-20">
             <div className={`absolute top-0 left-0 w-full h-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute top-0 left-0 h-full w-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute top-0 left-0 w-1.5 h-1.5 ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} shadow-[0_0_10px_currentColor] animate-corner-pulse`}></div>
         </div>
         <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 z-20">
             <div className={`absolute top-0 right-0 w-full h-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute top-0 right-0 h-full w-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute top-0 right-0 w-1.5 h-1.5 ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} shadow-[0_0_10px_currentColor] animate-corner-pulse`}></div>
         </div>
         <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 z-20">
             <div className={`absolute bottom-0 left-0 w-full h-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute bottom-0 left-0 h-full w-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} shadow-[0_0_10px_currentColor] animate-corner-pulse`}></div>
         </div>
         <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 z-20">
             <div className={`absolute bottom-0 right-0 w-full h-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute bottom-0 right-0 h-full w-[1px] ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'}`}></div>
             <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} shadow-[0_0_10px_currentColor] animate-corner-pulse`}></div>
         </div>

         {/* Content Center */}
         <div className="relative z-20 text-center p-4 md:p-8 flex flex-col items-center max-w-full">
            {/* Icon Circle */}
            <div className={`
               w-12 h-12 md:w-20 md:h-20 rounded-full border border-opacity-30 flex items-center justify-center mb-4 md:mb-6 
               backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500
               ${activeColor === 'electric' ? 'bg-cine-electric/10 border-cine-electric' : 'bg-cine-gold/10 border-cine-gold'}
            `}>
               {type === 'video' ? (
                  <svg className={`w-6 h-6 md:w-8 md:h-8 ${activeColor === 'electric' ? 'text-cine-electric' : 'text-cine-gold'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               ) : (
                  <svg className={`w-6 h-6 md:w-8 md:h-8 ${activeColor === 'electric' ? 'text-cine-electric' : 'text-cine-gold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               )}
            </div>
            
            <h3 className="text-lg md:text-3xl font-serif text-white mb-2 md:mb-3 font-bold drop-shadow-lg">{label}</h3>
            <p className="text-gray-400 font-mono text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80">{subLabel}</p>
         </div>

         {/* Audio Wave (Only for video) */}
         {type === 'video' && (
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-end space-x-1 h-6 md:h-8 opacity-60">
               {[...Array(12)].map((_, i) => (
                  <div 
                     key={i} 
                     className={`w-0.5 md:w-1 rounded-t-sm ${activeColor === 'electric' ? 'bg-cine-electric' : 'bg-cine-gold'} animate-audio-wave`}
                     style={{ 
                        height: '20%', 
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${0.5 + Math.random() * 0.5}s`
                     }}
                  ></div>
               ))}
            </div>
         )}
         
         {/* Noise Overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  );
};

// --- SLIDE DEFINITIONS ---

const Slide1_Hook = () => (
  <div className="h-full w-full flex items-center justify-center relative px-4">
    <div className="text-center z-10">
      <h2 className="text-cine-gold tracking-[0.6em] text-xs md:text-base font-sans uppercase mb-6 md:mb-8 animate-[fadeInBlur_1s_ease-out_forwards]">Presenting</h2>
      <h1 className="text-5xl md:text-9xl font-serif font-black text-white text-glow animate-[zoomIn_1.5s_cubic-bezier(0.25,1,0.5,1)_forwards]">
        THIS<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cine-electric to-white">WINTER...</span>
      </h1>
      <div className="mt-8 md:mt-12 h-[1px] w-16 md:w-24 bg-cine-electric mx-auto animate-[slideInRight_1s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}></div>
    </div>
  </div>
);

const Slide2_Identity = () => (
  <div className="h-full w-full flex items-center justify-center relative">
    <div className="absolute inset-4 md:inset-10 border border-cine-gold/30 rounded-lg animate-border-trace"></div>
    <div className="text-center z-10 px-6">
      <h1 className="text-3xl md:text-7xl font-serif font-bold text-white leading-tight">
        <div className="overflow-hidden"><span className="block animate-text-reveal" style={{ animationDelay: '0.2s' }}>SUNRISE</span></div>
        <div className="overflow-hidden"><span className="block text-cine-gold animate-text-reveal" style={{ animationDelay: '0.4s' }}>INTERNATIONAL</span></div>
        <div className="overflow-hidden"><span className="block animate-text-reveal" style={{ animationDelay: '0.6s' }}>PUBLIC SCHOOL</span></div>
      </h1>
      <p className="mt-6 md:mt-8 text-gray-400 tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-lg animate-[fadeInBlur_1s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
        Nechhwa • Sikar
      </p>
    </div>
  </div>
);

const Slide3_Announcement = () => (
  <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
     <div className="absolute inset-0 bg-cine-electric/5 mix-blend-overlay animate-pulse"></div>
     <div className="text-center relative z-10 px-2">
        <p className="text-cine-electric font-mono tracking-widest text-xs md:text-sm mb-2 md:mb-4 animate-[slideInLeft_0.8s_ease-out_forwards]">PRESENTS</p>
        <h1 className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter drop-shadow-[4px_4px_0_rgba(0,243,255,0.3)] animate-[zoomIn_0.8s_backwards]" style={{ animationDelay: '0.3s' }}>
           WINTER<br/>VACATION
        </h1>
        <h2 className="text-2xl md:text-6xl font-serif text-cine-gold mt-2 animate-[slideInRight_0.8s_ease-out_forwards]" style={{ animationDelay: '0.6s' }}>
           DANCE EVENT
        </h2>
     </div>
  </div>
);

const Slide4_Image = () => (
  <div className="h-full w-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl aspect-[4/3] md:aspect-video animate-[fadeInBlur_1s_ease-out_forwards]">
        <CinematicMediaFrame 
          type="image" 
          label="Event Poster" 
          subLabel="Official Event Graphic"
          tags={["EVENT POSTER", "HIGH RES"]}
          activeColor="gold"
        />
      </div>
  </div>
);

const Slide5_Video = () => (
  <div className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-6xl aspect-[4/3] md:aspect-video animate-[zoomIn_1s_ease-out_forwards]">
         <CinematicMediaFrame 
            type="video" 
            label="Main Dance" 
            subLabel="Cinematic Stage"
            tags={["MAIN EVENT", "LIVE AUDIO", "4K HDR"]}
            activeColor="electric"
         />
      </div>
  </div>
);

const Slide6_Message = () => (
  <div className="h-full w-full flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-2xl md:text-5xl font-serif text-white font-bold mb-4 md:mb-6 animate-[fadeInBlur_1s_ease-out_forwards]">
        A CELEBRATION OF TALENT
      </h2>
      <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-cine-gold to-transparent my-4 animate-[slideInRight_1.5s_ease-out_forwards]"></div>
      <h3 className="text-lg md:text-3xl font-sans text-cine-gold tracking-[0.2em] md:tracking-[0.3em] uppercase animate-[textReveal_1s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}>
        Joy • Culture • Confidence
      </h3>
  </div>
);

const Slide7_Split = () => (
  <div className="h-full w-full flex flex-col md:flex-row p-4 md:p-12 gap-4 md:gap-6">
      <div className="flex-1 animate-[slideInLeft_1s_ease-out_forwards]">
         <CinematicMediaFrame 
            type="image" 
            label="Behind Scenes" 
            subLabel="Preparation"
            tags={["BACKSTAGE"]}
            activeColor="gold"
         />
      </div>
      <div className="flex-1 animate-[slideInRight_1s_ease-out_forwards] delay-200">
         <CinematicMediaFrame 
            type="video" 
            label="Crowd Moment" 
            subLabel="Reactions"
            tags={["AUDIENCE CAM"]}
            activeColor="electric"
         />
      </div>
  </div>
);

const Slide8_Finale = () => (
  <div className="h-full w-full flex flex-col items-center justify-center relative px-4">
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] bg-cine-gold/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>
      <div className="z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-white animate-[zoomIn_2s_ease-out_forwards]">
             SUNRISE INTERNATIONAL<br/>PUBLIC SCHOOL
          </h1>
          <p className="text-xl md:text-4xl text-cine-gold italic font-serif mt-6 md:mt-8 animate-[fadeInBlur_2s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
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
  
  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  
  // We keep track of the "previous" slide to animate it out
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

  // --- RECORDING LOGIC ---
  const stopRecording = useCallback(() => {
     if (recorder && recorder.state !== 'inactive') {
        recorder.stop();
        setIsRecording(false);
     }
  }, [recorder]);

  // Auto-play sequencer for recording
  useEffect(() => {
    if (!isRecording) return;
    
    // Time per slide during recording (ms)
    const SLIDE_DURATION = 4000;

    const timeout = setTimeout(() => {
       if (index < SLIDES.length - 1) {
          handleNext();
       } else {
          // Finished
          setTimeout(stopRecording, 2000); // Record finale for 2s extra
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
       // 1. Request Screen Share
       const stream = await navigator.mediaDevices.getDisplayMedia({
          video: { displaySurface: "browser" },
          audio: true // Capture system audio if selected
       });

       // 2. Setup Recorder
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
          a.download = `sunrise-event-presentation-${Date.now()}.webm`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          
          // Stop all tracks to clear "Sharing" indicator
          stream.getTracks().forEach(track => track.stop());
          setIsRecording(false);
       };

       setRecorder(mediaRecorder);
       
       // 3. Start
       mediaRecorder.start();
       setIsRecording(true);
       setIndex(0); // Reset to start
       
    } catch (err) {
       console.error("Recording failed", err);
       alert("Could not start recording. Please select the tab to share.");
    }
  };

  // Get transition class based on slide index for variety
  const getTransitionClass = (idx: number, state: 'enter' | 'exit') => {
    // Varied transitions per slide pair
    const type = idx % 2 === 0 ? 'slide' : (idx % 3 === 0 ? 'zoom' : 'fade');
    return `${type}-${state}-${direction}`;
  };

  const CurrentSlide = SLIDES[index];
  const ExitingSlide = exitingIndex !== null ? SLIDES[exitingIndex] : null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden touch-none select-none">
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

      {/* Recording Status Overlay */}
      {isRecording && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] flex items-center space-x-2 bg-red-600/90 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
             <div className="w-3 h-3 bg-white rounded-full"></div>
             <span className="text-xs font-bold tracking-widest uppercase">Recording Scene {index + 1}/{SLIDES.length}</span>
          </div>
      )}

      {/* Cinematic Controls (Floating) */}
      {!isRecording && (
        <>
            <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50 flex items-center space-x-2 md:space-x-4">
                
                {/* Download Button */}
                <button 
                  onClick={handleStartRecording}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cine-electric/50 flex items-center justify-center transition-all duration-300 hover:bg-cine-electric/20 hover:border-cine-electric bg-black/50 backdrop-blur"
                  title="Record & Download Video"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-cine-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>

                <div className="w-[1px] h-8 bg-gray-700 mx-2 hidden md:block"></div>

                <button 
                    onClick={handlePrev}
                    disabled={index === 0}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover:border-cine-gold hover:bg-cine-gold/10 bg-black/50 backdrop-blur ${index === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80'}`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                    onClick={handleNext}
                    disabled={index === SLIDES.length - 1}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-cine-gold flex items-center justify-center transition-all duration-300 hover:bg-cine-gold hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] bg-black/50 backdrop-blur ${index === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 text-cine-gold'}`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center space-x-1 md:space-x-2">
                {SLIDES.map((_, i) => (
                    <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 ${i === index ? 'w-6 md:w-8 bg-cine-gold shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'w-1.5 md:w-2 bg-gray-700'}`}
                    ></div>
                ))}
            </div>
        </>
      )}
    </div>
  );
};