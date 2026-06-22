function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 border-l-2 border-green-400 pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            À propos
          </p>

          <h2 className="font-mono text-4xl font-bold text-white md:text-5xl">
            Du script à l’application.
          </h2>
        </div>

        <div className="space-y-6 font-mono text-base leading-8 text-zinc-400">
          <p>
            Après plusieurs années à développer des outils de collecte et de traitement de données en Python,
            j’ai choisi d’élargir mes compétences vers le développement backend moderne et les applications web.
          </p>

          <p>
            Aujourd’hui, je me spécialise dans la conception d’API, l’automatisation, les bases de données
            et le déploiement d’applications robustes.
          </p>

          <p>
            Mon objectif est de construire des outils utiles, maintenables et compréhensibles, avec une attention
            particulière portée à la qualité du code, à la documentation et à l’évolution des projets.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About