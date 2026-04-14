"use client";

import { useEffect, useRef, useState } from "react";

const lerp = (start: number, end: number, amount: number) => {
  return start + (end - start) * amount;
};

export const CursorGradient = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUseFinePointer);

    if (!canUseFinePointer) {
      return;
    }

    const updatePointer = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    const onMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "0";
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    const onMouseEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
      }
    };

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    target.current.x = centerX;
    target.current.y = centerY;
    dot.current.x = centerX;
    dot.current.y = centerY;
    glow.current.x = centerX;
    glow.current.y = centerY;

    window.addEventListener("mousemove", updatePointer, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    let rafId = 0;
    const animate = () => {
      dot.current.x = lerp(dot.current.x, target.current.x, 0.22);
      dot.current.y = lerp(dot.current.y, target.current.y, 0.22);
      glow.current.x = lerp(glow.current.x, target.current.x, 0.1);
      glow.current.y = lerp(glow.current.y, target.current.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 8}px, ${dot.current.y - 8}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.current.x - 110}px, ${glow.current.y - 110}px, 0)`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePointer);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <div
        ref={glowRef}
        className="absolute h-[220px] w-[220px] rounded-full opacity-70 blur-3xl transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(240,197,122,0.35) 0%, rgba(94,146,255,0.22) 36%, rgba(120,58,237,0.12) 70%, transparent 100%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute h-4 w-4 rounded-full opacity-95"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,233,186,1) 0%, rgba(236,191,113,1) 45%, rgba(100,160,255,1) 100%)",
          boxShadow: "0 0 16px rgba(236,191,113,0.75)",
        }}
      />
    </div>
  );
};
