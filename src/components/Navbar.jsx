function Navbar() {
    return (
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-widest text-white">
            MAXIME L.
          </a>
  
          <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">À propos</a>
            <a href="#projects" className="hover:text-white">Projets</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Navbar