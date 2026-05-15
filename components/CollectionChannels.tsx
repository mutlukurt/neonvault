"use client";

import { BadgeCheck, CircleDollarSign, Layers3, Radar } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
  {
    icon: Radar,
    title: "Signal Drops",
    copy: "Time-boxed releases with rarity windows, live bid motion, and curated reveal pacing."
  },
  {
    icon: Layers3,
    title: "Creator Vaults",
    copy: "Portfolio-grade collections grouped by visual world, metadata depth, and market signal."
  },
  {
    icon: BadgeCheck,
    title: "Proof Layer",
    copy: "Verified creator identity, asset provenance, and collectible status presented before bidding."
  },
  {
    icon: CircleDollarSign,
    title: "Smart Bids",
    copy: "Collector-first pricing context with ETH and USD values kept close to each artwork."
  }
];

export function CollectionChannels() {
  return (
    <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
      <div className="mb-7 max-w-2xl">
        <p className="tech-label text-xs font-bold text-vault-cyan/80">Vault systems</p>
        <h2 className="display-type mt-3 text-4xl text-white sm:text-5xl">Built for high-signal collecting</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {channels.map((channel, index) => {
          const Icon = channel.icon;

          return (
            <motion.article
              key={channel.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-7"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-vault-cyan/60 to-transparent" />
              <div className="grid size-12 place-items-center rounded-2xl bg-vault-cyan/10 text-vault-cyan shadow-cyan">
                <Icon size={22} />
              </div>
              <h3 className="display-type mt-7 text-3xl text-white">{channel.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{channel.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
