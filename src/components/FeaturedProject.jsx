import soundspotImage from '../assets/soundspot.png'
import soundspotLogo from '../assets/soundspot-logo.png'

const projectHighlights = [
  ['01', 'Agrégation multi-sources'],
  ['02', 'Recherche d’événements'],
  ['03', 'Cartographie interactive'],
]

function FeaturedProject() {
  return (
    <section id="projects" data-reveal className="mx-auto max-w-7xl scroll-mt-[112px] px-6 pb-12">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <div>
          <p className="border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
            Projet phare
          </p>

          <div className="mt-4 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="flex items-center justify-center">
              <h2 className="sr-only">SoundSpot</h2>
              <img
                src={soundspotLogo}
                alt=""
                aria-hidden="true"
                className="h-auto w-[180px] max-w-full object-contain sm:w-[220px] md:w-[240px]"
              />
            </div>

            <p className="max-w-2xl text-sm leading-6 text-zinc-400 md:justify-self-end md:text-base md:leading-7">
              Une application déployée qui agrège des événements musicaux et permet de les rechercher
              sur une carte interactive.
            </p>
          </div>
        </div>

        <article className="mt-7 grid overflow-hidden border border-white/10 bg-white/[0.025] lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'PostgreSQL', 'Docker', 'OpenStreetMap', 'Leaflet'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:rgb(var(--terminal-green-rgb)/0.20)] bg-[rgb(var(--terminal-green-rgb)/0.04)] px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white md:text-2xl">
              De plusieurs sources à une recherche unifiée.
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              FastAPI orchestre l’agrégation et la normalisation des données avant leur stockage
              dans PostgreSQL. Docker assure un déploiement reproductible.
            </p>

            <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {projectHighlights.map(([number, title]) => (
                <div key={title} className="flex items-center gap-4 py-2.5">
                  <span className="font-mono text-[10px] text-[color:var(--terminal-green)]">{number}</span>
                  <p className="text-xs font-medium text-zinc-300 sm:text-sm">{title}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-8 pt-5">
              <a
                href="https://soundspot.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 border border-[color:var(--terminal-green)] bg-[rgb(var(--terminal-green-rgb)/0.10)] px-5 py-3 font-mono text-sm font-semibold text-[color:var(--terminal-green)] transition hover:bg-[color:var(--terminal-green)] hover:text-zinc-950"
              >
                Voir le projet
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/BucKz96/SoundSpot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center border border-white/15 px-5 py-3 font-mono text-sm font-semibold text-zinc-300 transition hover:border-[color:rgb(var(--terminal-green-rgb)/0.40)] hover:text-[color:var(--terminal-green)]"
              >
                Voir le code
              </a>
            </div>
          </div>

          <a
            href="https://soundspot.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Ouvrir l’application SoundSpot"
            className="group flex h-80 items-center justify-center overflow-hidden border-t border-white/10 bg-zinc-900/60 p-3 sm:h-96 lg:h-[460px] lg:border-l lg:border-t-0"
          >
            <img
              src={soundspotImage}
              alt="Interface de SoundSpot avec recherche d’événements et carte interactive"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.015] group-hover:opacity-95"
            />
          </a>
        </article>
      </div>
    </section>
  )
}

export default FeaturedProject
