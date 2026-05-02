"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 md:py-48 border-t border-ink-300"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-3">
            <div className="section-marker mb-4">03 / Selected work</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-display font-light leading-[1] text-bone max-w-3xl">
              Three projects.<br />
              <span className="italic text-bone-dim">
                One pattern: ship, measure, defend.
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-300">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-ink p-8 md:p-10 hover:bg-ink-50 transition-colors duration-500"
            >
              {/* Top: number + period */}
              <div className="flex items-start justify-between mb-12">
                <div className="font-mono text-xs text-bone-mute uppercase tracking-[0.2em]">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] text-bone-mute uppercase tracking-[0.2em] text-right">
                  {p.period}
                </div>
              </div>

              {/* Massive metric */}
              <div className="mb-10">
                <div className="font-display text-7xl md:text-8xl font-light text-bone leading-none mb-2 transition-colors duration-500 group-hover:text-accent-blue">
                  {p.metric}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
                  {p.metricLabel}
                </div>
              </div>

              {/* Project title */}
              <div className="mb-4">
                <h3 className="font-display text-2xl font-medium text-bone mb-1">
                  {p.name}
                </h3>
                <div className="text-sm text-bone-dim italic">{p.tagline}</div>
              </div>

              {/* Blurb */}
              <p className="text-sm text-bone-dim leading-relaxed mb-8">
                {p.blurb}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border border-ink-400 text-bone-mute group-hover:border-accent-blue/40 group-hover:text-bone-dim transition-colors duration-500"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent-blue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
