import React from 'react';

// Folder icon matching VS Code's standard outline folder icon
export const FolderIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

// Official Python logo (blue & yellow snake)
export const PyIcon = () => (
  <svg 
    className="w-3.5 h-3.5 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path 
      d="M11.898 0C8.286 0 5.434 2.825 5.434 6.4c0 .324.03.639.068.95H11.9v1.3H2.8C1.25 8.65 0 9.875 0 11.4c0 1.55 1.25 2.75 2.8 2.75h2.6v-1.3c0-2.3 1.85-4.15 4.15-4.15h5.2v-3.3C14.75 2.825 11.9 0 11.9 0h-.002zm-3.35 2.1c.47 0 .85.38.85.85s-.38.85-.85.85c-.47 0-.85-.38-.85-.85s.38-.85.85-.85z" 
      fill="#306998" 
    />
    <path 
      d="M12.1 24c3.612 0 6.464-2.825 6.464-6.4 0-.324-.03-.639-.068-.95H12.1v-1.3h9.1c1.55 0 2.8-1.225 2.8-2.75 0-1.55-1.25-2.75-2.8-2.75h-2.6v1.3c0 2.3-1.85 4.15-4.15 4.15h-5.2v3.3c0 2.575 2.85 5.4 2.85 5.4h.002zm3.35-2.1c-.47 0-.85-.38-.85-.85s.38-.85.85-.85c.47 0 .85.38.85.85s-.38.85-.85.85z" 
      fill="#FFE873" 
    />
  </svg>
);

// Official HTML5 logo shield (orange)
export const HtmlIcon = () => (
  <svg 
    className="w-3.5 h-3.5 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0z" fill="#E34F26" />
    <path d="M12 2.2v19.6l6.8-1.9 1.5-16.4H12z" fill="#EF652A" />
    <path d="M12 9.6H8.4l-.2-2.8H12V4H5.2l.7 8.4H12v-2.8zM12 16.7l-3.3-.9-.2-2.3H5.7l.4 5 5.9 1.6v-3.4zM12 9.6h3.4l-.3 3.6-3.1.9v2.8l5.8-1.6.6-6.9H12v2.8z" fill="#FFF" />
  </svg>
);

// Official JavaScript logo (yellow square with black JS text)
export const JsIcon = () => (
  <svg 
    className="w-3.5 h-3.5 flex-shrink-0 rounded-sm" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <rect width="24" height="24" fill="#F7DF1E" />
    <path d="M18.7 18.5c-.8.8-2 1.2-3.2 1.2-2.3 0-3.6-1.1-4.2-2.5l2-1.2c.4.8 1.1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.6-1.5l-.7-.3c-2.1-.9-3.2-2-3.2-4.1 0-2.1 1.6-3.7 4-3.7 1.8 0 3.1.7 3.8 2.1l-1.9 1.2c-.4-.7-.9-1-1.8-1-.8 0-1.3.4-1.3.9 0 .6.4.8 1.3 1.2l.7.3c2.4 1 3.5 2 3.5 4.3 0 2.2-1.4 3.8-3.1 3.8zM8.3 20c-2.2 0-3.5-1.2-4-2.5l2-1.2c.3.7.8 1.2 1.7 1.2.7 0 1.2-.3 1.2-1.3V7.7h2.3v8.6c0 2.3-1.4 3.7-3.2 3.7z" fill="#000" />
  </svg>
);

// Official TypeScript logo (blue square with white TS text)
export const TsIcon = () => (
  <svg 
    className="w-3.5 h-3.5 flex-shrink-0 rounded-sm" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <rect width="24" height="24" fill="#3178C6" />
    <path d="M18.8 18.5c-.8.8-2 1.2-3.2 1.2-2.3 0-3.6-1.1-4.2-2.5l2-1.2c.4.8 1.1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.6-1.5l-.7-.3c-2.1-.9-3.2-2-3.2-4.1 0-2.1 1.6-3.7 4-3.7 1.8 0 3.1.7 3.8 2.1l-1.9 1.2c-.4-.7-.9-1-1.8-1-.8 0-1.3.4-1.3.9 0 .6.4.8 1.3 1.2l.7.3c2.4 1 3.5 2 3.5 4.3 0 2.2-1.4 3.8-3.1 3.8zM5.3 10H3V7.7h6.9V10H7.6v10H5.3V10z" fill="#FFF" />
  </svg>
);

// Official JSON curly braces icon (yellow)
export const JsonIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-[#cbcb41] flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3M14 19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3" />
  </svg>
);

// Official CSS3 logo shield (blue)
export const CssIcon = () => (
  <svg 
    className="w-3.5 h-3.5 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0z" fill="#1572B6" />
    <path d="M12 2.2v19.6l6.8-1.9 1.5-16.4H12z" fill="#33A9DC" />
    <path d="M12 9.6H6.1l.4 4.5h5.5v-4.5zM12 4.1H5.4l.2 2.7H12V4.1zM12 16.8l-3.3-.9-.2-2.3H5.7l.4 5 5.9 1.6v-3.4zM12 9.6h5.8l-.5 5.7-5.3 1.5v-2.8l2.7-.7.2-2.2H12V9.6zM12 4.1h6.3l-.2 2.7H12V4.1z" fill="#FFF" />
  </svg>
);

// Official Markdown icon (M↓ document layout)
export const MarkdownIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-[#58a6ff] flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 15V9l3 3 3-3v6M17 13l-2.5 2.5L12 13M14.5 15.5v-6" />
  </svg>
);

// Git logo (orange branch icon)
export const GitIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-[#f05032] flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

// Settings/Configuration slider icon representing environmental configuration variables
export const EnvIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-[#e5c07b] flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);
