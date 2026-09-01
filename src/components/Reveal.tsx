"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(6px)",
        transform: isVisible ? "translateY(0px)" : "translateY(16px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealWords({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0px)" : "blur(5px)",
            transform: isVisible ? "translateY(0px)" : "translateY(16px)",
            transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * 0.04}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * 0.04}s, filter 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * 0.04}s`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export default Reveal;
