import React from "react";

type LaserUpChartProps = {
  /** Optional: control height (defaults to 70vh capped at 520px) */
  height?: string;
  /** Optional: rounded corners */
  radius?: number;
};

export default function LaserUpChart({ height = "min(70vh, 520px)", radius = 18 }: LaserUpChartProps) {
  return (
    <div className="laser-chart" aria-hidden="true">
      <svg className="laser-svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
    <defs>
      <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="b1" />
        <feGaussianBlur stdDeviation="14" result="b2" />
        <feMerge>
          <feMergeNode in="b2" />
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="redHaze" cx="50%" cy="45%" r="80%">
        <stop offset="0%" stopColor="rgba(255,0,70,.20)" />
        <stop offset="60%" stopColor="rgba(255,0,70,.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="1200" height="500" fill="url(#redHaze)" />
    <g className="vol">
      <rect x="80"  y="300" width="3" height="160" />
      <rect x="150" y="330" width="3" height="120" />
      <rect x="220" y="280" width="3" height="190" />
      <rect x="310" y="260" width="3" height="210" />
      <rect x="380" y="320" width="3" height="140" />
      <rect x="470" y="240" width="3" height="230" />
      <rect x="560" y="290" width="3" height="180" />
      <rect x="650" y="210" width="3" height="260" />
      <rect x="740" y="260" width="3" height="210" />
      <rect x="830" y="190" width="3" height="280" />
      <rect x="920" y="230" width="3" height="240" />
      <rect x="1010" y="150" width="3" height="320" />
      <rect x="1100" y="180" width="3" height="290" />
    </g>
    <path
      className="line line-halo"
      d="M 40 440
         L 110 400
         L 175 420
         L 235 360
         L 300 385
         L 365 320
         L 430 340
         L 500 270
         L 565 300
         L 630 235
         L 700 260
         L 770 200
         L 845 230
         L 920 170
         L 990 190
         L 1060 130
         L 1140 95" />

    <path
      className="line line-core"
      d="M 40 440
         L 110 400
         L 175 420
         L 235 360
         L 300 385
         L 365 320
         L 430 340
         L 500 270
         L 565 300
         L 630 235
         L 700 260
         L 770 200
         L 845 230
         L 920 170
         L 990 190
         L 1060 130
         L 1140 95" />

    <path
      className="line line-spark"
      d="M 40 440
         L 110 400
         L 175 420
         L 235 360
         L 300 385
         L 365 320
         L 430 340
         L 500 270
         L 565 300
         L 630 235
         L 700 260
         L 770 200
         L 845 230
         L 920 170
         L 990 190
         L 1060 130
         L 1140 95" />
  </svg>

      <style>{`
        .laser-chart{
          width: 118%;
          height: 115vh;
          top: 0;
          left: 0;
          background:
            radial-gradient(900px 520px at 55% 45%, rgba(255,0,70,.10), transparent 60%),
            radial-gradient(900px 520px at 35% 60%, rgba(255,80,120,.08), transparent 65%),
            linear-gradient(180deg, #120006, #070008 55%, #050007);
          overflow: hidden;
          border-radius: ${radius}px;
          position: absolute;
        }

        .laser-svg{
          position:absolute; inset:0;
          width:100%;
          height:100%;
        }

        .vol rect{
          fill: rgba(255,255,255,.10);
          opacity: .35;
        }

        .line{
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        .line-halo{
          stroke:rgb(237, 47, 50,.86);// rgba(255, 40, 110, .55);
          stroke-width: 10;
          filter: url(#laserGlow);
        }

        .line-core{
          stroke:rgb(104, 4, 6,0.21); // rgba(255, 120, 170, .95);
          stroke-width: 4.5;
          filter:
            drop-shadow(0 0 18px rgba(255,0,70,.55))
            drop-shadow(0 0 30px rgba(255,0,70,.35));
        }

        .line-spark{
          stroke: rgba(255,255,255,.95);
          stroke-width: 3.5;
          opacity: .85;
          stroke-dasharray: 70 1400;
          stroke-dashoffset: 1400;
          filter: drop-shadow(0 0 14px rgba(255,255,255,.35));
          animation: sparkMove 2.2s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes sparkMove{
          0%   { stroke-dashoffset: 1400; opacity: 0; }
          10%  { opacity: .9; }
          60%  { opacity: .9; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce){
          .line-spark{ animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
