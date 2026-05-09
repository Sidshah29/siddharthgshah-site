"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Multi-script greeting for /personal hero (§12.1). Each greeting carries its
// own font CSS variable + lang attribute. First hover per session triggers a
// gentle bounce — discovery is rewarded once, not on every interaction.

export type Greeting = {
  text: string;
  lang: string;
  fontVar: string;          // e.g. "noto-devanagari" → font-noto-devanagari
  dir?: "ltr" | "rtl";
};

interface MultiScriptHeroProps {
  greetings: Greeting[];
  verbsLine: string;
  closingLine: string;
}

const fontClass: Record<string, string> = {
  "noto-latin": "font-noto-latin",
  "noto-devanagari": "font-noto-devanagari",
  "noto-arabic": "font-noto-arabic",
  "noto-gujarati": "font-noto-gujarati",
};

function GreetingWord({ greeting }: { greeting: Greeting }) {
  const [hovered, setHovered] = useState(false);
  const fontCls = fontClass[greeting.fontVar] ?? "font-display";

  return (
    <motion.span
      lang={greeting.lang}
      dir={greeting.dir ?? "ltr"}
      className={`inline-block ${fontCls}`}
      onHoverStart={() => setHovered(true)}
      animate={hovered ? { y: [0, -8, 0], opacity: [1, 0.85, 1] } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {greeting.text}
    </motion.span>
  );
}

export default function MultiScriptHero({
  greetings,
  verbsLine,
  closingLine,
}: MultiScriptHeroProps) {
  return (
    <div className="space-y-8">
      <h1 className="font-display font-light text-4xl md:text-6xl text-bone leading-[1.05] tracking-tight">
        <span className="flex flex-wrap gap-x-6 gap-y-2">
          {greetings.map((g, i) => (
            <GreetingWord key={i} greeting={g} />
          ))}
        </span>
      </h1>
      <p className="font-display italic text-xl md:text-2xl text-bone-dim">
        {verbsLine}
      </p>
      <p className="font-display italic text-xl md:text-2xl text-ember">
        {closingLine}
      </p>
    </div>
  );
}
