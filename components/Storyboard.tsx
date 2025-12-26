import React from 'react';
import { SCENES } from '../constants';
import { SceneCard } from './SceneCard';
import { AspectRatio } from '../types';

interface StoryboardProps {
  aspectRatio: AspectRatio;
}

export const Storyboard: React.FC<StoryboardProps> = ({ aspectRatio }) => {
  return (
    <div>
       <div className="mb-8 flex items-end justify-between">
         <div>
            <h2 className="text-2xl font-serif text-white mb-2">Production Storyboard</h2>
            <p className="text-gray-400 text-sm">Review prompts and generate high-fidelity concept art for each sequence.</p>
         </div>
         <div className="text-right text-xs text-gray-500 font-mono">
           {SCENES.length} SCENES • GEMINI 3 PRO
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {SCENES.map((scene) => (
           <SceneCard 
             key={scene.id} 
             scene={scene} 
             aspectRatio={aspectRatio}
           />
         ))}
       </div>
    </div>
  );
};