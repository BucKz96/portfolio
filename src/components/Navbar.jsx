function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <nav className="relative h-16 px-8">
        <a
          href="#"
          className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-sm font-bold tracking-widest text-white"
        >
          MAXIME L.
        </a>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 font-mono text-sm text-zinc-400 md:flex">
          <a href="#" className="text-white">
            Accueil
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projets
          </a>
          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>
          <a href="#about" className="transition hover:text-white">
            À propos
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar