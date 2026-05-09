"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

const homeSections = [
  { id: "hero",         label: "Top"        },
  { id: "active-build", label: "Active Build" },
  { id: "tri-vector",  label: "Projects"   },
  { id: "coursework",  label: "Coursework" },
  { id: "beyond",      label: "Beyond"     },
  { id: "contact",     label: "Contact"    },
];

const navLinks = [
  { label: "Work",     href: "/#tri-vector" },
  { label: "Personal", href: "/personal"    },
  { label: "Contact",  href: "/#contact"   },
];

type NavVariant = "home" | "sub" | "igr";

interface NavigationProps {
  variant?: NavVariant;
}

export default function Navigation({ variant = "home" }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-blue origin-left z-50"
        style={{ scaleX }}
      />

      {/* Top nav — Liquid Glass */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 liquid-glass"
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.25em] text-bone hover:text-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
          >
            siddharth_shah<span className="text-accent-blue">.com</span>
          </Link>

          {/* Centre links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bone-mute hover:text-bone transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-0">
            {/* IGR link — italic, 32px left gap, hidden on /igr */}
            {variant !== "igr" && (
              <Link
                href="/igr"
                className="hidden md:inline-block font-sans italic text-[11px] text-bone-mute hover:text-bone transition-colors mr-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                style={{ marginRight: 32 }}
              >
                For the IGR team →
              </Link>
            )}
            {/* On /igr show back link */}
            {variant === "igr" && (
              <Link
                href="/"
                className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-bone-mute hover:text-bone transition-colors mr-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                style={{ marginRight: 32 }}
              >
                ← Portfolio
              </Link>
            )}

            <a
              href="/Siddharth_Shah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-ink-400 hover:border-accent-blue hover:text-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              CV ↓
            </a>
          </div>
        </div>
      </nav>

      {/* Side dot navigator — homepage only */}
      {isHome && (
        <div
          className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4"
          aria-label="Section navigator"
        >
          {homeSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center justify-end"
              aria-label={s.label}
            >
              <span
                className={`absolute right-6 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === s.id
                    ? "opacity-100 translate-x-0 text-bone"
                    : "opacity-0 -translate-x-2 text-bone-mute group-hover:opacity-80 group-hover:translate-x-0"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block h-px transition-all duration-500 ease-out ${
                  active === s.id
                    ? "w-8 bg-accent-blue"
                    : "w-3 bg-bone-mute group-hover:w-5 group-hover:bg-bone"
                }`}
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
