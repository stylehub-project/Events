import React, { useState } from 'react';
import { SceneData, AspectRatio } from '../types';
import { CinematicDisplay } from './CinematicDisplay';

interface SceneCardProps {
  scene: SceneData;
  aspectRatio: AspectRatio;
}

export const SceneCard: React.FC<SceneCardProps> = ({ scene, aspectRatio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [customText, setCustomText] = useState(scene.overlayText || '');
  const [customSub, setCustomSub] = useState(scene.subText || '');

  const handlePlay = () => {
    // Reset animation by toggling
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 50);
  };

  return (
    <div className="bg-cine-800/40 border border-gray-800 rounded-xl overflow-hidden hover:border-cine-gold/30 transition-all duration-300 group flex flex-col h-full">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-800 flex justify-between items-start bg-cine-900/50">
        <div>
          <h3 className="text-lg font-serif font-bold text-gray-200 group-hover:text-cine-gold transition-colors">
            {scene.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{scene.description}</p>
        </div>
        <div className="px-2 py-1 bg-cine-900 rounded text-[10px] text-gray-500 uppercase tracking-wider border border-gray-800">
           {scene.animationStyle}
        </div>
      </div>

      <div className="p-4 space-y-4 flex-grow">
        {/* Preview Area */}
        <div 
            className="relative cursor-pointer" 
            onClick={handlePlay}
            title="Click to replay animation"
        >
            <CinematicDisplay 
                aspectRatio={aspectRatio}
                animationStyle={scene.animationStyle}
                overlayText={customText}
                subText={customSub}
                isPlaying={isPlaying}
            />
            
            {/* Play Overlay (Visible when not playing or on hover) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-30">
                    <div className="w-12 h-12 rounded-full bg-cine-gold/90 flex items-center justify-center shadow-lg shadow-cine-gold/20 transform group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-cine-900 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            )}
        </div>

        {/* Controls */}
        <div className="space-y-3 pt-2">
            <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Primary Text</label>
                <input 
                    type="text" 
                    value={customText}
                    onChange={(e) => {
                        setCustomText(e.target.value);
                        setIsPlaying(true); // Auto-play on edit
                    }}
                    className="w-full bg-cine-900/80 border border-gray-700 rounded-md p-2 text-sm text-cine-gold focus:border-cine-gold outline-none"
                    placeholder="Enter main title..."
                />
            </div>
            {(scene.subText !== undefined || customSub) && (
                <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Sub Text</label>
                    <input 
                        type="text" 
                        value={customSub}
                        onChange={(e) => {
                            setCustomSub(e.target.value);
                            setIsPlaying(true);
                        }}
                        className="w-full bg-cine-900/80 border border-gray-700 rounded-md p-2 text-sm text-gray-400 focus:border-cine-gold outline-none"
                        placeholder="Enter subtitle..."
                    />
                </div>
            )}
        </div>
      </div>

      <div className="p-3 border-t border-gray-800 bg-cine-900/30 flex justify-between items-center text-xs text-gray-500">
         <span>CSS Animation Engine</span>
         <button onClick={handlePlay} className="hover:text-white flex items-center space-x-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            <span>Replay</span>
         </button>
      </div>
    </div>
  );
};