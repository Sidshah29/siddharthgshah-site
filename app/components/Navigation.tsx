"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "hero", label: "Top" },
  { id: "letter", label: "Letter" },
  { id: "investigation", label: "Investigation" },
  { id: "projects", label: "Projects" },
  { id: "beyond", label: "Beyond" },
  { id: "photography", label: "Photography" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-blue origin-left z-50"
        style={{ scaleX }}
      />

      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-ink/60 border-b border-ink-300/50">
        <div className="container-custom flex items-center justify-between py-4">
          <a
            href="#hero"
            className="font-mono text-xs uppercase tracking-[0.25em] text-bone hover:text-accent-blue transition-colors"
          >
            Siddharth_Shah<span className="text-accent-blue">.com</span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`transition-colors duration-300 ${
                  active === s.id ? "text-bone" : "text-bone-mute hover:text-bone"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-ink-400 hover:border-accent-blue hover:text-accent-blue transition-colors"
          >
            CV →
          </a>
        </div>
      </nav>

      {/* Side dot navigator (desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end"
            aria-label={s.label}
          >
            <span
              className={`absolute right-6 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                active === s.id
                  ? "opacity-100 translate-x-0 text-bone"
                  : "opacity-0 -translate-x-2 text-bone-mute group-hover:opacity-80 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-500 ease-out ${
                active === s.id
                  ? "w-8 bg-accent-blue"
                  : "w-3 bg-bone-mute group-hover:w-5 group-hover:bg-bone"
              }`}
            />
          </a>
        ))}
      </div>
    </>
  );
}
