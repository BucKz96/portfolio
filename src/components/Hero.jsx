import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden bg-zinc-950">
      <div className="absolute right-0 top-0 h-screen w-[45vw] overflow-hidden">
        <img
          src={heroImage}
          alt="Portrait noir et blanc de Maxime"
          className="h-full w-full object-cover object-[82%_35%] grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/1 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/85" />
        <div className="absolute inset-0 bg-zinc-950/10" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-xl -translate-y-1">
          <p className="mb-5 border-l-2 border-green-400 pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Backend Python Developer
          </p>

          <h1 className="font-mono text-6xl font-bold tracking-tight text-white md:text-7xl">
            Maxime L.
          </h1>

          <p className="mt-6 max-w-xl font-mono text-lg leading-9 text-zinc-300">
            Développeur backend orienté Python, API REST et automatisation. 
            Trois ans d’expérience en scraping, traitement de données et développement d’applications métier.
          </p>

          <div className="mt-6 flex w-fit flex-wrap border border-white/10 bg-zinc-950/50 font-mono text-xs text-zinc-300">
            {['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Linux'].map((tech, index) => (
              <span key={tech} className="px-4 py-3">
                {tech}
                {index < 4 && <span className="ml-4 text-green-400">•</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="border border-green-400 bg-green-400/10 px-8 py-4 font-mono text-sm font-semibold text-green-400 transition hover:bg-green-400 hover:text-zinc-950"
            >
              &gt; Voir mes projets
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-white/15 bg-zinc-950/40 px-8 py-4 font-mono text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-400"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 inline-flex border border-white/10 bg-zinc-950/50 px-4 py-3 font-mono text-xs text-zinc-400">
            <span className="text-green-400">$</span>
            <span className="ml-2">
              build clean&nbsp;&nbsp;||&nbsp;&nbsp;deploy smart&nbsp;&nbsp;||&nbsp;&nbsp;scale fast
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero