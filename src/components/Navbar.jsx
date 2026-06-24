import { useEffect, useState } from 'react'

const navLinks = [
  ['home', 'Accueil'],
  ['about', 'À propos'],
  ['projects', 'Projet'],
  ['timeline', 'Parcours'],
  ['stack', 'Stack'],
  ['contact', 'Contact'],
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const navbarOffset = 65
      const documentHeight = document.documentElement.scrollHeight
      const isNearPageBottom = window.scrollY + window.innerHeight >= documentHeight - 8

      if (isNearPageBottom) {
        setActiveSection('contact')
        return
      }

      const scrollPosition = window.scrollY + navbarOffset
      const currentSection = navLinks.reduce((current, [id]) => {
        const section = document.getElementById(id)
        const sectionTop = section ? window.scrollY + section.getBoundingClientRect().top : Infinity

        return sectionTop <= scrollPosition ? id : current
      }, 'home')

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <nav className="relative h-16 px-4 sm:px-8">
        <a
          href="#home"
          className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center sm:left-8"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Maxime L. logo"
            className="h-[52px] w-auto object-contain sm:h-[60px] md:h-16"
          />
        </a>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 font-mono text-sm text-zinc-400 md:flex">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
              className={`transition hover:text-[color:var(--terminal-green)] ${activeSection === id ? 'text-[color:var(--terminal-green)]' : 'text-zinc-400'}`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/15 px-3 py-2 font-mono text-xs text-zinc-300 transition hover:border-[color:rgb(var(--terminal-green-rgb)/0.40)] hover:text-[color:var(--terminal-green)] md:hidden"
        >
          Menu
        </button>

        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full grid border-b border-white/10 bg-[#050505] px-4 py-3 font-mono text-sm shadow-[0_12px_24px_rgba(0,0,0,0.35)] md:hidden"
          >
            {navLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`border-b border-white/[0.06] px-2 py-3 transition last:border-b-0 hover:text-[color:var(--terminal-green)] ${activeSection === id ? 'text-[color:var(--terminal-green)]' : 'text-zinc-400'}`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
