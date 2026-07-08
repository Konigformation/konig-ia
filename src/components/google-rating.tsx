"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function GoogleRating({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        "inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-3.5 py-1.5 shadow-sm backdrop-blur " +
        (className ?? "")
      }
    >
      <GoogleG className="size-4 shrink-0" />

      <motion.div
        className="flex items-center gap-0.5"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              delay: 0.35 + i * 0.12,
              type: "spring",
              stiffness: 420,
              damping: 12,
            }}
          >
            <Star
              className="size-3.5 fill-[#FBBC04] text-[#FBBC04] drop-shadow-[0_0_4px_rgba(251,188,4,0.35)]"
              strokeWidth={0}
            />
          </motion.span>
        ))}
      </motion.div>

      <span className="text-xs font-medium text-muted-foreground sm:text-[13px]">
        Noté 5 étoiles par nos apprenants sur{" "}
        <span className="font-semibold text-foreground">Google</span>
      </span>
    </motion.div>
  );
}
