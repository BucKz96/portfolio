import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section id="home" className="relative h-auto scroll-mt-[112px] overflow-hidden bg-zinc-950 pb-10 pt-24 lg:h-[calc(100vh-80px)] lg:min-h-[680px] lg:max-h-[760px] lg:py-0">
      <div className="absolute inset-y-0 left-0 right-6 overflow-hidden lg:hidden" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full origin-bottom scale-[1.17] object-cover object-[58%_3%] opacity-45 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/35 to-zinc-950/70" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl items-center px-6 lg:grid-cols-[minmax(0,1fr)_500px] xl:grid-cols-[minmax(0,1fr)_520px]">
        <div className="relative z-20 max-w-xl translate-y-0 lg:translate-y-25">
          <p className="mb-3 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)] sm:mb-5">
            Backend Python Developer
          </p>

          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Maxime L.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-9">
            Développeur backend orienté Python, API REST et automatisation. 
            Trois ans d’expérience en scraping, traitement de données et développement d’applications métier.
          </p>

          <div className="mt-4 w-full border border-white/10 bg-zinc-950/50 font-mono text-xs text-zinc-300 sm:mt-6 sm:w-fit">
            <div className="flex flex-col items-center gap-1 py-2.5 sm:hidden">
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span>Python</span>
                <span className="text-[color:var(--terminal-green)]">•</span>
                <span>FastAPI</span>
                <span className="text-[color:var(--terminal-green)]">•</span>
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span>Docker</span>
                <span className="text-[color:var(--terminal-green)]">•</span>
                <span>Linux</span>
              </div>
            </div>

            <div className="hidden flex-wrap sm:flex">
              {['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Linux'].map((tech, index) => (
                <span key={tech} className="px-4 py-3">
                  {tech}
                  {index < 4 && <span className="ml-4 text-[color:var(--terminal-green)]">•</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="border border-[color:var(--terminal-green)] bg-[rgb(var(--terminal-green-rgb)/0.10)] px-6 py-3.5 text-center font-mono text-sm font-semibold text-[color:var(--terminal-green)] transition hover:bg-[color:var(--terminal-green)] hover:text-zinc-950 sm:px-8 sm:py-4 sm:text-left"
            >
              &gt; Voir mes projets
            </a>

            <a
              href="https://github.com/BucKz96"
              target="_blank"
              rel="noreferrer"
              className="border border-white/15 bg-zinc-950/40 px-6 py-3.5 text-center font-mono text-sm font-semibold text-white transition hover:border-[color:var(--terminal-green)] hover:text-[color:var(--terminal-green)] sm:px-8 sm:py-4 sm:text-left"
            >
              GitHub
            </a>
          </div>

          <div className="mt-6 flex w-full max-w-full justify-center border border-white/10 bg-zinc-950/50 px-3 py-2.5 font-mono text-[10px] text-zinc-400 sm:mt-8 sm:inline-flex sm:w-auto sm:justify-start sm:px-4 sm:py-3 sm:text-xs">
            <span className="text-[color:var(--terminal-green)]">$</span>
            <span className="terminal-cursor hero-terminal-cursor ml-2">
              build clean&nbsp;&nbsp;||&nbsp;&nbsp;deploy smart&nbsp;&nbsp;||&nbsp;&nbsp;scale fast
            </span>
          </div>
        </div>

        <div className="absolute inset-y-0 right-6 hidden w-[62%] overflow-hidden lg:block xl:w-[60%] 2xl:w-[58%]">
          <img
            src={heroImage}
            alt="Portrait noir et blanc de Maxime"
            className="h-full w-full origin-top scale-[1.25] object-cover object-top grayscale"
          />

          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/85" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
          <div className="absolute inset-0 bg-zinc-950/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
