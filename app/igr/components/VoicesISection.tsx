"use client";

import { motion } from "framer-motion";
import { igrPage } from "@/lib/content";

// "The voices I was built by" — IGR-only block (per brief §11.2).
// Sits between the investigation and the closing line. Each row: name in
// Fraunces, role in Bricolage. No icons, no avatars — the list IS the artefact.

export default function VoicesISection() {
  const v = igrPage.voicesISection;

  return (
    <section className="relative py-24 md:py-32 border-t border-ink-300">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <h2 className="font-display font-light text-bone text-3xl md:text-4xl leading-tight">
            {v.title}
          </h2>
          <p className="font-display italic text-bone-dim text-base md:text-lg">
            {v.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 h-px w-16 bg-ember/60"
          aria-hidden="true"
        />

        <ul className="mt-10 space-y-4">
          {v.voices.map((voice, i) => (
            <motion.li
              key={voice.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              className="flex items-baseline gap-4"
            >
              <p className="font-display text-bone text-lg md:text-xl">
                {voice.name}
              </p>
              <span
                className="flex-1 border-b border-dotted border-ink-300/50"
                aria-hidden="true"
              />
              <p className="font-sans text-sm text-bone-dim">{voice.outlet}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
