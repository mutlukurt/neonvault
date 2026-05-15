"use client";

import Image from "next/image";
import { ArrowUpRight, Clock3, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const drops = [
  {
    title: "Neon Relics",
    status: "Live now",
    time: "12H 08M",
    volume: "42.8 ETH"
  },
  {
    title: "Synthetic Saints",
    status: "Opens soon",
    time: "03D 14H",
    volume: "18.4 ETH"
  },
  {
    title: "Chrome Afterlife",
    status: "Whitelist",
    time: "06D 02H",
    volume: "31.7 ETH"
  }
];

export function ExploreDrops() {
  return (
    <section id="drops" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="tech-label text-xs font-bold text-vault-cyan/80">Explore drops</p>
          <h2 className="display-type mt-3 text-4xl text-white sm:text-5xl">Live windows for rare AI releases</h2>
        </div>
        <a href="#explore" className="ui-type inline-flex items-center gap-2 text-xs font-bold text-white/70 transition hover:text-vault-cyan">
          Highest Bids
          <ArrowUpRight size={15} />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65 }}
        className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <article className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem] border-2 border-white/16 bg-vault-night">
          <Image
            src="/generated/explore-drops-vault.webp"
            alt="Neon collectible pods in a futuristic drop vault"
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vault-ink via-vault-ink/38 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-[2rem] border-2 border-white/14 bg-vault-ink/88 p-5 sm:inset-x-6 sm:bottom-6 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-vault-magenta/35 bg-vault-magenta/12 px-3 py-1.5 text-vault-magenta">
                  <Flame size={14} />
                  <span className="ui-type text-[11px] font-bold uppercase">Featured drop</span>
                </div>
                <h3 className="display-type mt-4 text-3xl text-white sm:text-4xl">Neon Relics</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/62">
                  A limited release of cybernetic artifacts, curated for collectors who want active bidding momentum.
                </p>
              </div>
              <button className="neon-button ui-type rounded-2xl px-6 py-3 text-sm font-bold">
                Enter Drop
              </button>
            </div>
          </div>
        </article>

        <div className="grid gap-4">
          {drops.map((drop, index) => (
            <motion.article
              key={drop.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel rounded-[2.5rem] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="ui-type text-xs font-bold uppercase text-vault-cyan/80">{drop.status}</p>
                  <h3 className="display-type mt-2 text-3xl text-white">{drop.title}</h3>
                </div>
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-vault-cyan/10 text-vault-cyan shadow-cyan">
                  {index === 0 ? <Sparkles size={20} /> : <Clock3 size={20} />}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <div className="bg-vault-ink/70 px-4 py-3">
                  <p className="ui-type text-[10px] font-bold uppercase text-white/45">Window</p>
                  <p className="font-display mt-1 text-lg font-black text-white">{drop.time}</p>
                </div>
                <div className="bg-vault-ink/70 px-4 py-3">
                  <p className="ui-type text-[10px] font-bold uppercase text-white/45">Volume</p>
                  <p className="font-display mt-1 text-lg font-black text-white">{drop.volume}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
