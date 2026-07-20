

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

// Monochrome Python logo (interlocking snakes in gray-300 shades)
export const PyIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path 
      d="M11.898 0C8.286 0 5.434 2.825 5.434 6.4c0 .324.03.639.068.95H11.9v1.3H2.8C1.25 8.65 0 9.875 0 11.4c0 1.55 1.25 2.75 2.8 2.75h2.6v-1.3c0-2.3 1.85-4.15 4.15-4.15h5.2v-3.3C14.75 2.825 11.9 0 11.9 0h-.002zm-3.35 2.1c.47 0 .85.38.85.85s-.38.85-.85.85c-.47 0-.85-.38-.85-.85s.38-.85.85-.85z" 
      fill="currentColor" 
    />
    <path 
      d="M12.1 24c3.612 0 6.464-2.825 6.464-6.4 0-.324-.03-.639-.068-.95H12.1v-1.3h9.1c1.55 0 2.8-1.225 2.8-2.75 0-1.55-1.25-2.75-2.8-2.75h-2.6v1.3c0 2.3-1.85 4.15-4.15 4.15h-5.2v3.3c0 2.575 2.85 5.4 2.85 5.4h.002zm3.35-2.1c-.47 0-.85-.38-.85-.85s.38-.85.85-.85c.47 0 .85.38.85.85s-.38.85-.85.85z" 
      fill="currentColor" 
      opacity="0.6"
    />
  </svg>
);

// Monochrome HTML5 outline logo shield with white '5'
export const HtmlIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L4 5v11c0 4.5 3.5 8 8 8s8-3.5 8-8V5l-8-3z" />
    <text x="7" y="16.5" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor" stroke="none">5</text>
  </svg>
);

// Monochrome JavaScript outline logo square with 'JS'
export const JsIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <text x="5" y="16" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="currentColor" stroke="none">JS</text>
  </svg>
);

// Monochrome TypeScript outline logo square with 'TS'
export const TsIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <text x="5" y="16" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="currentColor" stroke="none">TS</text>
  </svg>
);

// Monochrome JSON outline curly braces icon
export const JsonIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
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

// Monochrome CSS3 outline logo shield with '3'
export const CssIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L4 5v11c0 4.5 3.5 8 8 8s8-3.5 8-8V5l-8-3z" />
    <text x="7" y="16.5" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor" stroke="none">3</text>
  </svg>
);

// Monochrome Markdown icon
export const MarkdownIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
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

// Monochrome Git branch outline icon
export const GitIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
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

// Monochrome Settings/Configuration slider icon representing environmental configuration variables
export const EnvIcon = () => (
  <svg 
    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" 
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
