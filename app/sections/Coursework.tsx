"use client";

import { motion } from "framer-motion";
import { courseworkKicker } from "@/lib/content";
import { coursework } from "@/lib/coursework";

// Section 04 / The Foundation (per brief §7).
// Empty-state placeholder by default; populated rows render as a single
// horizontal row each (course code · title · stack · arrow link).

export default function Coursework() {
  return (
    <section id="coursework" className="relative py-24 md:py-32">
      <div className="container-custom">
        <Header />
        <div className="mt-12">
          {coursework.length === 0 ? <EmptyState /> : <CourseworkList />}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {courseworkKicker.marker}
      </p>
      <p className="mt-4 font-display italic text-bone-dim text-base md:text-lg">
        {courseworkKicker.subtitle}
      </p>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-ink-300 rounded-[4px] py-12 px-6 max-w-2xl mx-auto text-center"
    >
      <p className="font-display italic text-bone-dim text-lg leading-relaxed">
        {courseworkKicker.emptyState}
      </p>
    </motion.div>
  );
}

function CourseworkList() {
  return (
    <ul className="max-w-4xl">
      {coursework.map((entry, i) => (
        <li
          key={i}
          className="grid grid-cols-12 gap-4 py-4 border-b border-ink-300/40 items-start"
        >
          <span className="col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-mute pt-1">
            {entry.courseCode}
          </span>
          <div className="col-span-9">
            <p className="font-display text-bone text-lg leading-tight">
              {entry.title}
            </p>
            <p className="mt-1 font-sans text-sm text-bone-dim">
              {entry.description}
            </p>
            <p className="mt-1 font-sans text-xs text-bone-mute">
              {entry.stack.join(" · ")}
            </p>
          </div>
          <div className="col-span-1 text-right pt-1">
            {entry.github ? (
              <a
                href={entry.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-ember transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
              >
                →
              </a>
            ) : (
              <span className="text-bone-mute/40" aria-hidden="true">→</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
