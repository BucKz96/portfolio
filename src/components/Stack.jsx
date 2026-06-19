const technologies = [
    'Python',
    'FastAPI',
    'React',
    'Tailwind CSS',
    'PostgreSQL',
    'Docker',
    'Git',
    'Vercel',
    'Render',
    'APIs REST',
  ]
  
  function Stack() {
    return (
      <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Stack
        </p>
  
        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Les technologies que j’utilise.
        </h2>
  
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm font-medium text-zinc-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Stack