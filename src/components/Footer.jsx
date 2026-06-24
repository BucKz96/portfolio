import { useEffect, useState } from 'react'

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    updateBackToTopVisibility()
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateBackToTopVisibility)
    }
  }, [])

  return (
    <footer className="border-t border-[color:rgb(var(--terminal-green-rgb)/0.15)] bg-zinc-950 py-3 sm:py-4">
      <div className="mx-auto grid max-w-7xl justify-items-center gap-3 px-6 text-center lg:grid-cols-2 lg:items-center lg:justify-items-stretch lg:text-left">
        <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:justify-start lg:gap-x-4">
          <img
            src="/logo.png"
            alt="Maxime L. logo"
            className="h-10 w-auto object-contain sm:h-[52px]"
          />
          <p className="font-mono text-xs text-zinc-400">Backend Python Developer</p>
        </div>
        <div className="flex flex-col items-center gap-1 lg:items-end lg:justify-self-end lg:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            © 2026 — Portfolio personnel
          </p>
          <p className="terminal-cursor font-mono text-[10px] text-zinc-500">
            <span className="text-[color:var(--terminal-green)]">$</span> build clean || deploy smart || scale fast
          </p>
        </div>
      </div>
      <a
        href="#home"
        aria-label="Retour en haut"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        className={`fixed bottom-3 right-3 z-40 border border-[color:rgb(var(--terminal-green-rgb)/0.40)] bg-zinc-950 px-2.5 py-1.5 font-mono text-[10px] text-[color:var(--terminal-green)] shadow-[0_0_20px_rgba(0,0,0,0.35)] transition-[opacity,transform,background-color,border-color] duration-200 motion-reduce:transform-none motion-reduce:transition-none hover:border-[color:rgb(var(--terminal-green-rgb)/0.60)] hover:bg-[rgb(var(--terminal-green-rgb)/0.10)] sm:bottom-4 sm:right-6 sm:px-3 sm:py-2 sm:text-[11px] ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
      >
        <span aria-hidden="true">↑</span>
        <span className="hidden sm:inline"> Retour en haut</span>
      </a>
    </footer>
  )
}

export default Footer
