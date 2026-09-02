"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

export function PrimaryCTA({
  children,
  className = "",
  href = "#book",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setPos({ x, y });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#book") {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <Link
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`focus-ring inline-flex items-center gap-2.5 rounded-full bg-green px-6 py-3.5 font-body text-[0.95rem] font-semibold text-paper transition-[transform,background-color] duration-200 ease-out hover:bg-green-deep ${className}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function SecondaryCTA({
  children,
  href = "#work",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#book") {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`focus-ring group inline-flex items-center gap-2 font-body text-[0.95rem] font-semibold text-dark transition-colors hover:text-green-deep ${className}`}
    >
      <span className="border-b border-dark/30 pb-0.5 group-hover:border-green-deep">
        {children}
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </Link>
  );
}
