"use client";

import Image from "next/image";
import { useState } from "react";

// Hero portrait (§4.4). Square crop, ember frame with offset shadow, settles
// on hover. If /portrait.jpg is missing, renders an Fraunces "S" placeholder
// inside the same frame so the layout never breaks.

interface PortraitProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function Portrait({
  src = "/portrait.jpg",
  alt = "Siddharth Shah",
  size = 480,
}: PortraitProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="group relative inline-block"
      style={{ width: size, maxWidth: "100%" }}
    >
      <div
        className="
          relative aspect-square w-full
          border border-ember
          shadow-[4px_4px_0_0_rgba(224,160,107,0.2)]
          transition-shadow duration-300 ease-out
          group-hover:shadow-[2px_2px_0_0_rgba(224,160,107,0.2)]
        "
      >
        {!errored ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover grayscale-[0.05]"
            onError={() => setErrored(true)}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink-100">
            <span
              aria-hidden="true"
              className="font-display font-light text-ember"
              style={{ fontSize: size * 0.5, lineHeight: 1 }}
            >
              S
            </span>
            <span className="sr-only">{alt}</span>
          </div>
        )}
      </div>
    </div>
  );
}
