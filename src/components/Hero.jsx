import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 md:grid-cols-2">
      <div className="relative z-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
          Backend Developer
        </p>

        <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
          Maxime L.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          Je conçois des APIs robustes, des interfaces modernes et des applications web
          pensées pour être utiles, maintenables et évolutives.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-300">
          {['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Linux'].map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300"
          >
            Voir mes projets
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-400"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative h-[560px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
        <img
          src={heroImage}
          alt="Portrait noir et blanc de Maxime"
          className="h-full w-full object-cover object-[center_28%] grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-950/20 to-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
      </div>
    </section>
  )
}

export default Hero