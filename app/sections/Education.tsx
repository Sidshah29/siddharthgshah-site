"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/content";

// Education sub-band (per brief §4.6). Two-column on desktop (label left,
// content right), single column on mobile. Visually quiet — fact band, not a
// performance. Standard fade-up reveal only.

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 border-y border-ink-300"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Label */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
              {education.marker}
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-9 space-y-6">
            <div>
              <p className="font-display text-xl md:text-2xl text-bone font-light">
                {education.institution}
              </p>
              <p className="font-display text-lg md:text-xl text-bone-dim mt-1">
                {education.degree}
              </p>
              <p className="font-sans text-base text-bone-dim mt-1">
                {education.priorMajor}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone-mute mt-3">
                {education.graduating}
              </p>
            </div>

            <DomainBlock label={education.domainsLabel} items={education.domains} />
            <DomainBlock label={education.personalLabel} items={education.personal} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DomainBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-mute mb-3">
        {label}
      </p>
      <div className="h-px w-12 bg-ember/40 mb-3" />
      <p className="font-display text-base md:text-lg text-bone-dim leading-relaxed">
        {items.map((item, i) => (
          <span key={i}>
            {item}
            {i < items.length - 1 && (
              <span className="text-bone-mute mx-2" aria-hidden="true">·</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
