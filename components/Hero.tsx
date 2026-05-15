"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siEthereum } from "simple-icons";
import { FloatingChip } from "./FloatingChip";
import { SimpleBrandIcon } from "./SimpleBrandIcon";

const countdown = [
  ["12", "Days"],
  ["03", "Hours"],
  ["11", "Minutes"],
  ["43", "Seconds"]
];

const heroGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.095,
      delayChildren: 0.38
    }
  }
};

const heroItem = {
  hidden: {
    filter: "blur(8px)",
    opacity: 0,
    y: 24
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.58 }
  }
};

const counterGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.75
    }
  }
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-28 lg:pb-20 lg:pt-28">
      <div className="absolute left-[-13rem] top-24 h-[34rem] w-[34rem] rounded-full bg-vault-magenta/22 blur-[124px]" />
      <div className="absolute right-[-9rem] top-2 h-[34rem] w-[34rem] rounded-full bg-vault-cyan/14 blur-[128px]" />
      <div className="absolute bottom-12 right-12 h-[30rem] w-[30rem] rounded-full bg-vault-violet/18 blur-[140px]" />

      <div className="section-shell grid min-h-[calc(100vh-5.5rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroGroup}
          className="relative z-20 max-w-2xl pt-10 sm:pt-12 lg:pt-4"
        >
          <motion.p variants={heroItem} className="tech-label text-sm font-bold text-white/80">
            AI marketplace for
          </motion.p>
          <motion.h1 variants={heroItem} className="hero-title mt-3 max-w-[10.5ch] text-[clamp(2.4rem,10.4vw,3rem)] uppercase leading-[0.95] text-white sm:text-[clamp(3rem,7.2vw,5.35rem)] xl:text-[clamp(3.2rem,7vw,5.8rem)]">
            Digital
            <span className="block text-white/95">Creators</span>
          </motion.h1>
          <motion.p variants={heroItem} className="ui-type mt-6 max-w-[34rem] text-base leading-7 text-white/72 md:text-lg">
            Discover limited AI-crafted collectibles, creator drops, and futuristic digital art
            collections in one immersive marketplace.
          </motion.p>
          <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <a href="#drops" className="neon-button ui-type inline-flex min-w-40 justify-center rounded-2xl px-7 py-4 text-sm font-bold sm:min-w-44 sm:px-8">
              Explore Drops
            </a>
            <a href="#create" className="ui-type group flex items-center gap-3 text-sm font-bold text-white/88">
              Create Collection
              <ArrowRight className="transition group-hover:translate-x-1 group-hover:text-vault-cyan" size={18} />
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="glass-panel mt-12 w-full max-w-[21rem] rounded-[2.5rem] p-5 sm:mt-16 sm:p-6 lg:mt-20"
          >
            <p className="ui-type mb-3 text-xs font-bold text-white/80">Today&apos;s Highest Bid</p>
            <div className="flex items-center gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-vault-cyan/15 text-vault-cyan">
                <SimpleBrandIcon icon={siEthereum} className="text-vault-cyan" size={22} title="Ethereum" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/55">Crimson Ether</p>
                <p className="ui-type text-sm font-bold text-white">15.50 ETH = 23,932.31 USD</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-10 min-h-[500px] overflow-visible sm:min-h-[600px] lg:min-h-[690px]">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-2 top-2 mx-auto max-w-[570px] lg:bottom-0 lg:top-0 xl:max-w-[610px]"
          >
            <div className="absolute inset-x-8 bottom-20 top-10 rounded-full bg-vault-magenta/18 blur-[76px]" />
            <Image
              src="/generated/hero-cyber-creator.webp"
              alt="Original cyberpunk AI creator portrait with neon rim lighting"
              fill
              priority
              sizes="(max-width: 768px) 95vw, 52vw"
              className="object-contain object-bottom mix-blend-screen drop-shadow-[0_0_74px_rgba(255,46,166,.3)] [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_86%)]"
            />
          </motion.div>

          <FloatingChip className="absolute right-0 top-[19%] hidden sm:block lg:right-2 xl:right-0" delay={0.2}>
            100% Verified
          </FloatingChip>
          <FloatingChip className="absolute left-0 top-[43%] hidden sm:block lg:left-2 xl:left-0" delay={0.8}>
            50K+ Creators
          </FloatingChip>
          <FloatingChip className="absolute bottom-[31%] right-4 hidden sm:block lg:right-8" delay={1.3}>
            80K+ Assets Stored
          </FloatingChip>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={counterGroup}
            className="absolute bottom-0 left-1/2 grid -translate-x-1/2 grid-cols-4 gap-2 sm:bottom-4 sm:gap-3 lg:left-auto lg:right-0 lg:translate-x-0"
          >
            {countdown.map(([value, label]) => (
              <motion.div key={label} variants={heroItem} className="glass-panel grid h-20 w-16 place-items-center rounded-[1.5rem] sm:h-24 sm:w-20">
                <div className="text-center">
                  <p className="font-display text-xl font-bold text-white">{value}</p>
                  <p className="ui-type mt-1 text-[10px] font-semibold text-white/62">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
