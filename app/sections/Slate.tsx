"use client";

import { motion } from "framer-motion";
import { slateKicker } from "@/lib/content";
import { slateProjects, type SlateProject } from "@/lib/projects";
import InterestChip from "@/app/components/InterestChip";

// Section 03 / The Slate (per brief §6).
// Seven standardized tiles, no status, no expansion. Each tile has exactly one
// outbound action: the GitHub button (disabled when URL is "TBD").
// Strict 1:1.2 aspect ratio, max-width 360px, 24px padding, content stack
// fixed top-to-bottom.

export default function Slate() {
  return (
    <section id="slate" className="relative py-24 md:py-32 bg-ink-50/50">
      <div className="container-custom">
        <Header />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slateProjects.map((p, i) => (
            <SlateTile key={i} project={p} delay={i * 0.05} />
          ))}
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
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {slateKicker.marker}
      </p>
    </motion.div>
  );
}

function SlateTile({ project, delay }: { project: SlateProject; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="
        group relative flex flex-col
        bg-ink-50 border border-ink-300 rounded-[4px]
        p-6
        min-h-[240px] aspect-[1/1.2] max-w-[360px] w-full
        transition-colors duration-300
        hover:border-ember/40
      "
    >
      <InterestChip interest={project.interest} />

      <h3 className="mt-4 font-display font-light text-xl text-bone leading-snug line-clamp-2">
        {project.name}
      </h3>

      <p className="mt-2 font-sans text-sm text-bone-dim leading-relaxed line-clamp-2">
        {project.tagline}
      </p>

      <div className="mt-auto pt-4 flex items-end justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute leading-tight max-w-[60%]">
          {project.targetMetric}
        </p>
        <GithubButton url={project.github} />
      </div>
    </motion.article>
  );
}

function GithubButton({ url }: { url: string }) {
  if (url === "TBD") {
    return (
      <span
        title="Repo URL coming soon"
        className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-ink-400 text-bone-mute opacity-50 cursor-not-allowed shrink-0"
      >
        GH · TBD
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-ink-400 hover:border-ember hover:text-ember transition-colors shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
    >
      GH ↗
    </a>
  );
}
