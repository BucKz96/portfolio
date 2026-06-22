const stackGroups = [
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'API REST'],
  },
  {
    title: 'Données',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Pandas'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Linux', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
]

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 border-l-2 border-green-400 pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
        Stack
      </p>

      <h2 className="font-mono text-4xl font-bold text-white md:text-5xl">
        Technologies principales.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <div key={group.title} className="border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-mono text-lg font-semibold text-white">
              {group.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-zinc-950/60 px-3 py-2 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack