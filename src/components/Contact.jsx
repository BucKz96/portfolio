const contactLinks = [
  {
    label: 'GitHub',
    value: 'Voir le profil',
    mark: 'GH',
    href: 'https://github.com/',
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
    href: 'mailto:lefevre.maxime96@gmail.com',
    external: false,
  },
]

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 font-mono">
      <div className="border-t border-white/10 pt-10 md:pt-12">
        <p className="mb-4 border-l-2 border-green-400 pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Contact
        </p>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Discutons de votre projet.
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
            Disponible pour une alternance, un poste backend junior ou des projets freelance.
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
                className="group relative flex min-h-24 items-center gap-4 overflow-hidden border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-green-400/35 hover:shadow-[0_0_24px_rgba(74,222,128,0.04)]"
              >
                <span className="absolute inset-0 bg-green-400/[0.04] opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-4 top-0 z-10 h-px origin-left scale-x-0 bg-green-400/70 transition duration-300 group-hover:scale-x-100" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-green-400/25 text-xs font-semibold text-green-400 transition group-hover:border-green-400/50">
                  {link.mark}
                </span>
                <span className="relative z-10 min-w-0">
                  <span className="block text-sm font-semibold text-white transition group-hover:text-green-400">
                    {link.label}
                  </span>
                  <span className="mt-1 block truncate text-[11px] text-zinc-500">{link.value}</span>
                </span>
              </a>
            ) : (
              <div
                key={link.label}
                className="group relative flex min-h-24 items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-green-400/25 hover:bg-green-400/[0.025]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-green-400/25 text-xs font-semibold text-green-400">
                  {link.mark}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="mt-1 block select-all truncate text-[11px] text-zinc-400">{link.value}</span>
                </span>
                <a
                  href={link.href}
                  className="shrink-0 border-l border-white/10 pl-3 text-[10px] font-semibold uppercase tracking-wider text-green-400 transition hover:text-green-300"
                >
                  Écrire
                </a>
              </div>
            ),
          )}
        </div>

        <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span className="h-px flex-1 bg-white/10" />
          <span>Disponible pour échanger</span>
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
      </div>
    </section>
  )
}

export default Contact
