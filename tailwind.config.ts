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
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
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
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "grid-faint": "linear-gradient(rgba(245,244,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,244,238,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
