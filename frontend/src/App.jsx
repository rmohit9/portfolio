import { useEffect, useState, useRef } from 'react';
import './App.css';

const EXPANDED_SNAKE_MATRIX = [
  [1,0,0,0,1, 0,0, 0,1,1,1,0, 0,0, 1,0,0,0,1, 0,0, 1,1,1,1,1, 0,0, 1,1,1,1,1, 0,0,0,0, 0,0,0,0,0],
  [1,1,0,1,1, 0,0, 1,0,0,0,1, 0,0, 1,0,0,0,1, 0,0, 0,0,1,0,0, 0,0, 0,0,1,0,0, 0,0,0,0, 1,0,0,1,0],
  [1,0,1,0,1, 0,0, 1,0,0,0,1, 0,0, 1,1,1,1,1, 0,0, 0,0,1,0,0, 0,0, 0,0,1,0,0, 0,0,0,0, 0,0,0,0,0],
  [1,0,0,0,1, 0,0, 1,0,0,0,1, 0,0, 1,0,0,0,1, 0,0, 0,0,1,0,0, 0,0, 0,0,1,0,0, 0,0,0,0, 1,0,0,0,0],
  [1,0,0,0,1, 0,0, 0,1,1,1,0, 0,0, 1,0,0,0,1, 0,0, 1,1,1,1,1, 0,0, 0,0,1,0,0, 0,0,0,0, 0,1,1,0,0]
];

const TECH_ICONS = [
  { name: 'Python', src: '/python.png' },
  { name: 'FastAPI', src: '/fastapi.png' },
  { name: 'Tailwind', src: '/tailwind.png' },
  { name: 'Docker', src: '/docker.png' },
  { name: 'HTML5', src: '/html.png' },
  { name: 'CSS3', src: '/css.png' },
  { name: 'Django', src: '/django.png' },
  { name: 'Bootstrap', src: '/bootstrap.png' }
];

