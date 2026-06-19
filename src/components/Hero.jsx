function Hero() {
    return (
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Développeur Full Stack
          </p>
  
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Je construis des applications web propres, utiles et maintenables.
          </h1>
  
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Portfolio de Maxime L., développeur orienté backend, APIs, intégration de données
            et interfaces modernes. Projet principal : SoundSpot, une application de découverte
            d’événements musicaux sur carte interactive.
          </p>
  
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Voir mes projets
            </a>
  
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero