"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { hero, identity } from "@/lib/content";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Split headline into lines for stagger animation
  const lines = hero.headline.split("\n");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 bg-grid-faint bg-[size:80px_80px] pointer-events-none"
        style={{
          x: mouse.x * 12,
          y: mouse.y * 12,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.06),transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Top metadata strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 md:mb-20 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-mute"
        >
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse-soft" />
            Available · Summer 2026
          </span>
          <span className="hidden md:inline text-ink-400">/</span>
          <span>{identity.location}</span>
          <span className="hidden md:inline text-ink-400">/</span>
          <span>Application: India Global Review</span>
        </motion.div>

        {/* Massive headline */}
        <h1 className="font-display font-light text-hero mb-10 md:mb-14">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.4 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
              style={{ transformOrigin: "bottom" }}
            >
              {i === 0 ? (
                <>
                  {line.split(" ").map((word, idx) => (
                    <span key={idx}>
                      {idx === 1 ? <em className="italic text-accent-blue/90">{word}</em> : word}{" "}
                    </span>
                  ))}
                </>
              ) : (
                <>
                  {line.split(" ").map((word, idx) => (
                    <span key={idx}>
                      {idx === 1 ? <em className="italic text-accent-red/90">{word}</em> : word}{" "}
                    </span>
                  ))}
                </>
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subline + callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="lg:col-span-7 text-lg md:text-xl text-bone-dim leading-relaxed max-w-2xl"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="lg:col-span-5 grid grid-cols-3 gap-4 md:gap-8"
          >
            {hero.callouts.map((c, i) => (
              <div key={i} className="border-l border-ink-400 pl-4">
                <div className="font-display text-3xl md:text-4xl font-light text-bone mb-1">
                  {c.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-mute leading-tight">
                  {c.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
          Scroll
        </span>
        <span className="block w-px h-10 bg-gradient-to-b from-bone-mute to-transparent animate-scroll-cue" />
      </motion.div>
    </section>
  );
}
