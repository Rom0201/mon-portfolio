import { useEffect, useRef } from "react";

const HalftoneBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "?01#@%&アイウエオ";
    let animId: number;
    let time = 5;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      time += 0.004;

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.5;
      const numRings = 16;

      for (let ring = 0; ring < numRings; ring++) {
        const t = (ring / numRings + time * 0.15) % 1;
        const radius = t * maxRadius;
        const fontSize = 4 + t * 14;

        const fadeIn = Math.min(1, t * 4);
        const fadeOut = Math.min(1, (1 - t) * 3);
        const opacity = fadeIn * fadeOut * 0.85;

        if (opacity < 0.02) continue;

        ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

        const numSegments = 2 + Math.floor(t * 3);
        const gapAngle = 0.4;
        const rotationSpeed = (1 - t) * 0.5;

        for (let seg = 0; seg < numSegments; seg++) {
          const segStart = (seg / numSegments) * Math.PI * 2 + time * rotationSpeed;
          const segEnd = segStart + (Math.PI * 2 / numSegments) - gapAngle;
          const circumference = (segEnd - segStart) * radius;
          const numChars = Math.max(2, Math.floor(circumference / (fontSize + 2)));

          for (let i = 0; i < numChars; i++) {
            const angle = segStart + (i / Math.max(1, numChars - 1)) * (segEnd - segStart);
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;

            const charIndex = Math.floor((Math.sin(ring * 5 + i * 3 + seg * 7 + time * 0.5) + 1) * chars.length / 2) % chars.length;

            ctx.fillStyle = `rgba(0, 150, 255, ${opacity})`;
            ctx.fillText(chars[charIndex], x, y);
          }
        }
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
};

export default HalftoneBackground;