"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How verified AI drops build collector trust",
    category: "Market Signal",
    read: "5 min",
    image: "/generated/blog-collector-trust.webp",
    alt: "Verified AI collectible inside a neon authentication chamber",
    copy: "A practical look at provenance, rarity windows, and why collectors need context before bidding."
  },
  {
    title: "Designing a drop-ready creator vault",
    category: "Creator Guide",
    read: "7 min",
    image: "/generated/blog-creator-vault.webp",
    alt: "Creator assembling a drop-ready digital collection in a holographic studio",
    copy: "From visual systems to metadata, here is the structure behind a polished collection launch."
  },
  {
    title: "Reading bid momentum without losing the art",
    category: "Collector Flow",
    read: "4 min",
    image: "/generated/blog-bid-momentum.webp",
    alt: "Neon auction gallery with bid momentum arcs around a featured artwork",
    copy: "How price, story, and signal can sit together without turning the marketplace into a spreadsheet."
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="tech-label text-xs font-bold text-vault-cyan/80">Vault journal</p>
          <h2 className="display-type mt-3 text-4xl text-white sm:text-5xl">
            Notes for creators and collectors
          </h2>
        </div>
        <a href="#contact" className="ui-type group inline-flex items-center gap-3 text-sm font-bold text-white/82">
          Pitch a story
          <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-vault-cyan" size={18} />
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.48, delay: index * 0.06 }}
            className="glass-panel group overflow-hidden rounded-[2.5rem] p-4"
          >
            <div className="relative aspect-[1.2] overflow-hidden rounded-[1.65rem] bg-vault-night">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover transition duration-500 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vault-ink/70 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-vault-ink/72 px-3 py-2 text-white/78">
                <BookOpen size={14} />
                <span className="ui-type text-[10px] font-bold uppercase">{post.category}</span>
              </div>
            </div>

            <div className="p-3 pt-5">
              <div className="ui-type mb-3 flex items-center gap-2 text-xs font-bold text-white/45">
                <Clock3 size={14} />
                {post.read}
              </div>
              <h3 className="display-type text-3xl text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/56">{post.copy}</p>
              <button className="ui-type mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-white/12 px-5 py-3 text-xs font-bold text-white/82 transition hover:border-vault-cyan/60 hover:text-vault-cyan">
                Read Article
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
