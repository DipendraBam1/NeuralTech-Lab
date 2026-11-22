import Container from '@/components/ui/Container'
import { TOP_SERVICES } from '@/data/topservices'
 
const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function TopServices() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            Technology that moves your business forward
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Top services of <span className="text-secondary">Ntechlabs</span>
          </h2>
        </div>

        <ul className="mt-10 flex flex-col gap-3">
          {TOP_SERVICES.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
              >
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] text-neutral">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-[13px] font-semibold text-ink">{item.title}</span>
                <span className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-600">
                  <Chevron />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}