const AI_ICONS = [
  { name: 'OpenCV', src: '/opencv.png' },
  { name: 'Postman', src: '/postman.png' },
  { name: 'Flask', src: '/flask.png' },
  { name: 'Kubernetes', src: '/kubernetes.png' }
];

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home.tsx');
  const [snakePos, setSnakePos] = useState({ r: 0, c: 0 });
  const [snakeTrail, setSnakeTrail] = useState([]);
  
  const techCanvasRef = useRef(null);
  const aiCanvasRef = useRef(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/github-profile')
      .then((res) => res.json())
      .then((profileData) => {
        setData(profileData);
        setLoading(false);
      })
      .catch(() => {
        setData({
          profile: { name: "Mohit", bio: "Building intelligent and scalable software solutions", followers: 24, location: "India" },
          repos: [
            { id: 1, name: "agri-monitoring-iot", description: "ESP32 agricultural tracking tracking backend engine structures.", html_url: "#", language: "Python" },
            { id: 2, name: "hsr-motors-crm", description: "High-resolution automotive customer management interface systems.", html_url: "#", language: "JavaScript" }
          ]
        });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const rows = EXPANDED_SNAKE_MATRIX.length;
    const cols = EXPANDED_SNAKE_MATRIX[0].length;
    const interval = setInterval(() => {
      setSnakePos((prev) => {
        let nextR = prev.r;
        let nextC = prev.c;
        if (prev.r % 2 === 0) {
          if (prev.c < cols - 1) nextC++;
          else nextR = (prev.r + 1) % rows;
        } else {
          if (prev.c > 0) nextC--;
          else nextR = (prev.r + 1) % rows;
        }
        setSnakeTrail((trail) => [{ r: prev.r, c: prev.c }, ...trail].slice(0, 4));
        return { r: nextR, c: nextC };
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Helper template engine to handle independent spinning image spheres
  const initSphereAnimation = (canvas, iconList, speedX, speedY) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const radius = 90;

    const items = iconList.map((icon, idx) => {
      const img = new Image();
      img.src = icon.src;
      const phi = Math.acos(-1 + (2 * idx) / iconList.length);
      const theta = Math.sqrt(iconList.length * Math.PI) * phi;
      return { img, name: icon.name, x: radius * Math.sin(phi) * Math.cos(theta), y: radius * Math.sin(phi) * Math.sin(theta), z: radius * Math.cos(phi) };
    });

    let angleX = speedX, angleY = speedY, animId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2, cy = canvas.height / 2;
      items.sort((a, b) => b.z - a.z);

      items.forEach(item => {
        const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
        const x1 = item.x * cosY - item.z * sinY;
        const z1 = item.z * cosY + item.x * sinY;
        const y2 = item.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + item.y * sinX;
        item.x = x1; item.y = y2; item.z = z2;

        const scale = 240 / (240 + item.z);
        const size = 32 * scale;
        ctx.save();
        ctx.globalAlpha = Math.max(0.15, (item.z + radius) / (2 * radius));
        if (item.img.complete && item.img.naturalWidth !== 0) {
          ctx.drawImage(item.img, cx + item.x - size / 2, cy + item.y - size / 2, size, size);
        } else {
          ctx.fillStyle = '#6b6375';
          ctx.font = '10px monospace';
          ctx.fillText(item.name, cx + item.x - 12, cy + item.y);
        }
        ctx.restore();
      });
      animId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animId);
  };

  useEffect(() => {
    if (loading || activeTab !== 'home.tsx') return;
    const cleanTech = initSphereAnimation(techCanvasRef.current, TECH_ICONS, 0.004, 0.005);
    const cleanAI = initSphereAnimation(aiCanvasRef.current, AI_ICONS, -0.005, 0.004);
    return () => {
      if (cleanTech) cleanTech();
      if (cleanAI) cleanAI();
    };
  }, [loading, activeTab]);

  if (loading) return <div className="p-12 text-gray-500 font-mono text-center">// Initializing fullscreen environment...</div>;

  return (
    <div className="editor-shell select-none">
      
      {/* 1. MAIN APP WINDOW MENU HEADER */}
      <header className="editor-menu-bar justify-between">
        <div className="flex gap-4">
          <span className="text-[#f3f4f6] font-semibold">File</span>
          <span>Edit</span> <span>View</span> <span>Go</span> <span>Run</span> <span>Terminal</span> <span>Help</span>
        </div>
        <div className="text-xs bg-[#0d1117] px-8 py-1 rounded border border-[#2e303a] w-96 text-center truncate">
          mohit-raut : portfolio — src/app/home.tsx
        </div>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </header>

      {/* 2. SPLIT INTERFACE PANEL ROW */}
      <div className="editor-workspace">
        
        {/* SIDEBAR EXPLORER SPLIT VIEW */}
        <aside className="editor-sidebar hidden md:flex">
          <div className="p-3 font-bold tracking-wider text-gray-400 text-xs uppercase border-b border-[#2e303a]">
            Explorer: Portfolio
          </div>
          <div className="p-3 space-y-1">
            <div className="text-[#c084fc] font-medium">📁 src</div>
            <div className="pl-4 space-y-1">
              <div className="text-gray-400">📁 app</div>
              <div className={`pl-4 cursor-pointer flex items-center gap-1.5 ${activeTab === 'home.tsx' ? 'text-[#f3f4f6] font-semibold' : 'text-gray-500'}`} onClick={() => setActiveTab('home.tsx')}>
                ⚛️ home.tsx
              </div>
              <div className={`pl-4 cursor-pointer flex items-center gap-1.5 ${activeTab === 'projects.js' ? 'text-[#f3f4f6] font-semibold' : 'text-gray-500'}`} onClick={() => setActiveTab('projects.js')}>
                💛 projects.js
              </div>
              <div className="text-gray-500 pl-4">📝 skills.json</div>
            </div>
            <div className="text-gray-400">📁 config</div>
            <div className="text-gray-500 pl-4">⚙️ .gitignore</div>
          </div>
        </aside>

        {/* WORKSPACE CODE VIEWER PANEL */}
        <main className="editor-main-panel">
          
          {/* CONTROL TAB LINK ROW */}
          <div className="editor-tabs-bar">
            <div className={`editor-tab ${activeTab === 'home.tsx' ? 'active' : ''}`} onClick={() => setActiveTab('home.tsx')}>
              <span>⚛️ home.tsx</span>
            </div>
            <div className={`editor-tab ${activeTab === 'projects.js' ? 'active' : ''}`} onClick={() => setActiveTab('projects.js')}>
              <span>💛 projects.js</span>
            </div>
          </div>

          {/* DYNAMIC SCROLL CONTAINER SPACE */}
          <div className="editor-content-scroll">
            {activeTab === 'home.tsx' ? (
              <div className="space-y-8 animate-fadeIn">
                
                {/* HERO HEADING VIEW */}
                <div className="text-left space-y-3">
                  <span className="text-xs font-mono text-[#c084fc] block">// welcome to my interactive frontend core layer shell</span>
                  <h1 className="text-5xl font-black text-[#f3f4f6] tracking-tight m-0">
                    {data.profile.name} <span className="text-gray-600 font-light text-2xl">/ Engineer</span>
                  </h1>
                  <p className="text-md text-gray-400 font-mono max-w-2xl leading-relaxed m-0">
                    {data.profile.bio}
                  </p>
                </div>

                {/* CENTERED SNAKE COMMIT MATRIX OVERVIEW */}
                <div className="matrix-wrapper">
                  <div className="matrix-container">
                    {EXPANDED_SNAKE_MATRIX.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-[5px]">
                        {row.map((cell, cIdx) => {
                          let cellClass = "bg-[#1f2028]";
                          if (cell === 1) cellClass = "bg-[#0e4429]";

                          if (snakePos.r === rIdx && snakePos.c === cIdx) cellClass = "cell-snake-head";
                          else if (snakeTrail[0] && snakeTrail[0].r === rIdx && snakeTrail[0].c === cIdx) cellClass = "cell-snake-t1";
                          else if (snakeTrail[1] && snakeTrail[1].r === rIdx && snakeTrail[1].c === cIdx) cellClass = "cell-snake-t2";
                          else if (snakeTrail[2] && snakeTrail[2].r === rIdx && snakeTrail[2].c === cIdx) cellClass = "cell-snake-t3";

                          return <div key={cIdx} className={`matrix-cell flex-shrink-0 ${cellClass}`} />;
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* REFACTORED ADAPTIVE CARD HIGHLIGHT BARS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "3+", label: "YEARS EXPERT" },
                    { value: `${data.repos.length}+`, label: "ACTIVE PACKAGES" },
                    { value: "∞", label: "CURIOSITY THREAD" },
                    { value: "↑", label: "ALWAYS SCALING" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#16171d] border border-[#2e303a] rounded-xl p-5 text-center">
                      <div className="text-3xl font-extrabold text-[#f3f4f6] font-mono">{stat.value}</div>
                      <div className="text-[10px] tracking-widest text-gray-500 font-mono uppercase mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* PLACEMENT FOR BALANCED SPLIT 3D LOGO SPHERES */}
                <div className="orbs-layout-grid">
                  <div className="orb-card-frame">
                    <div className="w-full text-left text-xs font-mono text-[#6b6375] mb-4">// Tools Stack I Use</div>
                    <canvas ref={techCanvasRef} width={260} height={260} className="w-full max-w-[260px]" />
                  </div>
                  <div className="orb-card-frame">
                    <div className="w-full text-left text-xs font-mono text-[#6b6375] mb-4">// Core Framework Frameworks</div>
                    <canvas ref={aiCanvasRef} width={260} height={260} className="w-full max-w-[260px]" />
                  </div>
                </div>

              </div>
            ) : (
              /* CLEAN ARCHITECTURE GRID MATCHING PROJECTS OUTLINE VIEW */
              <div className="text-left space-y-6 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-bold text-[#f3f4f6] font-mono m-0 border-b-0 p-0">// Repositories Index Data</h2>
                  <p className="text-xs text-gray-500 mt-1">Live synchronized data packets pulled via FastAPI endpoints.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.repos.map((repo) => (
                    <div key={repo.id} className="bg-[#16171d] border border-[#2e303a] rounded-xl p-6 flex flex-col justify-between hover:border-[#c084fc]/50 transition-all duration-300">
                      <div>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-[#58a6ff] font-mono font-bold text-base hover:underline truncate block">
                          {repo.name}
                        </a>
                        <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                          {repo.description || "No description overview compiled for this open source repository configuration block."}
                        </p>
                      </div>
                      <div className="mt-6 pt-3 border-t border-[#2e303a]/40 flex items-center text-[11px] font-mono text-gray-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc] mr-2" />
                        {repo.language || "System Logic"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* 3. SYSTEM STATS FOOTER BAR */}
      <footer className="editor-status-bar font-mono">
        <div className="flex gap-4 items-center">
          <span className="bg-[#16171d] text-[#27c93f] px-2 py-0.5 rounded text-[10px] font-bold">✔ main*</span>
          <span>Environment: Production</span>
          <span>Port: 5173</span>
        </div>
        <div className="flex gap-6">
          <span>Engine: React Vite</span>
          <span>Prettier: Active</span>
          <span>Origin: {data.profile.location}</span>
        </div>
      </footer>

    </div>
  );
}

export default App;