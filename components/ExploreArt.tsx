"use client";

import { motion } from "framer-motion";
import { exploreArtworks } from "@/lib/artworks";
import { ArtworkCard } from "./ArtworkCard";

export function ExploreArt() {
  return (
    <section id="artwork" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7">
        <h2 className="display-type text-3xl text-white sm:text-4xl">Explore Art Work</h2>
        <a href="#contact" className="ui-type text-xs font-bold text-white/70 transition hover:text-vault-cyan">
          See All
        </a>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } }
        }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      >
        {exploreArtworks.map((artwork) => (
          <motion.div
            key={artwork.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <ArtworkCard artwork={artwork} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
