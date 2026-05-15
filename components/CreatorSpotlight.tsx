"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const creatorMetrics = [
  ["1.9K", "Minted"],
  ["98%", "Verified"],
  ["4.8", "Signal"]
];

export function CreatorSpotlight() {
  return (
    <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/16 bg-vault-night/80"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vault-ink via-vault-ink/82 to-transparent" />
        <Image
          src="/generated/creator-spotlight-vault.webp"
          alt="Cyberpunk AI creator inside a neon digital art vault"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover opacity-72"
        />
        <div className="relative z-10 grid min-h-[34rem] items-end gap-8 p-5 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
          <div className="max-w-xl py-6 sm:py-10">
            <div className="inline-flex items-center gap-2 rounded-xl border border-vault-cyan/30 bg-vault-cyan/10 px-4 py-2 text-vault-cyan shadow-cyan">
              <Sparkles size={15} />
              <span className="ui-type text-xs font-bold uppercase">Creator spotlight</span>
            </div>
            <h2 className="display-type mt-5 text-4xl text-white sm:text-5xl">
              A featured vault for the next collector wave
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/68 sm:text-base">
              A featured creator vault with verified drops, cinematic provenance, and collector-ready
              releases built for high-signal bidding.
            </p>
            <div className="mt-7 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {creatorMetrics.map(([value, label]) => (
                <div key={label} className="bg-vault-ink/72 px-4 py-4 text-center backdrop-blur-xl">
                  <p className="font-display text-xl font-black text-white">{value}</p>
                  <p className="ui-type mt-1 text-[10px] font-bold uppercase text-white/48">{label}</p>
                </div>
              ))}
            </div>
            <button className="neon-button ui-type mt-8 inline-flex items-center gap-3 rounded-2xl px-7 py-3 text-sm font-bold">
              View Creator
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
