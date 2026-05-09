import type { Interest } from "@/lib/projects";

// Replaces v2's VectorChip. Lowercase short words instead of single letters
// (per §6.4): core / finance / media. The lowercase reads as a typographic mark.

interface InterestChipProps {
  interest: Interest;
  className?: string;
}

const styles: Record<Interest, string> = {
  core: "bg-accent-blue text-bone",
  finance: "bg-accent-amber text-ink",
  media: "bg-accent-red text-bone",
};

export default function InterestChip({ interest, className = "" }: InterestChipProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide lowercase ${styles[interest]} ${className}`}
    >
      {interest}
    </span>
  );
}
