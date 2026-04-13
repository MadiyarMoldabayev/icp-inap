"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9998] w-[600px] h-[600px] rounded-full opacity-[0.04] hidden lg:block will-change-transform"
      style={{
        background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)",
        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    />
  );
}
