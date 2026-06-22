const stackGroups = [
  {
    title: 'Backend',
    index: '01',
    items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express', 'API REST'],
  },
  {
    title: 'Data',
    index: '02',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Pandas', 'NumPy'],
  },
  {
    title: 'DevOps',
    index: '03',
    items: ['Docker', 'Linux', 'Git', 'GitHub Actions', 'Jenkins', 'Bash'],
  },
  {
    title: 'Frontend',
    index: '04',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
  },
]

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 pb-16 font-mono">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <p className="mb-4 border-l-2 border-green-400 pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Stack
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Technologies principales.
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="group border border-green-400/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-green-400/30 hover:bg-green-400/[0.025] hover:shadow-[0_0_24px_rgba(74,222,128,0.04)]"
            >
              <div className="relative flex items-center justify-center border-b border-green-400/15 pb-3">
                <span className="absolute left-0 h-1.5 w-1.5 rounded-full bg-green-400/60" />
                <h3 className="text-base font-semibold text-white transition group-hover:text-green-400">
                  {group.title}
                </h3>
                <span className="absolute right-0 text-[10px] text-zinc-600">{group.index}</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`flex min-h-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 px-2 py-1 text-center text-[10px] leading-tight text-zinc-400 transition group-hover:border-green-400/15 group-hover:text-zinc-300 ${item === 'Responsive Design' ? 'col-span-2' : ''}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
