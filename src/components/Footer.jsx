function Footer() {
  return (
    <footer className="border-t border-green-400/15 bg-zinc-950 py-4 font-mono">
      <div className="mx-auto grid max-w-6xl gap-3 px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="text-sm font-bold tracking-widest text-white">MAXIME L.</p>
          <p className="text-xs text-zinc-400">Backend Python Developer</p>
        </div>
        <div className="flex flex-col gap-1 lg:justify-self-end lg:text-right">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            © 2026 — Portfolio personnel
          </p>
          <p className="text-[10px] text-zinc-500">
            <span className="text-green-400">$</span> build clean || deploy smart || scale fast
          </p>
        </div>
      </div>
      <a
        href="#home"
        aria-label="Retour en haut"
        className="fixed bottom-3 right-4 z-40 border border-green-400/40 bg-zinc-950 px-3 py-2 text-[11px] text-green-400 shadow-[0_0_20px_rgba(0,0,0,0.35)] transition hover:border-green-400/60 hover:bg-green-400/10 sm:bottom-5 sm:right-6"
      >
        <span aria-hidden="true">↑</span>
        <span className="hidden sm:inline"> Retour en haut</span>
      </a>
    </footer>
  )
}

export default Footer
