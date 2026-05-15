export function Footer() {
  return (
    <footer className="relative z-10 py-8 sm:py-10">
      <div className="glass-panel section-shell flex flex-col items-center justify-between gap-6 rounded-[2.5rem] p-6 text-center text-sm text-white/58 sm:flex-row sm:p-8 sm:text-left">
        <p className="font-display text-xl font-black uppercase tracking-[0.08em] text-white">
          <span className="text-vault-magenta">NEON</span>VAULT
        </p>
        <p>© 2026 NEONVAULT. AI-crafted collectibles and creator drops.</p>
        <div className="ui-type flex flex-wrap justify-center gap-2 font-bold">
          <a className="rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-vault-cyan" href="#home">
            Home
          </a>
          <a className="rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-vault-cyan" href="#drops">
            Explore
          </a>
          <a className="rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-vault-cyan" href="#create">
            Create
          </a>
          <a className="rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-vault-cyan" href="#blog">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
