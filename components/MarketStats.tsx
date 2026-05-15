"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "80K+", label: "Assets Stored" },
  { value: "50K+", label: "Verified Creators" },
  { value: "12.8K", label: "Live Collectors" },
  { value: "24H", label: "Drop Windows" }
];

const statsGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075
    }
  }
};

const statsItem = {
  hidden: {
    filter: "blur(7px)",
    opacity: 0,
    y: 22
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function MarketStats() {
  return (
    <section className="section-shell pb-16 sm:pb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={statsGroup}
        viewport={{ once: true, margin: "-120px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statsItem}
            className="glass-panel rounded-[2.5rem] px-6 py-8 text-center sm:px-8"
          >
            <p className="font-display text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
            <p className="ui-type mt-2 text-xs font-bold uppercase text-white/52">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
