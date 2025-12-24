"use client";

import { useEffect, useRef, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  animationDelay: number;
  animationDuration: number;
}

interface OrbitPath {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  opacity: number;
}

export function StaggerVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Star colors - real stars have different temperatures/colors
  const starColors = [
    'rgba(255, 255, 255, 1)',     // white (most common)
    'rgba(255, 250, 245, 1)',     // warm white
    'rgba(200, 220, 255, 1)',     // blue-white (hot stars)
    'rgba(255, 240, 220, 1)',     // yellow-white
    'rgba(180, 200, 255, 1)',     // pale blue
  ];

  // Generate stars - more stars, varying brightness
  const stars: Star[] = useMemo(() => {
    const generated: Star[] = [];
    // Background dim stars (many small ones)
    for (let i = 0; i < 100; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        twinkleDelay: Math.random() * 8,
        twinkleDuration: Math.random() * 4 + 3,
      });
    }
    // Medium stars
    for (let i = 100; i < 160; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 1,
        opacity: Math.random() * 0.5 + 0.4,
        twinkleDelay: Math.random() * 6,
        twinkleDuration: Math.random() * 3 + 2,
      });
    }
    // Bright prominent stars (fewer)
    for (let i = 160; i < 180; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.3 + 0.7,
        twinkleDelay: Math.random() * 4,
        twinkleDuration: Math.random() * 2 + 1.5,
      });
    }
    return generated;
  }, []);

  // Color palette for planets - space themed blues with accents
  const planets: Planet[] = [
    // Large planets
    { id: 1, x: 8, y: 25, size: 16, color: 'rgba(59, 130, 246, 0.9)', glowColor: 'rgba(59, 130, 246, 0.4)', animationDelay: 0, animationDuration: 45 },
    { id: 2, x: 85, y: 35, size: 20, color: 'rgba(96, 165, 250, 0.85)', glowColor: 'rgba(96, 165, 250, 0.35)', animationDelay: 5, animationDuration: 55 },
    { id: 3, x: 75, y: 75, size: 14, color: 'rgba(147, 197, 253, 0.9)', glowColor: 'rgba(147, 197, 253, 0.4)', animationDelay: 2, animationDuration: 40 },

    // Medium planets with accent colors
    { id: 4, x: 15, y: 70, size: 12, color: 'rgba(34, 197, 94, 0.85)', glowColor: 'rgba(34, 197, 94, 0.35)', animationDelay: 3, animationDuration: 35 },
    { id: 5, x: 92, y: 60, size: 10, color: 'rgba(251, 146, 60, 0.9)', glowColor: 'rgba(251, 146, 60, 0.4)', animationDelay: 1, animationDuration: 38 },
    { id: 6, x: 25, y: 45, size: 11, color: 'rgba(248, 113, 113, 0.85)', glowColor: 'rgba(248, 113, 113, 0.35)', animationDelay: 4, animationDuration: 42 },
    { id: 7, x: 60, y: 20, size: 13, color: 'rgba(250, 204, 21, 0.9)', glowColor: 'rgba(250, 204, 21, 0.4)', animationDelay: 2.5, animationDuration: 48 },
    { id: 8, x: 40, y: 80, size: 9, color: 'rgba(192, 132, 252, 0.85)', glowColor: 'rgba(192, 132, 252, 0.35)', animationDelay: 3.5, animationDuration: 36 },

    // Small planets/moons
    { id: 9, x: 5, y: 50, size: 6, color: 'rgba(147, 197, 253, 0.8)', glowColor: 'rgba(147, 197, 253, 0.3)', animationDelay: 1.5, animationDuration: 30 },
    { id: 10, x: 35, y: 15, size: 7, color: 'rgba(59, 130, 246, 0.85)', glowColor: 'rgba(59, 130, 246, 0.35)', animationDelay: 0.5, animationDuration: 32 },
    { id: 11, x: 70, y: 50, size: 8, color: 'rgba(96, 165, 250, 0.8)', glowColor: 'rgba(96, 165, 250, 0.3)', animationDelay: 2, animationDuration: 28 },
    { id: 12, x: 50, y: 55, size: 5, color: 'rgba(34, 197, 94, 0.8)', glowColor: 'rgba(34, 197, 94, 0.3)', animationDelay: 4.5, animationDuration: 34 },
    { id: 13, x: 20, y: 88, size: 6, color: 'rgba(251, 146, 60, 0.8)', glowColor: 'rgba(251, 146, 60, 0.3)', animationDelay: 1, animationDuration: 26 },
    { id: 14, x: 95, y: 15, size: 7, color: 'rgba(192, 132, 252, 0.8)', glowColor: 'rgba(192, 132, 252, 0.3)', animationDelay: 3, animationDuration: 38 },
    { id: 15, x: 55, y: 90, size: 5, color: 'rgba(248, 113, 113, 0.75)', glowColor: 'rgba(248, 113, 113, 0.25)', animationDelay: 2, animationDuration: 30 },
  ];

  // Orbital paths
  const orbits: OrbitPath[] = [
    { cx: 50, cy: 50, rx: 45, ry: 25, rotation: -20, opacity: 0.15 },
    { cx: 50, cy: 50, rx: 35, ry: 18, rotation: 15, opacity: 0.12 },
    { cx: 50, cy: 50, rx: 55, ry: 30, rotation: -5, opacity: 0.08 },
    { cx: 30, cy: 40, rx: 20, ry: 12, rotation: 30, opacity: 0.1 },
    { cx: 70, cy: 60, rx: 22, ry: 14, rotation: -25, opacity: 0.1 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep space atmospheric effects */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 30% 20%, rgba(20, 40, 80, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 70% 80%, rgba(40, 20, 60, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 90% 40%, rgba(30, 50, 90, 0.1) 0%, transparent 40%)
          `
        }}
      />

      {/* Stars layer */}
      <div className="absolute inset-0">
        {stars.map((star) => {
          // Vary star colors based on size (bigger = can have color tints)
          const colorIndex = star.size > 2 ? Math.floor(Math.random() * starColors.length) : 0;
          const baseColor = starColors[colorIndex];
          const colorWithOpacity = baseColor.replace('1)', `${star.opacity})`);

          return (
            <div
              key={star.id}
              className="absolute rounded-full animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                backgroundColor: colorWithOpacity,
                boxShadow: star.size > 1.5
                  ? `0 0 ${star.size * 2}px ${colorWithOpacity}, 0 0 ${star.size * 4}px rgba(255, 255, 255, ${star.opacity * 0.2})`
                  : 'none',
                animationDelay: `${star.twinkleDelay}s`,
                animationDuration: `${star.twinkleDuration}s`,
              }}
            />
          );
        })}
      </div>

      {/* Nebula/galaxy glow effects - layered for depth */}
      {/* Main blue nebula - top left */}
      <div
        className="absolute opacity-40 animate-nebula-drift"
        style={{
          top: '5%',
          left: '0%',
          width: '50%',
          height: '50%',
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(30, 64, 175, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 50% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)
          `,
          filter: 'blur(30px)',
        }}
      />
      {/* Purple/magenta accent nebula - right */}
      <div
        className="absolute opacity-30 animate-nebula-drift-reverse"
        style={{
          top: '40%',
          right: '-5%',
          width: '40%',
          height: '45%',
          background: `
            radial-gradient(ellipse 70% 90% at 60% 50%, rgba(88, 28, 135, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 40% 60%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)
          `,
          filter: 'blur(40px)',
        }}
      />
      {/* Cyan/teal accent - bottom center */}
      <div
        className="absolute opacity-25"
        style={{
          bottom: '0%',
          left: '20%',
          width: '60%',
          height: '35%',
          background: `
            radial-gradient(ellipse 100% 60% at 50% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 80% 40% at 60% 90%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)
          `,
          filter: 'blur(50px)',
        }}
      />
      {/* Warm accent glow - adds depth contrast */}
      <div
        className="absolute opacity-15 animate-nebula-drift"
        style={{
          top: '60%',
          left: '10%',
          width: '25%',
          height: '25%',
          background: 'radial-gradient(ellipse at center, rgba(251, 146, 60, 0.25) 0%, rgba(234, 88, 12, 0.1) 40%, transparent 70%)',
          filter: 'blur(35px)',
          animationDelay: '5s',
        }}
      />

      {/* SVG for orbital paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(148, 163, 184, 0.05)" />
            <stop offset="50%" stopColor="rgba(148, 163, 184, 0.2)" />
            <stop offset="100%" stopColor="rgba(148, 163, 184, 0.05)" />
          </linearGradient>
        </defs>

        {/* Orbital rings with rotation */}
        {orbits.map((orbit, index) => (
          <ellipse
            key={index}
            cx={orbit.cx}
            cy={orbit.cy}
            rx={orbit.rx}
            ry={orbit.ry}
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="0.15"
            opacity={orbit.opacity}
            transform={`rotate(${orbit.rotation}, ${orbit.cx}, ${orbit.cy})`}
            className="animate-orbit-pulse"
            style={{ animationDelay: `${index * 0.5}s` }}
          />
        ))}

        {/* Shooting star paths */}
        <line
          x1="10" y1="20" x2="25" y2="35"
          stroke="url(#orbitGradient)"
          strokeWidth="0.1"
          className="animate-shooting-star"
          style={{ animationDelay: '0s' }}
        />
        <line
          x1="80" y1="10" x2="65" y2="25"
          stroke="url(#orbitGradient)"
          strokeWidth="0.1"
          className="animate-shooting-star"
          style={{ animationDelay: '3s' }}
        />
        <line
          x1="90" y1="60" x2="75" y2="75"
          stroke="url(#orbitGradient)"
          strokeWidth="0.1"
          className="animate-shooting-star"
          style={{ animationDelay: '6s' }}
        />
      </svg>

      {/* Planets/colored dots */}
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="absolute rounded-full animate-orbit"
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: planet.size,
            height: planet.size,
            backgroundColor: planet.color,
            boxShadow: `
              0 0 ${planet.size}px ${planet.glowColor},
              0 0 ${planet.size * 2}px ${planet.glowColor},
              0 0 ${planet.size * 3}px ${planet.glowColor.replace('0.4', '0.15').replace('0.35', '0.12').replace('0.3', '0.1')}
            `,
            animationDelay: `${planet.animationDelay}s`,
            animationDuration: `${planet.animationDuration}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Occasional shooting stars */}
      <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-visual" style={{ top: '15%', left: '20%', animationDelay: '2s' }} />
      <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-visual" style={{ top: '30%', left: '70%', animationDelay: '7s' }} />
      <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-visual" style={{ top: '60%', left: '40%', animationDelay: '12s' }} />

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes orbit {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) translateX(0px);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-12px) translateX(8px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-6px) translateX(-10px);
          }
          75% {
            transform: translate(-50%, -50%) translateY(10px) translateX(5px);
          }
        }
        .animate-orbit {
          animation: orbit 40s ease-in-out infinite;
        }

        @keyframes orbit-pulse {
          0%, 100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.2;
          }
        }
        .animate-orbit-pulse {
          animation: orbit-pulse 8s ease-in-out infinite;
        }

        @keyframes nebula-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -15px) scale(1.1);
          }
        }
        .animate-nebula-drift {
          animation: nebula-drift 30s ease-in-out infinite;
        }

        @keyframes nebula-drift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-15px, 10px) scale(1.05);
          }
        }
        .animate-nebula-drift-reverse {
          animation: nebula-drift-reverse 25s ease-in-out infinite;
        }

        @keyframes shooting-star {
          0%, 90%, 100% {
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          10% {
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: shooting-star 10s ease-in-out infinite;
        }

        @keyframes shooting-star-visual {
          0%, 85%, 100% {
            opacity: 0;
            transform: translate(0, 0);
            box-shadow: none;
          }
          5% {
            opacity: 1;
            box-shadow: -20px -20px 10px rgba(255,255,255,0.8), -40px -40px 20px rgba(255,255,255,0.4);
          }
          15% {
            opacity: 0;
            transform: translate(60px, 60px);
            box-shadow: none;
          }
        }
        .animate-shooting-star-visual {
          animation: shooting-star-visual 15s ease-out infinite;
        }
      `}</style>
    </div>
  );
}
