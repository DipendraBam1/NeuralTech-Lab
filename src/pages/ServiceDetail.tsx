import { Link, useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import PageDecorations from '@/components/ui/PageDecorations'
import { SERVICE_DETAILS, servicePath } from '@/data/serviceDetails'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICE_DETAILS.find((item) => item.slug === slug)

  if (!service) {
    return <Container className="py-32 text-center"><h1 className="text-3xl font-bold text-ink dark:text-dark-text">Service not found</h1><Link to="/services" className="mt-5 inline-block text-secondary">Browse all services →</Link></Container>
  }

  const related = SERVICE_DETAILS.filter((item) => item.slug !== service.slug).slice(0, 3)
  return <>
    <section className="relative isolate overflow-hidden bg-neutral/5 dark:bg-dark-bg pb-16">
      <PageDecorations glowPosition="left" />
      <Container className="relative z-10 pt-28 sm:pt-36">
        <Link to="/services" className="text-sm font-medium text-secondary hover:underline">← All services</Link>
        <header className="mt-8 max-w-3xl">
          <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">{service.category}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-dark-text sm:text-6xl">{service.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-neutral dark:text-dark-muted">{service.summary}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted dark:text-dark-muted">{service.description}</p>
          <Link to="/talk-to-team" className="mt-8 inline-flex rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white hover:brightness-110">Discuss your project →</Link>
        </header>
      </Container>
    </section>
    <section className="py-16 dark:bg-dark-bg sm:py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">What this helps you do</p>
        <h2 className="mt-2 text-3xl font-bold text-ink dark:text-dark-text">Practical outcomes for your team</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">{service.outcomes.map((outcome) => <li key={outcome} className="rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-5 text-sm leading-relaxed text-neutral dark:text-dark-muted"><span className="mb-3 block text-xl text-secondary" aria-hidden="true">✓</span>{outcome}</li>)}</ul>
      </Container>
    </section>
    <section className="bg-neutral/5 dark:bg-dark-bg py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-secondary">Explore more</p><h2 className="mt-2 text-2xl font-bold text-ink dark:text-dark-text">Related services</h2></div><Link to="/services" className="text-sm font-semibold text-secondary hover:underline">All services →</Link></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} to={servicePath(item.slug)} className="rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-5 hover:border-secondary/40"><h3 className="font-semibold text-ink dark:text-dark-text">{item.title}</h3><p className="mt-2 text-sm text-muted dark:text-dark-muted">{item.summary}</p></Link>)}</div>
      </Container>
    </section>
  </>
}
