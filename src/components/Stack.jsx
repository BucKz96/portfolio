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
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-[112px] px-6 pb-16">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <p className="mb-4 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
          Stack
        </p>

        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Technologies principales.
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="group border border-[color:rgb(var(--terminal-green-rgb)/0.10)] bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgb(var(--terminal-green-rgb)/0.30)] hover:bg-[rgb(var(--terminal-green-rgb)/0.025)] hover:shadow-[0_0_24px_rgb(var(--terminal-green-rgb)/0.04)]"
            >
              <div className="relative flex items-center justify-center border-b border-[color:rgb(var(--terminal-green-rgb)/0.15)] pb-3">
                <span className="absolute left-0 h-1.5 w-1.5 rounded-full bg-[rgb(var(--terminal-green-rgb)/0.60)]" />
                <h3 className="font-mono text-base font-semibold text-white transition group-hover:text-[color:var(--terminal-green)]">
                  {group.title}
                </h3>
                <span className="absolute right-0 font-mono text-[10px] text-zinc-600">{group.index}</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`flex min-h-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 px-2 py-1 text-center font-mono text-[10px] leading-tight text-zinc-400 transition group-hover:border-[color:rgb(var(--terminal-green-rgb)/0.15)] group-hover:text-zinc-300 ${item === 'Responsive Design' ? 'col-span-2' : ''}`}
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
