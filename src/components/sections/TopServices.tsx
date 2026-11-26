import Container from '@/components/ui/Container'
import { Link } from 'react-router-dom'
import { TOP_SERVICES } from '@/data/topservices'
 
const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function TopServices() {
  return (
    <section className="bg-white dark:bg-dark-bg py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted dark:text-dark-muted">
            Technology that moves your business forward
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink dark:text-dark-text sm:text-4xl">
            Top services of <span className="text-secondary">Ntechlabs</span>
          </h2>
        </div>

        <ul className="mt-10 flex flex-col gap-3">
          {TOP_SERVICES.map((item, i) => (
            <li key={i}>
              <Link
                to={item.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg-light px-4 py-3.5 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40 dark:hover:bg-secondary/10"
              >
                <span className="rounded bg-slate-100 dark:bg-dark-bg-light px-1.5 py-0.5 font-mono text-[9px] text-neutral dark:text-dark-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-[13px] font-semibold text-ink dark:text-dark-text">{item.title}</span>
                <span className="text-slate-400 dark:text-dark-muted transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-600">
                  <Chevron />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
