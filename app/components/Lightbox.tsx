"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface LightboxProps {
  images: LightboxImage[];
  open: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, open, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")    onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {open !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] lightbox-overlay backdrop-blur-3xl backdrop-saturate-[2.2] flex items-center justify-center p-6 md:p-12"
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 z-10 p-2 text-bone hover:text-accent-blue transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute top-6 left-6 z-10 font-mono text-xs uppercase tracking-[0.25em] text-bone">
            {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 z-10 p-3 text-bone hover:text-accent-blue transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <motion.div
            key={open}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 z-10 p-3 text-bone hover:text-accent-blue transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {images[open].caption && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-2xl text-center font-display italic text-bone-dim text-lg">
              {images[open].caption}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
