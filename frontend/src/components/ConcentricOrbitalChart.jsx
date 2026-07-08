import React from 'react';

export const AI_TRACKS_DATA = [
  {
    radius: 46, speed: 25, reverse: false,
    nodes: [
      { name: "OpenAI", src: "/favicon.svg", angle: 0 },
      { name: "Claude", src: "/favicon.svg", angle: 180 }
    ]
  },
  {
    radius: 82, speed: 38, reverse: true,
    nodes: [
      { name: "HuggingFace", src: "/favicon.svg", angle: 0 },
      { name: "Gemini", src: "/favicon.svg", angle: 120 },
      { name: "Ollama", src: "/favicon.svg", angle: 240 }
    ]
  },
  {
    radius: 120, speed: 52, reverse: false,
    nodes: [
      { name: "PyTorch", src: "/favicon.svg", angle: 0 },
      { name: "TensorFlow", src: "/favicon.svg", angle: 90 },
      { name: "OpenCV", src: "/opencv.png", angle: 180 },
      { name: "LangChain", src: "/favicon.svg", angle: 270 }
    ]
  }
];

export const TECH_TRACKS_DATA = [
  {
    radius: 46, speed: 25, reverse: true,
    nodes: [
      { name: "JavaScript", src: "/html.png", angle: 0 },
      { name: "TypeScript", src: "/html.png", angle: 180 }
    ]
  },
  {
    radius: 82, speed: 38, reverse: false,
    nodes: [
      { name: "React", src: "/react.svg", angle: 0 },
      { name: "Next.js", src: "/html.png", angle: 120 },
      { name: "Tailwind CSS", src: "/tailwind.png", angle: 240 }
    ]
  },
  {
    radius: 120, speed: 52, reverse: true,
    nodes: [
      { name: "Python", src: "/python.png", angle: 0 },
      { name: "FastAPI", src: "/fastapi.png", angle: 72 },
      { name: "Django", src: "/django.png", angle: 144 },
      { name: "Docker", src: "/docker.png", angle: 216 },
      { name: "Kubernetes", src: "/kubernetes.png", angle: 288 }
    ]
  }
];

const OrbitalTrackNode = ({ name, iconSrc, angle, radius, speed, reverse }) => {
  const rad = (angle * Math.PI) / 180;
  const x = radius + radius * Math.cos(rad);
  const y = radius + radius * Math.sin(rad);

  const reverseStyle = {
    animation: `${reverse ? 'orbitSpinClockwise' : 'orbitSpinCounterClockwise'} ${speed}s linear infinite`,
  };

  return (
    <div
      className="orbital-node-slot"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className="orbital-node-icon" style={reverseStyle} title={name}>
        {iconSrc ? (
          <img src={iconSrc} alt={name} onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }} />
        ) : null}
        <span className="hidden text-[8px] font-bold text-gray-400 select-none uppercase font-mono">{name.slice(0, 2)}</span>
      </div>
    </div>
  );
};

export const ConcentricOrbitalChart = ({ centerLabel, tracks }) => {
  return (
    <div className="orbital-orbits-wrapper">
      <div className="orbital-center-badge">{centerLabel}</div>
      {tracks.map((track, trackIdx) => {
        const spinStyle = {
          width: `${track.radius * 2}px`,
          height: `${track.radius * 2}px`,
          animation: `${track.reverse ? 'orbitSpinCounterClockwise' : 'orbitSpinClockwise'} ${track.speed}s linear infinite`,
        };
        return (
          <div
            key={trackIdx}
            className="orbital-track-ring"
            style={{
              width: `${track.radius * 2}px`,
              height: `${track.radius * 2}px`,
            }}
          >
            <div className="orbital-spin-container" style={spinStyle}>
              {track.nodes.map((node, nodeIdx) => (
                <OrbitalTrackNode
                  key={nodeIdx}
                  name={node.name}
                  iconSrc={node.src}
                  angle={node.angle}
                  radius={track.radius}
                  speed={track.speed}
                  reverse={track.reverse}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ConcentricOrbitalChart;
