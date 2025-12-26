import { SceneData } from './types';

export const MUSIC_PROMPT = `Epic cinematic orchestral + soft electronic beats, slow build-up, emotional middle, powerful ending, inspiring, family-friendly, school event film style`;

export const SOCIAL_CAPTION = `✨ Winter Vacation Dance Event ✨
Sunrise International Public School, Nechhwa – Sikar

A celebration of talent, joy and confidence 💃🕺
Proud moments • Happy faces • Beautiful memories

#SunriseSchool #WinterDanceEvent #SchoolLife #ProudParents`;

export const SCENES: SceneData[] = [
  {
    id: 'scene-1',
    title: 'Scene 1: Powerful Opening',
    description: 'Hook shot of campus at sunrise with atmospheric fog.',
    visualStyle: 'Ultra-cinematic, volumetric lights, dark blue & gold grading',
    animationStyle: 'cinematic',
    overlayText: 'THIS WINTER...',
    defaultPrompt: `Cinematic opening shot of a modern school campus at sunrise. Cold winter morning fog...`
  },
  {
    id: 'scene-2',
    title: 'Scene 2: School Identity',
    description: 'Grand reveal of the school name with flags.',
    visualStyle: 'Hi-tech cinematic style, IMAX feel',
    animationStyle: 'elegant',
    overlayText: 'SUNRISE INTERNATIONAL\nPUBLIC SCHOOL',
    subText: 'Nechhwa • Sikar',
    defaultPrompt: `Grand cinematic reveal of Sunrise International Public School...`
  },
  {
    id: 'scene-3',
    title: 'Scene 3: Event Announcement',
    description: 'High energy title reveal with glitch effects.',
    visualStyle: 'Abstract digital lights, glitch effects',
    animationStyle: 'glitch',
    overlayText: 'WINTER VACATION\nDANCE EVENT',
    subText: 'PRESENTS',
    defaultPrompt: `Dramatic title reveal with glitch and light burst effects...`
  },
  {
    id: 'scene-4',
    title: 'Scene 4: Dance Energy',
    description: 'Silhouettes of students dancing.',
    visualStyle: 'Cinematic dance film look, volumetric lights',
    animationStyle: 'energetic',
    overlayText: '',
    subText: 'CELEBRATING MOVEMENT',
    defaultPrompt: `Silhouettes of students dancing on a large stage...`
  },
  {
    id: 'scene-5',
    title: 'Scene 5: Emotion & Joy',
    description: 'Audience reaction, warm emotions.',
    visualStyle: 'Cinematic depth, soft focus',
    animationStyle: 'particle',
    overlayText: 'PROUD MOMENTS',
    subText: 'Joy • Connection • Love',
    defaultPrompt: `Emotional cinematic moment showing audience silhouettes...`
  },
  {
    id: 'scene-6',
    title: 'Scene 6: Event Message',
    description: 'Elegant text animation about talent.',
    visualStyle: 'Cinematic typography, slow push-in',
    animationStyle: 'elegant',
    overlayText: 'A CELEBRATION\nOF TALENT',
    subText: 'JOY • CULTURE • CONFIDENCE',
    defaultPrompt: `Elegant cinematic text animation with slow camera push-in...`
  },
  {
    id: 'scene-7',
    title: 'Scene 7: Grand Finale',
    description: 'Golden particles forming the final logo.',
    visualStyle: 'Epic cinematic ending, gold grading',
    animationStyle: 'cinematic',
    overlayText: 'SUNRISE INTERNATIONAL\nPUBLIC SCHOOL',
    subText: 'Where Talent Shines ✨',
    defaultPrompt: `Powerful cinematic ending scene. Golden particles...`
  }
];