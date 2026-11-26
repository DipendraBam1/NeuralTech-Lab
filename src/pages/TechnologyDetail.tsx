import { Link, useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import PageDecorations from '@/components/ui/PageDecorations'
import { TECHNOLOGY_DETAILS, technologyPath } from '@/data/technologyDetails'

export default function TechnologyDetail() {
  const { slug } = useParams()
  const technology = TECHNOLOGY_DETAILS.find((item) => item.slug === slug)

  if (!technology) return <Container className="py-32 text-center"><h1 className="text-3xl font-bold text-ink dark:text-dark-text">Technology area not found</h1><Link to="/technology" className="mt-5 inline-block text-secondary">Back to technology overview →</Link></Container>

  const related = TECHNOLOGY_DETAILS.filter((item) => item.slug !== technology.slug).slice(0, 3)
  return <>
    <section className="relative isolate overflow-hidden bg-neutral/5 dark:bg-dark-bg pb-16">
      <PageDecorations glowPosition="left" />
      <Container className="relative z-10 pt-28 sm:pt-36">
        <Link to="/technology" className="text-sm font-medium text-secondary hover:underline">← Technology overview</Link>
        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-secondary">{technology.index} · {technology.label}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-dark-text sm:text-6xl">{technology.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-neutral dark:text-dark-muted">{technology.summary}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted dark:text-dark-muted">{technology.description}</p>
        </header>
      </Container>
    </section>
    <section className="py-16 dark:bg-dark-bg sm:py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Technology choices</p>
        <h2 className="mt-2 text-3xl font-bold text-ink dark:text-dark-text">Tools we work with</h2>
        <div className="mt-6 flex flex-wrap gap-2">{technology.tags.map((tag) => <span key={tag} className="rounded-lg border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light px-3 py-2 font-mono text-sm text-neutral dark:text-dark-muted">{tag}</span>)}</div>
        <h2 className="mt-12 text-2xl font-bold text-ink dark:text-dark-text">How we approach it</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">{technology.principles.map((principle) => <li key={principle} className="rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-5 text-sm leading-relaxed text-neutral dark:text-dark-muted"><span className="mb-3 block text-xl text-secondary" aria-hidden="true">✓</span>{principle}</li>)}</ul>
      </Container>
    </section>
    <section className="bg-neutral/5 dark:bg-dark-bg py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-secondary">Explore more</p><h2 className="mt-2 text-2xl font-bold text-ink dark:text-dark-text">Other technology areas</h2></div><Link to="/technology" className="text-sm font-semibold text-secondary hover:underline">Technology overview →</Link></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} to={technologyPath(item.slug)} className="rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-5 hover:border-secondary/40"><p className="font-mono text-[10px] text-secondary">{item.index}</p><h3 className="mt-2 font-semibold text-ink dark:text-dark-text">{item.title}</h3><p className="mt-2 text-sm text-muted dark:text-dark-muted">{item.summary}</p></Link>)}</div>
      </Container>
    </section>
  </>
}
