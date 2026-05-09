"use client";

import { motion } from "framer-motion";
import { writings, writingsTarget, type Writing } from "@/lib/writings";

// Writings list (per brief §12.2). Stripped of v2 metadata — no course code,
// no professor reference, no byline. The pieces stand on their own.
// When fewer than `writingsTarget`, render dashed-border ghost cards.

export default function Writings() {
  const ghostCount = Math.max(0, writingsTarget - writings.length);

  return (
    <section className="space-y-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        Writings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {writings.map((w, i) => (
          <WritingCard key={i} writing={w} delay={i * 0.05} />
        ))}
        {Array.from({ length: ghostCount }, (_, i) => (
          <GhostCard key={`ghost-${i}`} delay={(writings.length + i) * 0.05} />
        ))}
      </div>
    </section>
  );
}

function WritingCard({ writing, delay }: { writing: Writing; delay: number }) {
  const linkProps = writing.pdfUrl
    ? { href: writing.pdfUrl, target: "_blank", rel: "noopener noreferrer" }
    : writing.externalUrl
      ? { href: writing.externalUrl }
      : null;

  const Inner = (
    <article className="space-y-3 group cursor-pointer">
      <h3 className="font-display font-light text-bone text-xl md:text-2xl leading-snug group-hover:text-ember transition-colors">
        {writing.title}
      </h3>
      <p className="font-display italic text-bone-dim text-base leading-relaxed line-clamp-2">
        {writing.excerpt}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute">
        {writing.date}
      </p>
    </article>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
    >
      {linkProps ? <a {...linkProps}>{Inner}</a> : Inner}
    </motion.div>
  );
}

function GhostCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      className="border border-dashed border-ink-300 rounded-[4px] p-6 min-h-[140px] flex items-center justify-center"
      aria-hidden="true"
    >
      <p className="font-display italic text-bone-mute text-sm">
        More writing in progress.
      </p>
    </motion.div>
  );
}
