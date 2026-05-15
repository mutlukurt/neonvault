"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navLinks = [
  ["Home", "#home"],
  ["Explore", "#drops"],
  ["Create", "#create"],
  ["Contact", "#contact"],
  ["Blog", "#blog"]
];

const mobileMenuItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.24 } }
};

const mobileMenu = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      staggerChildren: 0.05,
      delayChildren: 0.06
    }
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18 } }
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 84);
  });

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <AnimatePresence mode="wait" initial={false}>
        {!scrolled ? (
          <motion.div
            key="expanded-nav"
            className="pointer-events-auto mx-auto w-[min(1200px,calc(100%-2rem))]"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="relative flex origin-top items-center justify-between overflow-hidden rounded-[2.5rem] border border-transparent bg-transparent px-0 py-7 shadow-none md:px-1 md:py-8">
              <a
                href="#home"
                className="relative z-10 font-display text-2xl font-black uppercase tracking-[0.08em] text-white"
                aria-label="NEONVAULT home"
              >
                <span className="text-vault-magenta">NEON</span>VAULT
              </a>

              <nav className="ui-type relative z-10 hidden items-center gap-3 text-xs font-bold text-white/78 md:flex">
                {navLinks.map(([label, href]) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="rounded-2xl px-4 py-3 transition hover:bg-white/10 hover:text-vault-cyan"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 1 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </nav>

              <div className="relative z-10 hidden md:block">
                <motion.button
                  className="neon-button ui-type rounded-2xl px-8 py-3 text-xs font-bold"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 3 }}
                >
                  Connect Wallet
                </motion.button>
              </div>

              <motion.button
                className="neon-button relative z-10 grid size-10 place-items-center rounded-xl md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                whileTap={{ y: 3 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="compact-nav"
            className="pointer-events-auto mx-auto mt-6 w-[min(66rem,calc(100%-2rem))]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="glass-panel relative flex origin-top items-center justify-between overflow-hidden rounded-[1.75rem] px-4 py-3 md:px-6">
              <motion.a
                href="#home"
                className="relative z-10 font-display text-xl font-black uppercase tracking-[0.08em] text-white"
                aria-label="NEONVAULT home"
                initial={{ x: -34 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              >
                <span className="text-vault-magenta">NEON</span>VAULT
              </motion.a>

              <motion.nav
                className="ui-type relative z-10 hidden items-center gap-3 text-xs font-bold text-white/78 md:flex"
                initial={{ scaleX: 1.08 }}
                animate={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              >
                {navLinks.map(([label, href]) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="rounded-2xl px-4 py-3 transition hover:bg-white/10 hover:text-vault-cyan"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 1 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.div
                className="relative z-10 hidden md:block"
                initial={{ x: 34 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              >
                <motion.button
                  className="neon-button ui-type rounded-2xl px-6 py-2 text-xs font-bold"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 3 }}
                >
                  Connect Wallet
                </motion.button>
              </motion.div>

              <motion.button
                className="neon-button relative z-10 grid size-10 place-items-center rounded-xl md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                whileTap={{ y: 3 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto mx-auto w-[min(66rem,calc(100%-2rem))]">
        <AnimatePresence>
          {open && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenu}
              className="glass-panel mt-3 grid gap-2 overflow-hidden rounded-2xl p-4 md:hidden"
            >
              {navLinks.map(([label, href]) => (
                <motion.a
                  key={label}
                  variants={mobileMenuItem}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="ui-type rounded-xl px-4 py-3 text-sm font-bold text-white/82 hover:bg-white/10"
                >
                  {label}
                </motion.a>
              ))}
              <motion.button variants={mobileMenuItem} className="neon-button ui-type mt-1 rounded-2xl px-5 py-3 text-sm font-bold">
                Connect Wallet
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
