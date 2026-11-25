import Container from '@/components/ui/Container'
import { SERVICES } from '@/data/services'
import polygonDecoration from '@/assets/images/Polygon 1.svg'
import dottedDecoration from '@/assets/images/dotted.svg'
 
const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconBox = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-secondary">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="3" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  </span>
)

export default function Services() {
  return (
    <section id="service" className="relative isolate overflow-hidden bg-neutral/4 py-20">
      <img
        aria-hidden="true"
        src={dottedDecoration}
        alt=""
        className="pointer-events-none absolute -left-12 top-[16%] h-24 w-24 opacity-90"
      />
      <img
        aria-hidden="true"
        src={polygonDecoration}
        alt=""
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[170px] opacity-70"
      />
      <img
        aria-hidden="true"
        src={dottedDecoration}
        alt=""
        className="pointer-events-none absolute -right-10 bottom-[12%] h-24 w-24 rotate-180 opacity-90"
      />
      <Container className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink">
              Technology solutions built around <span className="text-primary">your business.</span>
            </h2>
            <p className="mt-3 text-sm text-muted">
              We design, build and manage intelligent digital solutions that help organizations innovate, scale and stay
              ahead in a constantly evolving world.
            </p>
          </div>
          <a href="/services" className="text-sm font-medium text-secondary hover:underline">
            View All Services →
          </a>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <li key={i}>
              <a
                href="#service"
                className="group block h-full rounded-xl border border-neutral/30 bg-white p-5 transition hover:shadow-md hover:shadow-primary/30"
              >
                <div className="flex items-start justify-between">
                  <IconBox />
                  <span className="text-[12px] text-muted">#{i + 1}</span>
                </div>
                <h3 className="mt-3 font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-neutral/70 pt-3 text-[11px] text-neutral">
                  {service.tag}
                  <span className="text-secondary transition-transform group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
