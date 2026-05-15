"use client";

import { ArrowRight, Mail, MessageSquareText, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const contactRoutes = [
  {
    icon: MessageSquareText,
    title: "Creator Support",
    copy: "Collection setup, drop structure, image readiness, and launch review."
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    copy: "Creator identity, provenance checks, and marketplace trust signals."
  },
  {
    icon: Mail,
    title: "Partnerships",
    copy: "Curated releases, editorial features, and collector-facing campaigns."
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.58 }}
        className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <p className="tech-label text-xs font-bold text-vault-magenta/85">Contact desk</p>
          <h2 className="display-type mt-3 text-4xl text-white sm:text-5xl">
            Bring the next vault online
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
            Reach the NEONVAULT team for creator onboarding, featured drops, verification, or
            collector-side launch support.
          </p>

          <div className="mt-8 grid gap-4">
            {contactRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <article key={route.title} className="rounded-[2rem] border-2 border-white/10 bg-white/[0.045] p-5">
                  <div className="flex gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-vault-magenta/12 text-vault-magenta shadow-neon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="display-type text-2xl text-white">{route.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/55">{route.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <form className="glass-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="ui-type text-xs font-bold uppercase text-white/48">Name</span>
              <input
                className="h-14 rounded-2xl border-2 border-white/10 bg-white/[0.045] px-5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-vault-cyan/70"
                placeholder="Creator name"
              />
            </label>
            <label className="grid gap-2">
              <span className="ui-type text-xs font-bold uppercase text-white/48">Email</span>
              <input
                className="h-14 rounded-2xl border-2 border-white/10 bg-white/[0.045] px-5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-vault-cyan/70"
                placeholder="studio@neon.io"
                type="email"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="ui-type text-xs font-bold uppercase text-white/48">Request type</span>
            <select className="h-14 rounded-2xl border-2 border-white/10 bg-vault-night px-5 text-sm text-white outline-none transition focus:border-vault-cyan/70">
              <option>Creator onboarding</option>
              <option>Featured drop</option>
              <option>Verification</option>
              <option>Partnership</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2">
            <span className="ui-type text-xs font-bold uppercase text-white/48">Message</span>
            <textarea
              className="min-h-40 resize-none rounded-[1.75rem] border-2 border-white/10 bg-white/[0.045] px-5 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-vault-cyan/70"
              placeholder="Tell us about the collection, launch window, or support you need."
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-white/44">
              Response windows are prioritized for launch-ready collections and verified creator requests.
            </p>
            <button className="neon-button ui-type inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-3 text-sm font-bold">
              Send Request
              <Send size={16} />
            </button>
          </div>
        </form>
      </motion.div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          ["24H", "First response"],
          ["03", "Review tracks"],
          ["Live", "Creator desk"]
        ].map(([value, label]) => (
          <div key={label} className="glass-panel flex items-center justify-between rounded-[1.75rem] px-6 py-5">
            <p className="font-display text-3xl font-black text-white">{value}</p>
            <p className="ui-type text-xs font-bold uppercase text-white/48">{label}</p>
            <ArrowRight className="text-vault-cyan/70" size={18} />
          </div>
        ))}
      </div>
    </section>
  );
}
