"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Artwork } from "@/lib/artworks";

type ArtworkCardProps = {
  artwork: Artwork;
  large?: boolean;
};

export function ArtworkCard({ artwork, large = false }: ArtworkCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`glass-panel group relative overflow-hidden rounded-[2.5rem] p-4 sm:p-5 ${
        artwork.featured ? "border-vault-magenta/65 shadow-neon" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-vault-magenta/14 via-transparent to-vault-cyan/12 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className={`relative overflow-hidden rounded-[1.75rem] bg-vault-night/70 ${large ? "aspect-[1.06]" : "aspect-square"}`}>
        <Image
          src={artwork.image}
          alt={artwork.alt}
          fill
          loading="eager"
          unoptimized
          sizes={large ? "(max-width: 768px) 85vw, 320px" : "(max-width: 768px) 90vw, 260px"}
          className="object-cover transition duration-700 group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vault-ink/16 via-transparent to-white/4" />
      </div>
      <div className="relative mt-4 flex items-start justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <h3 className="ui-type truncate text-[15px] font-bold text-white">{artwork.title}</h3>
          <p className="ui-type mt-1 text-xs font-semibold text-white/55">{artwork.price}</p>
        </div>
        <div className="ui-type flex shrink-0 items-center gap-1 text-[11px] font-semibold text-white/58">
          {artwork.stat}
          <Heart size={14} className="text-white/55 transition group-hover:fill-vault-magenta group-hover:text-vault-magenta" />
        </div>
      </div>
      <button className="neon-button ui-type relative mt-5 w-full rounded-2xl py-3 text-sm font-bold sm:py-3.5">
        Place Bid
      </button>
    </motion.article>
  );
}
