"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, ImagePlus, Layers3, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";

const creationSteps = [
  {
    icon: ImagePlus,
    title: "Import Art",
    copy: "Upload or select generated pieces, then shape the collection around a visual system."
  },
  {
    icon: Layers3,
    title: "Build Metadata",
    copy: "Group rarity, edition rules, creator notes, and drop timing into a polished vault."
  },
  {
    icon: BadgeCheck,
    title: "Verify Release",
    copy: "Preview collector-facing details before the drop becomes visible in the marketplace."
  }
];

export function CreateCollection() {
  return (
    <section id="create" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65 }}
        className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-xl border border-vault-magenta/35 bg-vault-magenta/12 px-4 py-2 text-vault-magenta shadow-neon">
            <WandSparkles size={15} />
            <span className="ui-type text-xs font-bold uppercase">Create collection</span>
          </div>
          <h2 className="display-type mt-5 text-4xl text-white sm:text-5xl">
            Assemble a drop-ready creator vault
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 sm:text-base">
            Turn generated artworks into a collector-grade release with visual hierarchy,
            status, rarity context, and a clean bidding path.
          </p>

          <div className="mt-8 grid gap-4">
            {creationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex gap-4 rounded-[2rem] border-2 border-white/10 bg-white/[0.045] p-5">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-vault-cyan/10 text-vault-cyan shadow-cyan">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="display-type text-2xl text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/55">{step.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="neon-button ui-type mt-8 inline-flex items-center gap-3 rounded-2xl px-7 py-3 text-sm font-bold">
            Launch Studio
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="relative min-h-[31rem] overflow-hidden rounded-[2.5rem] border-2 border-white/16 bg-vault-night">
          <Image
            src="/generated/create-collection-studio.webp"
            alt="Futuristic creator studio assembling a neon digital collectible collection"
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vault-ink/74 via-transparent to-vault-ink/12" />
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
            {[
              ["03", "Series"],
              ["128", "Assets"],
              ["Live", "Status"]
            ].map(([value, label]) => (
              <div key={label} className="bg-vault-ink/70 px-4 py-4 text-center">
                <p className="font-display text-xl font-black text-white">{value}</p>
                <p className="ui-type mt-1 text-[10px] font-bold uppercase text-white/48">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
