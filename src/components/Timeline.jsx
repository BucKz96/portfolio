const timelineItems = [
  {
    period: '2026 — En cours',
    title: 'Développeur Full Stack',
    company: 'Cloud Campus',
    description:
      'Conception d’applications web full stack : API REST, modèles de données, conteneurisation Docker et workflows Git.',
    stack: ['React', 'Node.js', 'Laravel', 'MySQL', 'MongoDB', 'Docker'],
  },
  {
    period: '2022 — 2023',
    title: 'Data Analyst',
    company: 'DiamPark',
    description:
      'Analyse de données patients, création de visualisations d’indicateurs et contribution backend sur une application médicale de suivi de la maladie de Parkinson.',
    stack: ['Python', 'Flask', 'SQL', 'Plotly', 'Docker', 'GitHub Actions'],
  },
  {
    period: '2021 — 2022',
    title: 'Data & Intelligence Artificielle',
    company: '3WAcademy — Distanciel',
    description:
      'Formation orientée analyse de données, machine learning et visualisation avec Python, Pandas, NumPy, Scikit-learn et TensorFlow.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'DataViz'],
  },
  {
    period: '2018 — 2021',
    title: 'Freelance Web Scraping',
    company: 'AddSome',
    description:
      'Automatisation de pipelines de collecte, extraction et structuration de données web, avec maintenance des scripts selon l’évolution des sources.',
    stack: ['Python', 'Selenium', 'Regex', 'XPath', 'MongoDB', 'Pandas'],
  },
  {
    period: '2018',
    title: 'Développeur Python',
    company: 'Simplon.co',
    description:
      'Développement Python et modélisation de bases SQL/NoSQL, validés par les certifications RNCP RS3508 / RS3497.',
    stack: ['Python', 'SQL', 'MongoDB', 'Oracle', 'PostgreSQL', 'RNCP'],
  },
]

function Timeline() {
  return (
    <section id="timeline" data-reveal className="mx-auto max-w-7xl scroll-mt-[112px] px-6 pb-12">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <p className="mb-4 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
          Parcours
        </p>

        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Expériences & formation.
        </h2>

        <div className="relative mt-7 before:absolute before:bottom-6 before:left-1 before:top-[1.75rem] before:w-px before:bg-[rgb(var(--terminal-green-rgb)/0.30)] md:before:top-[1.95rem]">
          {timelineItems.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="relative grid gap-2 py-4 pl-7 md:grid-cols-[0.17fr_1fr] md:gap-6 md:py-5"
            >
              <span className="absolute left-1 top-[1.72rem] h-px w-5 bg-[rgb(var(--terminal-green-rgb)/0.30)] md:top-[1.92rem]" />
              <span className="absolute left-0 top-[1.45rem] h-2.5 w-2.5 rounded-full border border-[color:rgb(var(--terminal-green-rgb)/0.70)] bg-zinc-950 md:top-[1.65rem]" />

              <p className="pt-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[color:var(--terminal-green)] md:text-[11px]">
                {item.period}
              </p>

              <div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="font-display text-lg font-bold text-white md:text-xl">{item.title}</h3>
                  <p className="text-xs font-semibold text-zinc-400 sm:text-sm">@ {item.company}</p>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
