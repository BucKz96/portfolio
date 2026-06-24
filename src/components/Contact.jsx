const contactLinks = [
  {
    label: 'GitHub',
    value: 'Voir le profil',
    mark: 'GH',
    href: 'https://github.com/BucKz96',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '/in/mlefevre96',
    mark: 'IN',
    href: 'https://linkedin.com/in/mlefevre96',
    external: true,
  },
  {
    label: 'Email',
    value: 'lefevre.maxime96@gmail.com',
    mark: '@',
    external: false,
  },
]

function Contact() {
  return (
    <section id="contact" data-reveal className="mx-auto max-w-7xl scroll-mt-[112px] px-6 pb-10 md:pb-28">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <p className="mb-4 border-l-2 border-[color:var(--terminal-green)] pl-4 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--terminal-green)]">
          Contact
        </p>

        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Discutons de votre projet.
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
            Disponible pour une alternance développeur backend / full stack, rythme 3 semaines
            entreprise / 1 semaine formation, ainsi que pour des projets freelance ciblés.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-24 items-center gap-4 overflow-hidden border border-white/10 bg-white/[0.025] p-4 transition-all duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transition-none hover:border-[color:rgb(var(--terminal-green-rgb)/0.35)] hover:shadow-[0_0_24px_rgb(var(--terminal-green-rgb)/0.04)]"
              >
                <span className="absolute inset-0 bg-[rgb(var(--terminal-green-rgb)/0.04)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[color:rgb(var(--terminal-green-rgb)/0.25)] font-mono text-xs font-semibold text-[color:var(--terminal-green)] transition group-hover:border-[color:rgb(var(--terminal-green-rgb)/0.50)]">
                  {link.mark}
                </span>
                <span className="relative z-10 min-w-0">
                  <span className="block text-sm font-semibold text-white transition group-hover:text-[color:var(--terminal-green)]">
                    {link.label}
                  </span>
                  <span className="mt-1 block truncate text-[11px] text-zinc-500">{link.value}</span>
                </span>
              </a>
            ) : (
              <div
                key={link.label}
                className="group relative flex min-h-24 items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transition-none hover:border-[color:rgb(var(--terminal-green-rgb)/0.35)] hover:bg-[rgb(var(--terminal-green-rgb)/0.025)] hover:shadow-[0_0_24px_rgb(var(--terminal-green-rgb)/0.04)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[color:rgb(var(--terminal-green-rgb)/0.25)] font-mono text-xs font-semibold text-[color:var(--terminal-green)]">
                  {link.mark}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="mt-1 block select-all truncate text-[11px] text-zinc-400">{link.value}</span>
                </span>
              </div>
            ),
          )}
        </div>

        <div className="relative mt-12 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span className="absolute inset-x-0 h-px bg-white/10" />
          <span className="relative flex items-center gap-3 bg-zinc-950 px-3">
            <span>Disponible pour échanger</span>
            <span className="h-2 w-2 rounded-full bg-[color:var(--terminal-green)]" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
