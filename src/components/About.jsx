function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-[112px] px-6 pb-12 pt-14">
      <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div>
          <p className="mb-4 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
            À propos
          </p>

          <h2 className="max-w-md font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Du script à l’application.
          </h2>
        </div>

        <div className="space-y-3 text-sm leading-6 text-zinc-400 md:text-base md:leading-7">
          <p>
            Je transforme des flux de données en services backend fiables : collecte, normalisation,
            stockage et exposition par API.
          </p>

          <p>
            Je privilégie la qualité du code, la maintenabilité et des architectures simples,
            adaptées au besoin réel.
          </p>

          <p>
            Mon objectif : livrer des outils utiles, robustes et faciles à faire évoluer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
