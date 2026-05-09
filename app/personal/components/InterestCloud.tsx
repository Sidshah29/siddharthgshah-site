"use client";

import { useState } from "react";
import { interests } from "@/lib/interests";
import { personalPage } from "@/lib/content";

// Interests cloud (per brief §12.6). Single line that wraps gracefully,
// hovering a tag fades others to 30% opacity and scales the hovered tag.

export default function InterestCloud() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {personalPage.interestsHeading}
      </h2>

      <p
        className="font-mono text-bone-dim text-sm md:text-base leading-loose lowercase"
        onMouseLeave={() => setHoverIndex(null)}
      >
        {interests.map((tag, i) => {
          const dimmed = hoverIndex !== null && hoverIndex !== i;
          const active = hoverIndex === i;
          return (
            <span key={tag}>
              <span
                onMouseEnter={() => setHoverIndex(i)}
                className={`inline-block transition-all duration-300 cursor-default ${
                  dimmed ? "opacity-30" : "opacity-100"
                } ${active ? "scale-[1.05] text-bone" : ""}`}
                style={{ transformOrigin: "left center" }}
              >
                {tag}
              </span>
              {i < interests.length - 1 && (
                <span className="text-bone-mute mx-2" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          );
        })}
      </p>
    </section>
  );
}
