"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingChipProps = {
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function FloatingChip({ className = "", children, delay = 0 }: FloatingChipProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`glass-panel ui-type rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-[0.04em] text-white/90 ${className}`}
    >
      {children}
    </motion.div>
  );
}
