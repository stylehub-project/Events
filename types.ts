export type AspectRatio = '16:9' | '9:16';

export interface SceneData {
  id: string;
  title: string;
  description: string;
  visualStyle: string; // Used for UI description
  animationStyle: 'cinematic' | 'glitch' | 'elegant' | 'energetic' | 'particle';
  overlayText?: string;
  subText?: string;
  defaultPrompt?: string; // Kept for reference or copy-paste
}

export type AnimationState = 'playing' | 'paused';