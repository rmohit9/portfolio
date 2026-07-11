import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Import Custom Modular Components
import FileExplorer from './components/FileExplorer';
import TargetCursor from './components/TargetCursor';
import CommandPalette from './components/CommandPalette';
import {
  PyIcon,
  HtmlIcon,
  JsIcon,
  TsIcon,
  JsonIcon,
  CssIcon,
  MarkdownIcon,
  GitIcon,
  EnvIcon
} from './components/Icons';

// Import Pages/Views
import HomeView from './components/pages/HomeView';
import AboutView from './components/pages/AboutView';
import ProjectsView from './components/pages/ProjectsView';
import SkillsView from './components/pages/SkillsView';
import ExperienceView from './components/pages/ExperienceView';
import ContactView from './components/pages/ContactView';
import GitignoreView from './components/pages/GitignoreView';

const routeToFileMap = {
  '/': 'home.py',
  '/home': 'home.py',
  '/about': 'about.html',
  '/projects': 'projects.js',
  '/skills': 'skills.json',
  '/experience': 'experience.ts',
  '/contact': 'contact.css',
  '/readme': 'README.md',
  '/hobbies': 'hobbies.md',
  '/gitignore': '.gitignore',
  '/env': '.env'
};

const fileToRouteMap = {
  'home.py': '/home',
  'about.html': '/about',
  'projects.js': '/projects',
  'skills.json': '/skills',
  'experience.ts': '/experience',
  'contact.css': '/contact',
  'README.md': '/readme',
  'hobbies.md': '/hobbies',
  '.gitignore': '/gitignore',
  '.env': '/env'
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const activeTab = routeToFileMap[location.pathname] || 'home.py';
  const [openTabs, setOpenTabs] = useState(['home.py', 'projects.js']);
  const [theme, setTheme] = useState('mohit');
  const [activeSidebar, setActiveSidebar] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [commitMessage, setCommitMessage] = useState('');
  const [isCommitted, setIsCommitted] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Global keyboard shortcut listener for Ctrl+P / Cmd+P
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync route path changes to open tabs
  useEffect(() => {
    const currentPath = location.pathname;
    const fileName = routeToFileMap[currentPath] || 'home.py';
    if (!openTabs.includes(fileName)) {
      setOpenTabs((prev) => [...prev, fileName]);
    }
  }, [location.pathname]);

  // Fetch GitHub profile from FastAPI backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/github-profile')
      .then((res) => res.json())
      .then((profileData) => {
        setData(profileData);
        setLoading(false);
      })
      .catch(() => {
        setData({
          profile: { 
            name: "Mohit Raut", 
            bio: "Building intelligent and scalable AI Solutions", 
            followers: 24, 
            location: "fulltime-Nagpur, Part-time-Hyderabad" 
          },
          repos: [
            { id: 1, name: "Caption-Generator", description: "A deep learning model base that generates captions for images.", html_url: "https://github.com/rmohit9/Caption-Generator", language: "JavaScript" },
            { id: 2, name: "Faq_RAG_Chatbot", description: "A Retrieval-Augmented Generation chatbot system configured to answer FAQs utilizing vector storage matching.", html_url: "https://github.com/rmohit9/Faq_RAG_Chatbot", language: "HTML" }
          ]
        });
        setLoading(false);
      });
  }, []);

  const handleFileClick = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    const route = fileToRouteMap[fileName] || '/home';
    navigate(route);
  };

  const handleCloseTab = (fileName, e) => {
    e.stopPropagation();
    const updatedTabs = openTabs.filter(t => t !== fileName);
    setOpenTabs(updatedTabs);
    if (activeTab === fileName && updatedTabs.length > 0) {
      const lastTab = updatedTabs[updatedTabs.length - 1];
      const route = fileToRouteMap[lastTab] || '/home';
      navigate(route);
    } else if (updatedTabs.length === 0) {
      navigate('/home');
    }
  };


  const handleCommitSubmit = () => {
    if (!commitMessage.trim()) return;
    setIsCommitted(true);
    setCommitMessage('');
    setTimeout(() => {
      setIsCommitted(false);
    }, 1500);
  };

  if (loading) return <div className="p-12 text-gray-500 font-mono text-center">// Initializing fullscreen environment...</div>;

  return (
    <div className={`editor-shell select-none theme-${theme}`}>
      <TargetCursor />
      
      {/* 1. TOP APP MENU ACTION BAR */}
      <header className="editor-menu-bar justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:opacity-80" onClick={() => alert("Close layout simulation window?")} />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer hover:opacity-80" onClick={() => setActiveSidebar(activeSidebar ? null : 'explorer')} />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer hover:opacity-80" onClick={() => document.documentElement.requestFullscreen().catch(() => {})} />
          </div>
          <div className="hidden md:flex gap-3 text-gray-400 font-normal">
            <span className="text-gray-300 font-semibold cursor-pointer hover:text-white">File</span>
            <span className="cursor-pointer hover:text-white">Edit</span>
            <span className="cursor-pointer hover:text-white">View</span>
            <span className="cursor-pointer hover:text-white">Go</span>
            <span className="cursor-pointer hover:text-white">Run</span>
            <span className="cursor-pointer hover:text-white">Terminal</span>
            <span className="cursor-pointer hover:text-white">Help</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] bg-[#0d1117]/80 hover:bg-[#0d1117] px-2.5 py-0.5 rounded border border-[#2e303a]/60 w-56 md:w-72 text-left cursor-pointer transition-colors relative h-6" onClick={() => setIsSearchModalOpen(true)}>
          <span className="text-gray-400 truncate font-mono text-center w-full pr-6">rmohit9 : portfolio</span>
          <span className="absolute right-1.5 top-0.5 text-[9px] text-gray-500 bg-gray-800/80 px-1 py-0.1 rounded border border-gray-700">Ctrl P</span>
        </div>

        <div className="flex gap-3 text-gray-400 items-center">
          <button className="hover:text-white p-1 cursor-pointer transition-colors" title="Toggle Sidebar" onClick={() => setActiveSidebar(activeSidebar ? null : 'explorer')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="h-4 w-px bg-gray-700"></span>
          <span className="text-[10px] text-gray-500 font-mono tracking-wider">v15.0</span>
        </div>
      </header>

      {/* 2. SPLIT INTERFACE PANEL ROW */}
      <div className="editor-workspace">
        
        {/* ACTIVITY BAR DRAWER */}
        <nav className="activity-bar">
          <div className="activity-group">
            <div className={`activity-icon ${activeSidebar === 'explorer' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'explorer' ? null : 'explorer')} title="Explorer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 4H4v16h12V4z" /><path d="M8 2h10v16M20 6h-2M20 10h-2" /></svg>
            </div>
            <div className={`activity-icon ${isSearchModalOpen ? 'active' : ''}`} onClick={() => setIsSearchModalOpen(true)} title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'git' ? null : 'git')} title="Source Control">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a4 4 0 0 0-4-4H9" /><line x1="6" y1="9" x2="6" y2="15" /></svg>
              <span className="activity-icon-badge">3</span>
            </div>
            <div className={`activity-icon ${activeSidebar === 'debug' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'debug' ? null : 'debug')} title="Run and Debug">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M8 5v14l11-7z" /><path d="M12 2v3M12 19v3M5 12h3M16 12h3" /></svg>
            </div>
            <div className={`activity-icon ${activeSidebar === 'extensions' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'extensions' ? null : 'extensions')} title="Extensions">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect x="4" y="13" width="6" height="6" /><rect x="13" y="4" width="6" height="6" /><rect x="13" y="13" width="6" height="6" /><rect x="5" y="5" width="4" height="4" strokeWidth="1.2" /></svg>
            </div>
          </div>
          
          <div className="activity-group">
            <div className={`activity-icon ${activeSidebar === 'coffee' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'coffee' ? null : 'coffee')} title="Support / Sponsor">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="2" x2="6" y2="5" /><line x1="10" y1="2" x2="10" y2="5" /><line x1="14" y1="2" x2="14" y2="5" /></svg>
            </div>
            <div className={`activity-icon ${activeSidebar === 'settings' ? 'active' : ''}`} onClick={() => setActiveSidebar(activeSidebar === 'settings' ? null : 'settings')} title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </div>
          </div>
        </nav>

        {/* SIDEBAR MAIN DRAWER VIEW */}
        <aside className={`editor-sidebar ${!activeSidebar ? 'collapsed' : ''}`}>
          <div className={`p-2.5 px-3 pb-1 font-bold tracking-wider text-gray-400 text-[10px] uppercase flex justify-between items-center ${activeSidebar === 'explorer' ? 'pb-2' : 'border-b border-[#2e303a]'}`}>
            <span>
              {activeSidebar === 'explorer' && "PORTFOLIO"}
              {activeSidebar === 'search' && "Search Workspace"}
              {activeSidebar === 'git' && "Source Control (Git)"}
              {activeSidebar === 'debug' && "Run and Debug"}
              {activeSidebar === 'extensions' && "Extensions Marketplace"}
              {activeSidebar === 'coffee' && "Sponsor / Support"}
              {activeSidebar === 'settings' && "Preferences: Themes"}
            </span>
            <button className="text-gray-500 hover:text-gray-200 cursor-pointer" onClick={() => setActiveSidebar(null)}>×</button>
          </div>

          <div className={`flex-1 ${activeSidebar === 'explorer' ? 'flex flex-col overflow-hidden' : 'overflow-y-auto'}`}>
            {activeSidebar === 'explorer' && (
              <div className="p-2.5 pt-0 flex-1 flex flex-col overflow-hidden">
                <div className="border border-[#2e303a]/75 rounded-lg p-2 bg-[#0d1117]/35 flex-1 overflow-y-auto">
                  <FileExplorer activeTab={activeTab} handleFileClick={handleFileClick} />
                </div>
              </div>
            )}

            {activeSidebar === 'search' && (
              <div>
                <input type="text" placeholder="Search text in workspace..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input-field" />
                <div className="search-results-list">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 px-2">Files Containing Matches</div>
                  {[
                    { file: 'home.py', text: 'welcome to my interactive frontend shell', line: 1 },
                    { file: 'projects.js', text: 'Live synchronized repositories data', line: 2 },
                    { file: 'skills.json', text: '"React", "FastAPI", "Docker"', line: 4 },
                    { file: 'experience.ts', text: '3+ Years Expert System Architect', line: 1 },
                    { file: 'about.html', text: 'Bio profile info overview', line: 10 }
                  ]
                  .filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()) || item.file.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, idx) => (
                    <div key={idx} className="search-item" onClick={() => handleFileClick(item.file)}>
                      <div className="flex justify-between text-xs text-[#58a6ff] font-semibold">
                        <span>{item.file}</span>
                        <span className="text-[10px] text-gray-500">line {item.line}</span>
                      </div>
                      <div className="text-[11px] text-gray-400 mt-1 font-mono truncate">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSidebar === 'git' && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="git-changes-title">Changes (Simulated Git Engine)</div>
                  <div className="git-changes-list">
                    <div className="git-item text-yellow-500 hover:bg-white/5">
                      <span className="font-mono">✍ App.jsx</span>
                      <span className="text-[10px] bg-yellow-500/10 px-1 border border-yellow-500/30 rounded font-bold">M</span>
                    </div>
                    <div className="git-item text-yellow-500 hover:bg-white/5">
                      <span className="font-mono">✍ App.css</span>
                      <span className="text-[10px] bg-yellow-500/10 px-1 border border-yellow-500/30 rounded font-bold">M</span>
                    </div>
                  </div>
                </div>

                <div className="git-commit-container">
                  <textarea placeholder="Message..." value={commitMessage} onChange={(e) => setCommitMessage(e.target.value)} className="git-commit-input" />
                  <button onClick={handleCommitSubmit} disabled={isCommitted} className="git-commit-btn">
                    {isCommitted ? "Syncing commits..." : "Commit changes"}
                  </button>
                </div>
              </div>
            )}

            {activeSidebar === 'debug' && (
              <div className="p-4 space-y-4">
                <button className="flex items-center justify-center gap-2 bg-[#27c93f] hover:bg-[#20a332] text-black font-extrabold w-full py-2 rounded text-xs cursor-pointer shadow-md" onClick={() => alert("Simulated debugger started! Port listening at 5174.")}>
                  Run & Debug (Vite)
                </button>
                <div className="space-y-3 font-mono text-xs">
                  <div className="border-b border-[#2e303a] pb-1.5 text-gray-400 font-bold uppercase tracking-wider text-[10px]">Variables</div>
                  <div className="pl-2 space-y-1">
                    <div><span className="text-[#c084fc]">env</span>: "production"</div>
                    <div><span className="text-[#c084fc]">port</span>: 5174</div>
                    <div><span className="text-[#c084fc]">database</span>: "connected"</div>
                    <div><span className="text-[#c084fc]">activeTheme</span>: "{theme}"</div>
                  </div>
                </div>
              </div>
            )}

            {activeSidebar === 'extensions' && (
              <div className="extensions-grid">
                {[
                  { name: "React Framework", version: "v19.2", desc: "Core declarative library for reactive component trees.", rating: "★★★★★", insts: "148M", icon: "⚛️" },
                  { name: "Tailwind CSS Manager", version: "v4.0", desc: "Utility-first design engine tokens decorator.", rating: "★★★★★", insts: "94M", icon: "🎨" },
                  { name: "FastAPI Backend", version: "v0.111", desc: "High performance asynchronous API core client helper.", rating: "★★★★☆", insts: "42M", icon: "⚡" }
                ].map((ext, idx) => (
                  <div key={idx} className="extension-card">
                    <div className="extension-icon-frame">{ext.icon}</div>
                    <div className="extension-details">
                      <div className="extension-name">{ext.name}</div>
                      <p className="extension-desc">{ext.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSidebar === 'coffee' && (
              <div className="p-4 space-y-4 text-center">
                <span className="text-4xl text-[#c084fc]">☕</span>
                <h3 className="text-sm font-bold text-gray-300">Support Mohit</h3>
                <a href="#sponsor" className="block w-full py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded text-xs font-bold font-mono transition-colors">Buy Me a Coffee</a>
              </div>
            )}

            {activeSidebar === 'settings' && (
              <div className="flex flex-col h-full justify-between">
                <div className="p-3 space-y-4">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Color Themes</div>
                    <div className="space-y-1">
                      {[
                        { id: 'mohit', label: 'Mohit Dark', icon: '💜' },
                        { id: 'onedark', label: 'One Dark Pro', icon: '💙' },
                        { id: 'synthwave', label: 'Synthwave \'84', icon: '💗' },
                        { id: 'dracula', label: 'Dracula Classic', icon: '💙' },
                        { id: 'github', label: 'GitHub Dark', icon: '💙' },
                        { id: 'nord', label: 'Nord Frost', icon: '🩵' },
                        { id: 'gruvbox', label: 'Gruvbox Rust', icon: '🧡' }
                      ].map((themeOpt) => (
                        <button 
                          key={themeOpt.id} 
                          onClick={() => setTheme(themeOpt.id)} 
                          className={`theme-button font-mono text-[11px] ${theme === themeOpt.id ? 'active' : ''}`}
                        >
                          <span className="mr-2">{themeOpt.icon}</span> {themeOpt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Quick Actions</div>
                    <div className="space-y-1 font-mono text-[11px]">
                      <div className="flex justify-between items-center px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300" onClick={() => alert("Downloading resume...")}>
                        <span>📥 Download Resume</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-t border-[#2e303a]/60 text-[9.5px] font-mono text-gray-500 space-y-0.5">
                  <div>Portfolio v3.0 - React + Vite + Tailwind</div>
                  <div>Made with 💖 by <span className="text-[#58a6ff]">Mohit Raut</span></div>
                </div>
              </div>
            )}
          </div>

        </aside>

        {/* WORKSPACE CODE VIEWER PANEL */}
        <main className="editor-main-panel">
          
          <div className="editor-tabs-bar">
            {openTabs.map((tab) => (
              <div key={tab} className={`editor-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => handleFileClick(tab)}>
                <span className="flex items-center gap-1.5 select-none">
                  {tab === 'home.py' && <PyIcon />}
                  {tab === 'projects.js' && <JsIcon />}
                  {tab === 'skills.json' && <JsonIcon />}
                  {tab === 'about.html' && <HtmlIcon />}
                  {tab === 'experience.ts' && <TsIcon />}
                  {tab === 'contact.css' && <CssIcon />}
                  {tab === 'README.md' && <MarkdownIcon />}
                  {tab === 'hobbies.md' && <MarkdownIcon />}
                  {tab === '.gitignore' && <GitIcon />}
                  {tab === '.env' && <EnvIcon />}
                  <span>{tab}</span>
                </span>
                <span className="text-gray-500 hover:text-white ml-2 text-[10px] cursor-pointer font-bold select-none" onClick={(e) => handleCloseTab(tab, e)}>×</span>
              </div>
            ))}
          </div>

          {/* Breadcrumb path */}
          <div className="bg-[#16171d]/20 border-b border-[#2e303a] px-4 py-1 text-[11px] text-gray-500 flex gap-2 font-mono">
            <span>rmohit9</span>
            <span>&gt;</span>
            <span>src</span>
            <span>&gt;</span>
            <span>app</span>
            <span>&gt;</span>
            <span className="text-gray-400 font-semibold">{activeTab}</span>
          </div>

          {/* Line numbers gutter and Content viewport */}
          <div className="editor-code-container">
            <div className="editor-gutter">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="editor-gutter-line">{i + 1}</span>
              ))}
            </div>

            <div className="editor-workspace-file-content">
              {activeTab === 'home.py' && (
                <HomeView handleFileClick={handleFileClick} />
              )}

              {activeTab === 'projects.js' && (
                <ProjectsView data={data} />
              )}

              {activeTab === 'skills.json' && (
                <SkillsView />
              )}

              {activeTab === 'about.html' && (
                <AboutView data={data} />
              )}

              {activeTab === 'experience.ts' && (
                <ExperienceView />
              )}

              {activeTab === 'contact.css' && (
                <ContactView data={data} />
              )}

              {activeTab === '.gitignore' && (
                <GitignoreView />
              )}

              {activeTab === 'README.md' && (
                <div className="font-mono text-xs text-gray-300 text-left space-y-4 animate-fadeIn md:max-w-2xl">
                  <span className="text-[#6a9955]">// README.md - Description</span>
                  <pre className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-xl overflow-x-auto leading-relaxed">
                    {`# Mohit Raut Portfolio

An interactive VS Code-inspired personal portfolio developer template.
Built using React, FastAPI, and Tailwind CSS.
Includes orbital tech visualizations and canvas gravity animations.`}
                  </pre>
                </div>
              )}

              {activeTab === 'hobbies.md' && (
                <div className="font-mono text-xs text-gray-300 text-left space-y-4 animate-fadeIn md:max-w-2xl">
                  <span className="text-[#6a9955]">// hobbies.md - Outside of work interest</span>
                  <div className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-xl space-y-3">
                    <p>🎮 Gaming & Simulation engines</p>
                    <p>📚 Technical blogs, AI research papers</p>
                    <p>✈ Exploring geography & historical architectural frameworks</p>
                    <p>☕ Gourmet coffee roasting experiments</p>
                  </div>
                </div>
              )}

              {activeTab === '.env' && (
                <div className="font-mono text-xs text-gray-300 text-left space-y-4 animate-fadeIn md:max-w-2xl">
                  <span className="text-[#6a9955]"># Environment Configuration variables</span>
                  <pre className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-xl overflow-x-auto text-[#cbcb41]">
                    {`PORT=5174
NODE_ENV=production
REACT_APP_API_URL=http://localhost:8000
GITHUB_USER=rmohit9`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* 3. SYSTEM STATS FOOTER BAR */}
      <footer className="editor-status-bar font-mono">
        <div className="flex gap-4 items-center">
          <span className="bg-[#16171d]/60 text-[#27c93f] px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            main*
          </span>
          <span className="hidden sm:inline">Environment: production</span>
          <span className="hidden sm:inline">Port: 5174</span>
          <span className="text-purple-400 hover:text-purple-300 cursor-pointer flex items-center gap-1" onClick={() => setActiveSidebar('git')}>
            <span>🔀</span> Sync
          </span>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <span className="hidden md:inline">Language: {
            activeTab.endsWith('.tsx') ? 'TypeScript React' :
            activeTab.endsWith('.js') ? 'JavaScript' :
            activeTab.endsWith('.html') ? 'HTML' :
            activeTab.endsWith('.ts') ? 'TypeScript' :
            activeTab.endsWith('.css') ? 'CSS' : 'JSON'
          }</span>
          <span>UTF-8</span>
          <span className="hidden sm:inline">LF</span>
          <span className="bg-purple-600/30 px-2 py-0.5 rounded text-[10px] text-purple-200 flex items-center gap-1 font-bold">
            ❤️ Mohit Dark
          </span>
          <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
        </div>
      </footer>

      <CommandPalette 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
        onFileSelect={(fileName) => {
          handleFileClick(fileName);
          setIsSearchModalOpen(false);
        }} 
      />
    </div>
  );
}

export default App;