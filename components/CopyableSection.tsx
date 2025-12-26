import React, { useState } from 'react';

interface CopyableSectionProps {
  title: string;
  content: string;
  icon: 'music' | 'share';
}

export const CopyableSection: React.FC<CopyableSectionProps> = ({ title, content, icon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-cine-800/40 border border-gray-800 rounded-xl p-6 relative group hover:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-serif font-bold text-gray-200 flex items-center space-x-2">
           {icon === 'music' && (
             <svg className="w-5 h-5 text-cine-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
           )}
           {icon === 'share' && (
             <svg className="w-5 h-5 text-cine-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
           )}
           <span>{title}</span>
        </h3>
        <button 
          onClick={handleCopy}
          className="text-xs text-gray-500 hover:text-cine-gold transition-colors flex items-center space-x-1"
        >
          <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
          {!copied && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
          )}
        </button>
      </div>
      <div className="bg-cine-900/50 rounded-lg p-4 font-mono text-sm text-gray-400 whitespace-pre-line border border-gray-800">
        {content}
      </div>
    </div>
  );
};