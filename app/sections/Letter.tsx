"use client";

import { motion } from "framer-motion";
import { letter } from "@/lib/content";

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative py-32 md:py-48 border-t border-ink-300"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Section marker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="lg:sticky lg:top-32">
              <div className="section-marker mb-4">01 / Open Letter</div>
              <div className="font-mono text-xs text-bone-mute leading-relaxed">
                Read time<br />
                ~ 2 minutes
              </div>
            </div>
          </motion.div>

          {/* Letter body */}
          <div className="lg:col-span-8 lg:col-start-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-display font-light mb-12 md:mb-16 text-bone">
                <span className="block text-bone-mute text-base font-mono uppercase tracking-[0.25em] mb-6">
                  To,
                </span>
                {letter.recipient}
              </h2>
            </motion.div>

            <div className="space-y-8 max-w-2xl">
              {letter.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className={
                    i === 0
                      ? "font-display text-2xl md:text-3xl font-light leading-snug text-bone"
                      : "text-lg md:text-xl text-bone-dim leading-relaxed"
                  }
                >
                  {p}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-mute mb-2">
                  — Signed,
                </div>
                <div className="font-display italic text-3xl text-bone">
                  {letter.signoff}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
