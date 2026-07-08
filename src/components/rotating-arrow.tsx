"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

export function RotatingArrow() {
  return (
    <motion.span
      className="flex size-7 items-center justify-center rounded-full border border-[var(--accent-solid)]/30 bg-background text-[var(--accent-solid)] shadow-sm"
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <RefreshCw className="size-3.5" strokeWidth={2} />
    </motion.span>
  );
}
