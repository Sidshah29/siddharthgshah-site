"use client";

import { motion } from "framer-motion";
import { receiptsKicker } from "@/lib/content";
import {
  leadership,
  recognitions,
  type LeadershipRole,
  type Recognition,
} from "@/lib/achievements";

// Section 05 / Receipts (per brief §8).
// Two-column structure: Leadership left, Recognitions right.
// When BOTH are empty, render the combined empty-state. When one is empty
// and the other isn't, render the column-specific empty-state in that column.

export default function Receipts() {
  const bothEmpty = leadership.length === 0 && recognitions.length === 0;

  return (
    <section id="receipts" className="relative py-24 md:py-32 bg-ink-50/40">
      <div className="container-custom">
        <Header />
        <div className="mt-16 max-w-5xl">
          {bothEmpty ? (
            <BothEmpty />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <Column
                heading="Leadership"
                isEmpty={leadership.length === 0}
                emptyText={receiptsKicker.emptyStateLeadership}
              >
                {leadership.map((role, i) => (
                  <LeadershipRow key={i} role={role} />
                ))}
              </Column>
              <Column
                heading="Recognitions"
                isEmpty={recognitions.length === 0}
                emptyText={receiptsKicker.emptyStateRecognitions}
              >
                {recognitions.map((rec, i) => (
                  <RecognitionRow key={i} rec={rec} />
                ))}
              </Column>
            </div>
          )}
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
        {receiptsKicker.marker}
      </p>
      <p className="mt-4 font-display italic text-bone-dim text-base md:text-lg">
        {receiptsKicker.subtitle}
      </p>
    </motion.div>
  );
}

function Column({
  heading,
  isEmpty,
  emptyText,
  children,
}: {
  heading: string;
  isEmpty: boolean;
  emptyText: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute mb-8">
        {heading}
      </p>
      {isEmpty ? (
        <p className="font-display italic text-bone-dim text-base leading-relaxed">
          {emptyText}
        </p>
      ) : (
        <div className="space-y-6">{children}</div>
      )}
    </div>
  );
}

function BothEmpty() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <p className="font-display italic text-bone-dim text-base md:text-lg leading-relaxed">
        {receiptsKicker.emptyStateBoth}
      </p>
    </motion.div>
  );
}

function LeadershipRow({ role }: { role: LeadershipRole }) {
  return (
    <div>
      <Divider />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone-mute">
        {role.year}
      </p>
      <p className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-bone">
        {role.role}
      </p>
      <p className="mt-1 font-display text-base text-bone-dim">{role.organisation}</p>
      <p className="mt-2 font-sans text-sm text-bone-dim">{role.description}</p>
    </div>
  );
}

function RecognitionRow({ rec }: { rec: Recognition }) {
  return (
    <div>
      <Divider />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone-mute">
        {rec.year}
      </p>
      <p className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-bone">
        {rec.title}
      </p>
      <p className="mt-1 font-display text-base text-bone-dim">{rec.body}</p>
      <p className="mt-2 font-sans text-sm text-bone-dim">{rec.description}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-8 bg-ember mb-3" aria-hidden="true" />;
}
