import React from "react";

interface LogoMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

export function LogoMark({
  size = 32,
  className = "",
  color = "#89BC30",
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vereenGradient" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A5DC3C" />
          <stop offset="60%" stopColor="#89BC30" />
          <stop offset="100%" stopColor="#6A9621" />
        </linearGradient>
      </defs>
      
      {/* Left arm of V: Sleek upward minimal stroke */}
      <path
        d="M 48 85 C 44 85 36 78 28 58 C 22 42 16 26 15 15 C 21 16 26 19 32 30 C 40 45 47 62 49 76 Z"
        fill={color === "#89BC30" ? "url(#vereenGradient)" : color}
      />
      
      {/* Right arm of V / Leaf Sprout: Organic leaf wing pointing up and right */}
      <path
        d="M 48 85 C 50 75 56 56 67 38 C 76 23 85 15 88 15 C 87 28 78 46 68 62 C 60 75 53 83 48 85 Z"
        fill={color === "#89BC30" ? "url(#vereenGradient)" : color}
      />
      
      {/* Organic Sprout Inner Leaf Wing Silhouette */}
      <path
        d="M 50 82 C 55 68 68 45 85 24 C 88 20 90 16 88 15 C 80 18 68 30 58 48 C 50 63 48 76 50 82 Z"
        fill={color === "#89BC30" ? "#A5DC3C" : color}
        opacity="0.9"
      />
    </svg>
  );
}

export function BrandLogo({
  size = 30,
  textColor = "text-dark",
  logoColor = "#89BC30",
  className = "",
}: {
  size?: number;
  textColor?: string;
  logoColor?: string;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 font-display text-[1.12rem] font-bold tracking-tight ${textColor} ${className}`}>
      <LogoMark size={size} color={logoColor} />
      <span className="flex flex-col leading-none">
        <span className="tracking-[0.16em] uppercase text-[1.05rem] font-black">Vereen</span>
        <span className="text-[0.68rem] tracking-[0.28em] uppercase font-semibold text-green font-sans mt-0.5">Digital</span>
      </span>
    </span>
  );
}
