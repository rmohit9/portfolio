


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
