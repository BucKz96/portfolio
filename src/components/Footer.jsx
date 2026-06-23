function Footer() {
  return (
    <footer className="border-t border-[color:rgb(var(--terminal-green-rgb)/0.15)] bg-zinc-950 py-4">
      <div className="mx-auto grid max-w-6xl gap-3 px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <img
            src="/logo.png"
            alt="Maxime L. logo"
            className="h-12 w-auto object-contain sm:h-[52px]"
          />
          <p className="font-mono text-xs text-zinc-400">Backend Python Developer</p>
        </div>
        <div className="flex flex-col gap-1 lg:justify-self-end lg:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            © 2026 — Portfolio personnel
          </p>
          <p className="font-mono text-[10px] text-zinc-500">
            <span className="text-[color:var(--terminal-green)]">$</span> build clean || deploy smart || scale fast
          </p>
        </div>
      </div>
      <a
        href="#home"
        aria-label="Retour en haut"
        className="fixed bottom-[10px] right-4 z-40 border border-[color:rgb(var(--terminal-green-rgb)/0.40)] bg-zinc-950 px-3 py-2 font-mono text-[11px] text-[color:var(--terminal-green)] shadow-[0_0_20px_rgba(0,0,0,0.35)] transition hover:border-[color:rgb(var(--terminal-green-rgb)/0.60)] hover:bg-[rgb(var(--terminal-green-rgb)/0.10)] sm:bottom-4 sm:right-6"
      >
        <span aria-hidden="true">↑</span>
        <span className="hidden sm:inline"> Retour en haut</span>
      </a>
    </footer>
  )
}

export default Footer
