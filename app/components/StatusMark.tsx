import type { AnchorStatus } from "@/lib/projects";

// Replaces v2's StatusPill. A marginalia mark, not a badge — per §5.2.
// Tilde for active states (in ember), checkmark for landed (in accent-blue).

interface StatusMarkProps {
  status: AnchorStatus;
  className?: string;
}

const labels: Record<AnchorStatus, string> = {
  "in-flight": "in flight",
  converging: "converging",
  landed: "landed",
};

export default function StatusMark({ status, className = "" }: StatusMarkProps) {
  const isLanded = status === "landed";
  const symbol = isLanded ? "✓" : "~";
  const symbolClass = isLanded ? "text-accent-blue" : "text-ember";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs lowercase tracking-wide text-bone-dim ${className}`}
    >
      <span className={symbolClass} aria-hidden="true">
        {symbol}
      </span>
      <span>{labels[status]}</span>
    </span>
  );
}
