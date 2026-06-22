import soundspotImage from '../assets/soundspot.png'

const projectHighlights = [
  ['01', 'Agrégation multi-sources'],
  ['02', 'Recherche d’événements'],
  ['03', 'Cartographie interactive'],
]

function FeaturedProject() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pb-12 font-mono">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="border-l-2 border-green-400 pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Projet phare
            </p>
            <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">SoundSpot</h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-zinc-400 md:justify-self-end md:text-base md:leading-7">
            Une application déployée qui agrège des événements musicaux et permet de les rechercher
            sur une carte interactive.
          </p>
        </div>

        <article className="mt-7 grid overflow-hidden border border-white/10 bg-white/[0.025] lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'PostgreSQL', 'Docker', 'OpenStreetMap', 'Leaflet'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-green-400/20 bg-green-400/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mt-5 text-xl font-bold leading-snug text-white md:text-2xl">
              De plusieurs sources à une recherche unifiée.
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              FastAPI orchestre l’agrégation et la normalisation des données avant leur stockage
              dans PostgreSQL. Docker assure un déploiement reproductible.
            </p>

            <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {projectHighlights.map(([number, title]) => (
                <div key={title} className="flex items-center gap-4 py-2.5">
                  <span className="text-[10px] text-green-400">{number}</span>
                  <p className="text-xs font-medium text-zinc-300 sm:text-sm">{title}</p>
                </div>
              ))}
            </div>

            <a
              href="https://soundspot.app"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-3 border border-green-400 bg-green-400/10 px-5 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-400 hover:text-zinc-950"
            >
              Voir le projet
              <span aria-hidden="true">↗</span>
            </a>
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
              className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.015] group-hover:opacity-95"
            />
          </a>
        </article>
      </div>
    </section>
  )
}

export default FeaturedProject
