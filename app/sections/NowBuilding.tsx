"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { nowBuildingKicker } from "@/lib/content";
import { anchorProjects, type AnchorProject, type Milestone } from "@/lib/projects";
import InterestChip from "@/app/components/InterestChip";
import StatusMark from "@/app/components/StatusMark";

// Section 02 / Now Building (per brief §5).
// Three cards, vertically stacked, max-w 720px. Each card has the strict
// structure from §5.3: chip + status, title + tagline, THE ARC sub-block,
// target metrics, bottom row with Read deeper + GitHub.
// "Read deeper" expands in-place via AnimatePresence + layout — no /work route.

export default function NowBuilding() {
  return (
    <section id="now-building" className="relative py-24 md:py-32">
      <div className="container-custom">
        <Header />
        <div className="mt-16 flex flex-col items-center gap-10">
          {anchorProjects.map((project) => (
            <AnchorCard key={project.slug} project={project} />
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
      className="max-w-3xl"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {nowBuildingKicker.marker}
      </p>
      <h2 className="mt-4 font-display font-light text-bone text-[clamp(2rem,4vw,3.25rem)] leading-tight">
        {nowBuildingKicker.title}
      </h2>
      <p className="mt-6 font-display italic text-bone-dim text-base md:text-lg leading-relaxed">
        {nowBuildingKicker.subtitle}
      </p>
    </motion.div>
  );
}

function AnchorCard({ project }: { project: AnchorProject }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="now-building-card w-full max-w-[720px] rounded-[4px] p-6 md:p-8 hover:backdrop-blur-xl hover:backdrop-saturate-[1.6]"
    >
      {/* Top row — chip and status */}
      <motion.div layout="position" className="flex items-start justify-between gap-4">
        <InterestChip interest={project.interest} />
        <StatusMark status={project.status} />
      </motion.div>

      {/* Title + tagline */}
      <motion.div layout="position" className="mt-6">
        <h3 className="font-display font-light text-2xl md:text-3xl text-bone leading-tight">
          {project.name}
        </h3>
        <p className="mt-3 font-display italic text-bone-dim text-base md:text-lg leading-relaxed">
          {project.tagline}
        </p>
      </motion.div>

      {/* THE ARC */}
      <motion.div
        layout="position"
        className="mt-8 rounded-[4px] border border-ink-300 bg-ink/40 p-5 md:p-6"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute mb-4">
          The Arc
        </p>
        <ul className="space-y-2.5">
          {project.arc.map((m, i) => (
            <ArcRow key={i} milestone={m} />
          ))}
        </ul>
      </motion.div>

      {/* Target metrics */}
      <motion.div layout="position" className="mt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
          Target metrics ──────
        </p>
        <ul className="mt-3 space-y-1.5">
          {project.targetMetrics.map((metric, i) => (
            <li key={i} className="font-sans text-sm text-bone-dim">
              {metric}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom row — Read deeper + GitHub */}
      <motion.div
        layout="position"
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone hover:text-ember transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
          aria-expanded={expanded}
          aria-controls={`deeper-${project.slug}`}
        >
          <span>Read deeper</span>
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>

        <GithubButton url={project.github} />
      </motion.div>

      {/* In-place expansion */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`deeper-${project.slug}`}
            layout
            key="deeper"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 pt-8 border-t border-ink-300 space-y-8">
              <DeeperBlock label="Architecture">
                <p className="font-display text-bone-dim text-base md:text-lg leading-relaxed">
                  {project.deeper.architecture}
                </p>
              </DeeperBlock>

              <DeeperBlock label="The choices">
                <ul className="space-y-3">
                  {project.deeper.choices.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-sans text-sm md:text-base text-bone-dim leading-relaxed"
                    >
                      <span className="text-ember mt-1 shrink-0" aria-hidden="true">
                        ─
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </DeeperBlock>

              <DeeperBlock label="The risks">
                <ul className="space-y-3">
                  {project.deeper.risks.map((r, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm md:text-base text-bone-dim leading-relaxed"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </DeeperBlock>

              <DeeperBlock label="What landed unlocks next">
                <p className="font-display italic text-bone text-base md:text-lg leading-relaxed">
                  {project.deeper.unlocks}
                </p>
              </DeeperBlock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function ArcRow({ milestone }: { milestone: Milestone }) {
  const dot = (() => {
    switch (milestone.state) {
      case "done":
        return (
          <span className="block h-2 w-2 rounded-full bg-accent-blue" aria-hidden="true" />
        );
      case "in-flight":
        return (
          <span className="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue/60" />
            <span className="relative block h-2 w-2 rounded-full bg-accent-blue" />
          </span>
        );
      case "next":
        return (
          <span
            className="block h-2 w-2 rounded-full border border-bone-mute"
            aria-hidden="true"
          />
        );
      case "future":
        return (
          <span
            className="block h-2 w-2 rounded-full border border-bone-mute/40"
            aria-hidden="true"
          />
        );
    }
  })();

  const textCls =
    milestone.state === "future" ? "text-bone-mute/70" : "text-bone-dim";

  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 shrink-0">{dot}</span>
      <span className={`font-sans text-sm md:text-base leading-relaxed ${textCls}`}>
        {milestone.text}
      </span>
    </li>
  );
}

function GithubButton({ url }: { url: string }) {
  const isPlaceholder = url === "TBD";

  if (isPlaceholder) {
    return (
      <span
        title="Repo URL coming soon"
        className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-ink-400 text-bone-mute opacity-50 cursor-not-allowed inline-flex items-center gap-2"
      >
        <span>GitHub</span>
        <span className="text-bone-mute">TBD</span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-ink-400 hover:border-ember hover:text-ember transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
    >
      <span>GitHub ↗</span>
    </a>
  );
}

function DeeperBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember mb-3">
        {label}
      </p>
      {children}
    </div>
  );
}
