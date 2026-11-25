import { Link } from 'react-router-dom'

export default function TechnologyCTA() {
  return (
    <section className="mx-auto mt-14 mb-16 rounded-[22px] border border-secondary/10 bg-gradient-to-br from-primary/10 via-background to-primary/20 px-6 py-10 text-center shadow-lg dark:border-dark-border dark:from-dark-bg-light dark:via-dark-bg dark:to-dark-nav-bg sm:mt-16 sm:px-10 sm:py-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-background/80 dark:bg-dark-bg-light/80 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Start collaboration
      </span>

      <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold leading-tight tracking-[-.04em] text-ink dark:text-dark-text sm:text-[28px]">
        Ready to architect high-performance<br className="hidden sm:block" /> software?
      </h2>
      <p className="mt-2 text-xs leading-5 text-neutral dark:text-dark-muted sm:text-sm">
        Direct engineering discovery, rapid architecture roadmap, and airtight execution.
      </p>

      <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
        <a
          href="/talk-to-team"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-secondary/90"
        >
          Discuss your project <span aria-hidden="true">↗</span>
        </a>
        <Link
          to="/#about"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/10 bg-background/90 dark:bg-dark-bg-light/90 px-5 py-2.5 text-[10px] font-semibold text-ink dark:text-dark-text transition hover:border-secondary/30 hover:text-secondary"
        >
          Have a Question <span aria-hidden="true">?</span>
        </Link>
      </div>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-wide text-neutral dark:text-dark-muted">
        {['Direct architect access', 'Strict mutual NDA', 'Rapid discovery sprint'].map((item) => (
          <li key={item} className="before:mr-1.5 before:text-secondary before:content-['•']">{item}</li>
        ))}
      </ul>
    </section>
  )
}
