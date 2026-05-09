"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { hero } from "@/lib/content";
import Portrait from "@/app/components/Portrait";

// v3 Hero (per brief §4). Status row carries the pulse-dot only — no location,
// no "available." Headline is two lines with "sharpening" rendered italic + ember.
// Portrait sits right-third desktop, full-width below byline mobile. Three callouts
// stack beside the portrait on desktop, row under byline on mobile.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <StatusRow />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-12 md:mt-16">
          {/* Left — headline + byline (and callouts on mobile) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <Headline />
            <Byline />
            <div className="md:hidden mt-10">
              <Portrait size={320} />
            </div>
            <div className="md:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {hero.callouts.map((c, i) => (
                <Callout key={i} value={c.value} body={c.body} />
              ))}
            </div>
          </div>

          {/* Right — portrait + callouts stacked (desktop) */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col items-center md:items-end gap-6">
            <Portrait size={360} />
            <div className="w-full flex flex-col gap-4">
              {hero.callouts.map((c, i) => (
                <Callout key={i} value={c.value} body={c.body} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}

function StatusRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-mute"
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
      </span>
      <span className="text-bone">{hero.statusLine}</span>
      <span className="text-bone-mute" aria-hidden="true">·</span>
      <span>{hero.statusContext}</span>
    </motion.div>
  );
}

function Headline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="font-display font-light text-bone leading-[0.95] tracking-tight text-[clamp(2.75rem,6.5vw,5.75rem)]"
    >
      <span className="block">{hero.headlineLine1}</span>
      <span className="block">
        {hero.headlineLine2Prefix}
        <em className="not-italic-fallback italic text-ember">
          {hero.headlineLine2Accent}
        </em>
        {hero.headlineLine2Suffix}
      </span>
    </motion.h1>
  );
}

function Byline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="mt-8 max-w-xl text-bone-dim text-base md:text-lg leading-relaxed"
    >
      {hero.byline}
    </motion.p>
  );
}

function Callout({ value, body }: { value: string; body: string }) {
  return (
    <div className="border-t border-ember/30 pt-4 pl-1">
      <div className="font-display font-light text-bone leading-none text-[clamp(2.25rem,4vw,3rem)]">
        {value}
      </div>
      <p className="mt-2 font-sans text-sm text-bone-dim leading-snug">
        {body}
      </p>
    </div>
  );
}

function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 50);
    const onResize = () => {
      if (window.innerHeight < 700) setVisible(false);
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
        scroll
      </span>
      <span className="block h-8 w-px bg-bone-mute animate-scroll-cue" />
    </div>
  );
}
