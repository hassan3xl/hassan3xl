"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const Reveal = ({
  children,
  width = "100%",
  className = "",
  delay = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal instantly
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: "60px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Cap max delay to 0.2s so there's never noticeable lag
  const cappedDelay = Math.min(delay, 0.2);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1) ${cappedDelay}s, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) ${cappedDelay}s`,
      }}
    >
      {children}
    </div>
  );
};
