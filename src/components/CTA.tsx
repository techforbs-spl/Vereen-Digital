"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

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
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
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
      className={`focus-ring inline-flex items-center gap-2 rounded-full bg-green px-7 py-4 font-body text-[0.95rem] font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-green-deep hover:shadow-lg active:scale-95 ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
      <span className="border-b-2 border-dark/20 pb-0.5 transition-colors group-hover:border-green-deep">
        {children}
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
