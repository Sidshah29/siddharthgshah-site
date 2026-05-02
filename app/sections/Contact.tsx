"use client";

import { motion } from "framer-motion";
import { contact, identity } from "@/lib/content";
import {
  Mail,
  Phone,
  Linkedin,
  FileDown,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: identity.phone,
      href: `tel:${identity.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "siddharth29shah",
      href: identity.linkedin,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@sidshah29",
      href: identity.instagram,
    },
    {
      icon: FileDown,
      label: "CV",
      value: "Download PDF",
      href: identity.cvUrl,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 border-t border-ink-300 bg-ink-50 overflow-hidden"
    >
      {/* Background flourish */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.08),transparent_70%)] pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <div className="section-marker mb-8 text-accent-blue">
            06 / {contact.kicker}
          </div>

          <h2 className="font-display text-hero font-light leading-[0.95] text-bone mb-10">
            {contact.headline.split(". ").map((part, i, arr) => (
              <span key={i} className="block">
                {part}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </h2>

          <p className="text-xl md:text-2xl text-bone-dim leading-relaxed max-w-2xl mb-20 font-light">
            {contact.body}
          </p>
        </motion.div>

        {/* Channel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-ink-300">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-ink-50 p-8 hover:bg-ink transition-colors duration-500"
              >
                <Icon className="w-5 h-5 text-bone-mute mb-6 group-hover:text-accent-blue transition-colors duration-500" />
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute mb-2">
                  {c.label}
                </div>
                <div className="font-display text-xl text-bone group-hover:text-accent-blue transition-colors duration-500 break-all">
                  {c.value}
                </div>
                <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-bone-mute opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-10 border-t border-ink-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="font-display text-2xl text-bone mb-1">
              {identity.name}
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone-mute">
              {identity.tagline}
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute">
            Built from scratch · Next.js · Deployed on Vercel
          </div>
        </motion.div>
      </div>
    </section>
  );
}
