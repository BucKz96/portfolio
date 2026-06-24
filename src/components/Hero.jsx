import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] min-h-[680px] max-h-[760px] scroll-mt-[112px] overflow-hidden bg-zinc-950">
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl items-center px-6 lg:grid-cols-[minmax(0,1fr)_500px] xl:grid-cols-[minmax(0,1fr)_520px]">
        <div className="relative z-20 max-w-xl translate-y-25">
          <p className="mb-5 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
            Backend Python Developer
          </p>

          <h1 className="font-display text-6xl font-bold tracking-tight text-white md:text-7xl">
            Maxime L.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-300">
            Développeur backend orienté Python, API REST et automatisation. 
            Trois ans d’expérience en scraping, traitement de données et développement d’applications métier.
          </p>

          <div className="mt-6 flex w-fit flex-wrap border border-white/10 bg-zinc-950/50 font-mono text-xs text-zinc-300">
            {['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Linux'].map((tech, index) => (
              <span key={tech} className="px-4 py-3">
                {tech}
                {index < 4 && <span className="ml-4 text-[color:var(--terminal-green)]">•</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="border border-[color:var(--terminal-green)] bg-[rgb(var(--terminal-green-rgb)/0.10)] px-8 py-4 font-mono text-sm font-semibold text-[color:var(--terminal-green)] transition hover:bg-[color:var(--terminal-green)] hover:text-zinc-950"
            >
              &gt; Voir mes projets
            </a>

            <a
              href="https://github.com/BucKz96"
              target="_blank"
              rel="noreferrer"
              className="border border-white/15 bg-zinc-950/40 px-8 py-4 font-mono text-sm font-semibold text-white transition hover:border-[color:var(--terminal-green)] hover:text-[color:var(--terminal-green)]"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 inline-flex border border-white/10 bg-zinc-950/50 px-4 py-3 font-mono text-xs text-zinc-400">
            <span className="text-[color:var(--terminal-green)]">$</span>
            <span className="terminal-cursor ml-2">
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
