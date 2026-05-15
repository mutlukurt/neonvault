"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Scan", "Browse curated drops with clear pricing, status, and creator signal."],
  ["02", "Inspect", "Open the visual world, rarity context, and provenance before committing."],
  ["03", "Bid", "Place a wallet-ready bid with ETH and USD confidence at the same moment."],
  ["04", "Vault", "Keep won assets organized in a collector profile designed for repeat visits."]
];

export function CollectorFlow() {
  return (
    <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="tech-label text-xs font-bold text-vault-magenta/85">Collector flow</p>
          <h2 className="display-type mt-3 text-4xl text-white sm:text-5xl">From discovery to vault</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/55">
          A tighter path for collectors who want to evaluate, bid, and store assets without losing context.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(([number, title, copy], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="glass-panel relative overflow-hidden rounded-[2.5rem] p-7"
          >
            <p className="font-display text-4xl font-black text-white/12">{number}</p>
            <h3 className="display-type mt-8 text-3xl text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/56">{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
