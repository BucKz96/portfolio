function Footer() {
  return (
    <footer className="border-t border-green-400/15 bg-zinc-950 px-6 py-4 font-mono">
      <div className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-[auto_1fr] lg:grid-rows-2 lg:gap-x-8 lg:gap-y-1">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 lg:row-span-2 lg:self-center">
          <p className="text-sm font-bold tracking-widest text-white">MAXIME L.</p>
          <p className="text-xs text-zinc-400">Backend Python Developer</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600 lg:col-start-2 lg:row-start-1 lg:self-end lg:justify-self-center">
          © 2026 — Portfolio personnel
        </p>
        <p className="text-[10px] text-zinc-500 lg:col-start-2 lg:row-start-2 lg:self-start lg:justify-self-center">
          <span className="text-green-400">$</span> build clean || deploy smart || scale fast
        </p>
      </div>
      <a
        href="#home"
        className="fixed bottom-3 right-4 z-40 border border-green-400/40 bg-zinc-950 px-3 py-2 text-[11px] text-green-400 shadow-[0_0_20px_rgba(0,0,0,0.35)] transition hover:border-green-400/60 hover:bg-green-400/10 sm:bottom-5 sm:right-6"
      >
        ↑ Retour en haut
      </a>
    </footer>
  )
}

export default Footer
