function FeaturedProject() {
    return (
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projet phare
          </p>
  
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            SoundSpot
          </h2>
  
          <p className="mt-4 max-w-2xl text-zinc-400">
            Une application web de découverte d’événements musicaux via une carte interactive,
            connectée à plusieurs sources de données événementielles.
          </p>
        </div>
  
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {['React', 'FastAPI', 'PostgreSQL', 'API externes', 'Map'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
  
            <h3 className="text-2xl font-semibold text-white">
              Une carte pour trouver rapidement des événements autour de soi.
            </h3>
  
            <p className="mt-4 leading-7 text-zinc-400">
              SoundSpot centralise des événements issus de différentes plateformes, les normalise
              côté backend, puis les affiche sur une interface cartographique pensée pour être
              rapide, lisible et agréable à utiliser.
            </p>
          </div>
  
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
  
            <div className="mt-4 h-64 rounded-xl bg-zinc-800 p-4">
              <div className="mb-4 h-10 rounded-full bg-zinc-700" />
              <div className="grid h-44 grid-cols-3 gap-3">
                <div className="rounded-xl bg-zinc-700" />
                <div className="rounded-xl bg-zinc-700/70" />
                <div className="rounded-xl bg-zinc-700/40" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedProject