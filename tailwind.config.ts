import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        ink: {
          DEFAULT: "#06070A",   // page bg
          50: "#0A0B10",
          100: "#10121A",
          200: "#181A24",
          300: "#22242F",
          400: "#2D2F3B",
        },
        bone: {
          DEFAULT: "#F5F4EE",   // primary text on dark
          dim: "#B8B6A8",
          mute: "#7A7868",
        },
        // Accents (carry through from charts)
        accent: {
          blue: "#1D4ED8",
          red: "#DC2626",
          amber: "#F59E0B",
          ink: "#0D1B4D",
        },
        // v3 — Liquid Glass tokens (per brief §2.3)
        glass: {
          base: "rgba(16, 18, 26, 0.55)",
          edge: "rgba(245, 244, 238, 0.10)",
          highlight: "rgba(245, 244, 238, 0.04)",
        },
        // v3 — single new accent: warm tan, used surgically (portrait, dropcaps, river path)
        ember: {
          DEFAULT: "#E0A06B",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        // Multi-script families for the Mind & Margin hero
        "noto-latin": ["var(--font-noto-latin)", "system-ui", "sans-serif"],
        "noto-devanagari": ["var(--font-noto-devanagari)", "system-ui", "sans-serif"],
        "noto-arabic": ["var(--font-noto-arabic)", "system-ui", "sans-serif"],
        "noto-gujarati": ["var(--font-noto-gujarati)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial scale
        "hero": ["clamp(3.5rem, 11vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "title": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "scroll-cue": "scrollCue 2s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "scan-line": "scanLine 0.6s ease-out forwards",
        "count-up": "countUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "milestone-pulse": "milestonePulse 2.5s ease-in-out infinite",
        "scrubber": "scrubber 0.4s ease-out forwards",
        "drift": "drift 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scrollCue: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        scanLine: {
          "0%":   { transform: "translateX(-100%)", opacity: "0" },
          "20%":  { opacity: "0.4" },
          "80%":  { opacity: "0.4" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        milestonePulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(29, 78, 216, 0.3)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(29, 78, 216, 0)" },
        },
        scrubber: {
          from: { transform: "scaleX(0)" },
          to:   { transform: "scaleX(1)" },
        },
        drift: {
          "0%":   { transform: "translate(0, 0)" },
          "33%":  { transform: "translate(2%, -2%)" },
          "66%":  { transform: "translate(-1%, 2%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "grid-faint": "linear-gradient(rgba(245,244,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,244,238,0.03) 1px, transparent 1px)",
        "drift-glow": "radial-gradient(ellipse at center, rgba(29, 78, 216, 0.04), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
