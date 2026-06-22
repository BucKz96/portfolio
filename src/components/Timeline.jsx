const timelineItems = [
    {
      period: '2026 — En cours',
      title: 'Développeur Full Stack',
      company: 'Cloud Campus',
      description:
        'Formation full stack orientée développement web, API REST, bases de données, Docker, Git et méthodes agiles.',
      stack: ['React', 'Node.js', 'Laravel', 'MySQL', 'MongoDB', 'Docker'],
    },
    {
      period: '2022 — 2023',
      title: 'Data Analyst',
      company: 'DiamPark',
      description:
        'Analyse de données patients, visualisations d’indicateurs, participation au backend et au cycle de livraison d’une application médicale.',
      stack: ['Python', 'Flask', 'SQL', 'Plotly', 'Docker', 'GitHub Actions'],
    },
    {
      period: '2018 — 2021',
      title: 'Freelance Web Scraping',
      company: 'AddSome',
      description:
        'Développement de scripts Python pour l’extraction, la structuration et l’automatisation de flux de collecte de données e-commerce.',
      stack: ['Python', 'Selenium', 'Regex', 'XPath', 'MongoDB', 'Pandas'],
    },
    {
      period: '2018',
      title: 'Développeur Python',
      company: 'Simplon.co',
      description:
        'Formation développeur Python avec certifications RNCP, SQL, MongoDB, Oracle et PostgreSQL.',
      stack: ['Python', 'SQL', 'MongoDB', 'Oracle', 'PostgreSQL'],
    },
  ]
  
  function Timeline() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 border-l-2 border-green-400 pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Parcours
        </p>
  
        <h2 className="font-mono text-4xl font-bold text-white md:text-5xl">
          Expériences & formation.
        </h2>
  
        <div className="mt-12 space-y-6">
          {timelineItems.map((item) => (
            <article key={`${item.period}-${item.title}`} className="grid gap-6 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.35fr_1fr]">
              <p className="font-mono text-sm text-green-400">{item.period}</p>
  
              <div>
                <h3 className="font-mono text-2xl font-bold text-white">
                  {item.title}
                </h3>
  
                <p className="mt-1 font-mono text-sm text-zinc-500">
                  {item.company}
                </p>
  
                <p className="mt-4 font-mono text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-zinc-950/60 px-3 py-2 font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    )
  }
  
  export default Timeline