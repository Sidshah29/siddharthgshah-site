"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Gemini-inspired SVG choreography (§14). A single Bezier curve along the
// right margin of the homepage that draws itself in as the user scrolls.
// Renders only on the homepage — section anchor dots brighten near each section.

export default function RiverPath() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Reduced-motion fallback — static decorative line, no animation.
  if (reduced) {
    return (
      <svg
        className="fixed top-0 right-8 h-screen w-12 pointer-events-none z-10 hidden lg:block"
        viewBox="0 0 48 1000"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line
          x1="24"
          y1="0"
          x2="24"
          y2="1000"
          stroke="rgba(224, 160, 107, 0.2)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>
    );
  }

  return (
    <svg
      className="fixed top-0 right-8 h-screen w-12 pointer-events-none z-10 hidden lg:block"
      viewBox="0 0 48 1000"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 24 0 Q 36 200 12 400 T 24 800 T 36 1000"
        stroke="rgba(224, 160, 107, 0.3)"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      <motion.circle cx="36" cy="200" r="3" fill="rgba(224, 160, 107, 0.5)" />
      <motion.circle cx="12" cy="400" r="3" fill="rgba(224, 160, 107, 0.5)" />
      <motion.circle cx="24" cy="600" r="3" fill="rgba(224, 160, 107, 0.5)" />
      <motion.circle cx="36" cy="800" r="3" fill="rgba(224, 160, 107, 0.5)" />
    </svg>
  );
}
