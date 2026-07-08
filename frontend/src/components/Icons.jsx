import React from 'react';

export const ReactIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#58c4dc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const HtmlIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#e44d26] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const JsIcon = () => (
  <div className="w-3.5 h-3.5 bg-[#f7df1e] text-black font-extrabold text-[8px] flex items-center justify-center rounded-sm font-sans flex-shrink-0 select-none">
    JS
  </div>
);

export const TsIcon = () => (
  <div className="w-3.5 h-3.5 bg-[#007acc] text-white font-extrabold text-[8px] flex items-center justify-center rounded-sm font-sans flex-shrink-0 select-none">
    TS
  </div>
);

export const JsonIcon = () => (
  <span className="text-[#cbcb41] font-bold font-sans text-xs flex-shrink-0 select-none">{"{}"}</span>
);

export const CssIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#629ff4] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

export const MarkdownIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#58a6ff] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 15V9l3 3 3-3v6M17 13l-2.5 2.5L12 13M14.5 15.5v-6" />
  </svg>
);

export const GitIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#f05032] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

export const EnvIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#e5c07b] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
