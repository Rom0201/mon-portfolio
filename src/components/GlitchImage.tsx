import { useState, useEffect } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const GlitchImage = ({ src, alt, onClick, style }: GlitchImageProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 50),
      setTimeout(() => setPhase(2), 150),
      setTimeout(() => setPhase(3), 250),
      setTimeout(() => setPhase(4), 350),
    ];
    return () => timers.forEach(clearTimeout);
  }, [src]);

  const scanLineTop = `${(phase / 4) * 100}%`;

  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{
          width: "100%",
          display: "block",
          filter: phase < 4 ? `hue-rotate(${(4 - phase) * 60}deg) saturate(${1 + (4 - phase) * 2})` : "none",
          clipPath:
            phase === 0
              ? "inset(0 0 100% 0)"
              : phase === 1
              ? "inset(20% 0 40% 0)"
              : phase === 2
              ? "inset(0 10% 0 0)"
              : phase === 3
              ? "inset(0 0 5% 0)"
              : "inset(0 0 0 0)",
          transform: phase === 1 ? "translateX(-4px)" : phase === 2 ? "translateX(3px)" : "translateX(0)",
          transition: phase === 4 ? "filter 0.2s, clip-path 0.2s, transform 0.2s" : "none",
        }}
      />
      {phase < 4 && (
        <div>
          <div
            style={{
              position: "absolute",
              top: scanLineTop,
              left: 0,
              width: "100%",
              height: "2px",
              background: "#00e5ff",
              boxShadow: "0 0 10px #00e5ff",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.05) 2px, rgba(0,229,255,0.05) 4px)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GlitchImage;