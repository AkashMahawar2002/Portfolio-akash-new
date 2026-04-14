"use client";

import { useEffect, useRef } from "react";

import animationData from "@/data/confetti.json";

interface BentoGridLottieProps {
  copied: boolean;
}

const BentoGridLottie = ({ copied }: BentoGridLottieProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let isMounted = true;

    const setupAnimation = async () => {
      if (!copied || !containerRef.current) {
        return;
      }

      const lottie = (await import("lottie-web")).default;
      if (!isMounted || !containerRef.current) {
        return;
      }

      animationRef.current?.destroy();
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    };

    if (copied) {
      void setupAnimation();
    } else {
      animationRef.current?.destroy();
      animationRef.current = null;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    }

    return () => {
      isMounted = false;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [copied]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-5 right-0 h-40 w-40 cursor-default"
      ref={containerRef}
    />
  );
};

export default BentoGridLottie;
