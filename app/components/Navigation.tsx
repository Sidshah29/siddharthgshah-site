"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

// v3 Navigation (per brief §3.2).
// Logo fixes the v2 underscore typo. Centre labels move from clichéd
// startup-portfolio vocabulary to literary/atelier register. Right cluster
// has the [For IGR] pill button (deliberate 24px gap) before the CV button.
// On scroll past 200px, the top-nav class gains .scrolled for Liquid Glass
// saturation intensification (§15.1).

const homeSections = [
  { id: "hero",         label: "Top" },
  { id: "education",    label: "Education" },
  { id: "now-building", label: "Now Building" },
  { id: "slate",        label: "The Slate" },
  { id: "coursework",   label: "Foundation" },
  { id: "receipts",     label: "Receipts" },
  { id: "mind-margin",  label: "Mind & Margin" },
  { id: "contact",      label: "Get In Touch" },
];

const navLinks = [
  { label: "Atelier",       href: "/#now-building" },
  { label: "Mind & Margin", href: "/personal" },
  { label: "Get In Touch",  href: "/#contact" },
];

type NavVariant = "home" | "sub" | "igr";

interface NavigationProps {
  variant?: NavVariant;
}

export default function Navigation({ variant = "home" }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Liquid Glass saturation intensifies past 200px scroll (§15.1).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    homeSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ember origin-left z-50"
        style={{ scaleX }}
      />

      {/* Top nav — Liquid Glass surface 1.
          Tailwind backdrop utilities are on the element itself; .top-nav adds
          colour, edge, isolation and the transition. .scrolled bumps saturation. */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 top-nav backdrop-blur-2xl ${
          scrolled ? "backdrop-saturate-[1.8] scrolled" : "backdrop-saturate-[1.2]"
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between py-4 gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.25em] text-bone hover:text-ember transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember whitespace-nowrap"
          >
            siddharthgshah<span className="text-ember">.com</span>
          </Link>

          {/* Centre links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bone-mute hover:text-bone transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right cluster — [For IGR] pill, 24px gap, [CV ↓] */}
          <div className="flex items-center gap-6">
            {variant === "igr" ? (
              <Link
                href="/"
                className="hidden md:inline-flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone-mute hover:text-bone transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
              >
                ← Portfolio
              </Link>
            ) : (
              <Link
                href="/igr"
                className="hidden md:inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-ember bg-transparent text-ember hover:bg-ember hover:text-ink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
              >
                For IGR
              </Link>
            )}

            <a
              href="/cv-general.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-ink-400 hover:border-ember hover:text-ember transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember whitespace-nowrap"
            >
              CV ↓
            </a>
          </div>
        </div>
      </nav>

      {/* Side dot navigator — homepage only */}
      {isHome && (
        <div
          className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4"
          aria-label="Section navigator"
        >
          {homeSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center"
              aria-label={s.label}
            >
              <span
                className={`block h-px transition-all duration-500 ease-out ${
                  active === s.id
                    ? "w-8 bg-ember"
                    : "w-3 bg-bone-mute group-hover:w-5 group-hover:bg-bone"
                }`}
              />
              <span
                className={`absolute left-10 font-mono text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
                  active === s.id
                    ? "opacity-100 translate-x-0 text-bone"
                    : "opacity-0 -translate-x-2 text-bone-mute group-hover:opacity-80 group-hover:translate-x-0"
                }`}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
