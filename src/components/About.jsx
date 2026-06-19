function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            À propos
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Un profil orienté produit, backend et apprentissage rapide.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            Je suis développeur full stack en formation, avec une forte attirance pour le backend,
            les APIs, l’intégration de données et les applications web utiles.
          </p>

          <p>
            Mon projet principal, SoundSpot, m’a permis de travailler sur une vraie logique produit :
            récupération de données externes, normalisation, affichage cartographique, UX, déploiement
            et amélioration progressive de l’interface.
          </p>

          <p>
            Mon objectif est de construire des applications propres, compréhensibles et maintenables,
            tout en progressant sur des technologies modernes comme React, FastAPI, Docker et PostgreSQL.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About