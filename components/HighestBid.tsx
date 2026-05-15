"use client";

import { motion } from "framer-motion";
import { liveBids } from "@/lib/artworks";
import { ArtworkCard } from "./ArtworkCard";

export function HighestBid() {
  return (
    <section id="explore" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65 }}
        className="glass-panel rounded-[2.5rem] p-5 sm:p-8 lg:p-10 xl:p-12"
      >
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="display-type text-3xl text-white sm:text-4xl">Highest Live Bid</h2>
          <a href="#create" className="ui-type text-xs font-bold text-white/70 transition hover:text-vault-cyan">
            See All
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
          {liveBids.map((artwork) => (
            <ArtworkCard key={artwork.title} artwork={artwork} large />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
