import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import PageDecorations from '@/components/ui/PageDecorations'

type Category = 'All Articles' | 'AI & Automation' | 'Software' | 'Data & Analytics'
type VisualKind = 'code' | 'analytics' | 'network' | 'system'

export type Article = {
  category: Exclude<Category, 'All Articles'>
  title: string
  description: string
  minutes: number
  topic: string
  visual: VisualKind
}

const categories: Category[] = ['All Articles', 'AI & Automation', 'Software', 'Data & Analytics']

export const articles: Article[] = [
  {
    category: 'Software',
    title: 'The Future of Custom Software Development',
    description: 'Why tailored digital solutions matter for businesses looking to scale, preserve technical sovereignty, and achieve faster than off-the-shelf.',
    minutes: 5,
    topic: 'Enterprise Core',
    visual: 'code',
  },
  {
    category: 'Data & Analytics',
    title: 'Turning Business Data Into Better Decisions',
    description: 'How meaningful insights, autonomous anomaly detection, and predictive modeling can help enterprises make smarter strategic measures in volatile markets.',
    minutes: 5,
    topic: 'Predictive Modeling',
    visual: 'analytics',
  },
  {
    category: 'AI & Automation',
    title: 'One Connected System. Better Business Operations.',
    description: 'Explore how integrated cloud infrastructure and resilient event streams connect cross-functional teams, operational information, and daily workflows.',
    minutes: 4,
    topic: 'Cloud Orchestration',
    visual: 'network',
  },
  {
    category: 'Software',
    title: 'Building Technology That Grows With You',
    description: 'What enterprise leadership should consider when architecting modular software stacks capable of expanding alongside operational user needs.',
    minutes: 5,
    topic: 'Scalability Systems',
    visual: 'system',
  },
  {
    category: 'AI & Automation',
    title: 'Practical AI Automation for Everyday Work',
    description: 'Find the repeatable processes where intelligent automation can save time, reduce errors, and help people focus on higher-value work.',
    minutes: 6,
    topic: 'Workflow Design',
    visual: 'network',
  },
  {
    category: 'Data & Analytics',
    title: 'Designing a Data Pipeline You Can Trust',
    description: 'A closer look at reliable ingestion, validation, and observability practices for teams building data products at scale.',
    minutes: 7,
    topic: 'Data Engineering',
    visual: 'analytics',
  },
  {
    category: 'Software',
    title: 'Choosing the Right Architecture for Your Product',
    description: 'Compare common architecture patterns and learn how to match technical choices to real product requirements.',
    minutes: 8,
    topic: 'Architecture',
    visual: 'system',
  },
  {
    category: 'AI & Automation',
    title: 'From Prototype to Production AI',
    description: 'Move beyond the demo with a practical approach to evaluation, deployment, monitoring, and continuous improvement.',
    minutes: 6,
    topic: 'Applied Intelligence',
    visual: 'code',
  },
]

export function articleSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const standards = [
  ['CADENCE', 'Published Quarterly', 'Peer-reviewed enterprise insights'],
  ['RESEARCH SCOPE', 'Applied Intelligence', 'From foundation models to runtime'],
  ['AUTHORSHIP', 'Practitioner Authored', 'Written by architects & engineers'],
  ['DISTRIBUTION', 'Open Access', 'Free for builders and leaders'],
]

function ArticleVisual({ kind }: { kind: VisualKind }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-lg border border-neutral/10 dark:border-dark-border bg-ink p-3 text-[8px] text-muted dark:text-dark-muted sm:h-44">
      <div className="flex items-center justify-between">
        <span className="rounded bg-white/10 px-2 py-1 font-mono uppercase tracking-wide text-white/80">
          {kind === 'code' ? 'Software Development' : kind === 'analytics' ? 'Data & Analytics' : kind === 'network' ? 'Business Technology' : 'Engineering'}
        </span>
        <span className="h-2 w-2 rounded-full bg-primary" />
      </div>

      {kind === 'code' && (
        <div className="mt-3 rounded border border-white/10 bg-black/30 p-3 font-mono">
          <div className="mb-2 flex justify-between text-[7px]"><span>core/runtime.ts</span><span>UTF-8 // 320bps</span></div>
          <p><span className="text-muted dark:text-dark-muted">01</span> <span className="text-primary">async function</span> deploy() =&gt; <span className="text-amber-300">module</span>();</p>
          <p><span className="text-muted dark:text-dark-muted">02</span> <span className="text-primary">let</span> telemetry = Telemetry.stream();</p>
          <p><span className="text-muted dark:text-dark-muted">03</span> telemetry.emit(cluster_metrics);</p>
          <p className="mt-3 text-primary">COMPILE SUCCESS (128ms)</p>
        </div>
      )}

      {kind === 'analytics' && (
        <div className="relative mt-3 h-24 rounded border border-white/10 bg-black/30 p-3">
          <span className="font-mono text-[7px] uppercase tracking-wide">Anomaly detection</span>
          <span className="absolute right-3 top-3 rounded-full border border-primary/30 px-2 py-1 font-mono text-[7px] text-primary">+28.4% accuracy</span>
          <svg viewBox="0 0 360 70" className="absolute inset-x-3 bottom-2 h-14 w-[calc(100%-24px)]" fill="none" aria-hidden="true">
            <path d="M4 57C45 55 56 51 82 49s46-12 65-13 35-4 53-10 32-6 53-11 40-5 59-9" stroke="#00DE99" strokeWidth="2" />
            <path d="M4 65h352" stroke="#334155" />
          </svg>
        </div>
      )}

      {kind === 'network' && (
        <div className="mt-3 flex h-24 items-center justify-center rounded border border-white/10 bg-black/30">
          <svg viewBox="0 0 240 90" className="h-20 w-4/5" fill="none" aria-hidden="true">
            <path d="m32 58 42-28 42 32 44-25 46-22m-132 15 44 32 44-25 46 3" stroke="#059669" strokeDasharray="4 4" />
            <path d="m74 30 42 32m42-25 46-22m-88 47 46-25 46 3" stroke="#00DE99" strokeOpacity=".45" />
            {[['32','58'],['74','30'],['116','62'],['160','37'],['206','15'],['206','40']].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#00DE99" />)}
          </svg>
        </div>
      )}

      {kind === 'system' && (
        <div className="mt-3 rounded border border-white/10 bg-black/30 p-3 font-mono">
          <div className="flex justify-between text-primary"><span>CLUSTER HEALTH: OPTIMAL</span><span>LATENCY 4.2MS</span></div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center uppercase">
            {['Auth', 'Pipeline', 'Storage'].map((label) => <span key={label} className="rounded border border-white/20 px-2 py-2 text-[7px] text-white/70">{label}</span>)}
          </div>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-primary/60" />
        </div>
      )}
    </div>
  )
}

export default function Blog() {
  const [category, setCategory] = useState<Category>('All Articles')
  const [showAll, setShowAll] = useState(false)

  const filteredArticles = useMemo(
    () => category === 'All Articles' ? articles : articles.filter((article) => article.category === category),
    [category],
  )
  const visibleArticles = showAll ? filteredArticles : filteredArticles.slice(0, 4)

  return (
    <>
      <div className="relative isolate overflow-hidden bg-neutral/5 dark:bg-dark-bg pb-12 sm:pb-16">
        <PageDecorations />
        <Container className="relative z-10 pt-28 sm:pt-32">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold leading-[.98] tracking-[-.05em] text-ink dark:text-dark-text sm:text-5xl">
              Technology,<br /><span className="text-primary underline decoration-2 underline-offset-4">thoughtfully<br className="sm:hidden" /> explored.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-neutral dark:text-dark-muted sm:text-base sm:leading-7">
              Essays, architectural breakdowns, and field perspectives examining enterprise software, autonomous intelligence, and the enduring engineering principles that anchor modern computing.
            </p>
          </header>

          <section aria-label="Editorial standards" className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {standards.map(([label, title, description], index) => (
              <article key={label} className="rounded-xl border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light transition hover:shadow-md shadow-primary/30 p-5 sm:p-6">
                <div className="flex items-center justify-between font-mono text-xs tracking-wide text-muted dark:text-dark-muted">
                  <span>{label}</span><span className="rounded bg-primary/10 p-2 font-semibold text-secondary">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="mt-3 text-sm font-semibold text-ink dark:text-dark-text">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-neutral dark:text-dark-muted">{description}</p>
              </article>
            ))}
          </section>

          <section id="articles" className="mt-20 scroll-mt-24 sm:mt-24">
            <div className="flex flex-col gap-5 border-b border-neutral/10 dark:border-dark-border pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[.16em] text-muted dark:text-dark-muted">From our thinking</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink dark:text-dark-text">Latest thinking.</h2>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => { setCategory(item); setShowAll(false) }}
                    aria-pressed={category === item}
                    className={`rounded-full px-3 py-1.5 text-xs transition-colors ${category === item ? 'bg-ink text-white dark:bg-primary dark:text-ink' : 'text-neutral dark:text-dark-muted hover:bg-background dark:hover:bg-dark-bg-light hover:text-ink dark:hover:text-dark-text'}`}
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {visibleArticles.map((article) => (
                <article key={article.title} className="flex flex-col rounded-xl border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light p-4 shadow-sm transition hover:shadow-lg sm:p-5">
                  <ArticleVisual kind={article.visual} />
                  <h3 className="mt-4 text-base font-bold tracking-tight text-ink dark:text-dark-text">{article.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral dark:text-dark-muted">{article.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-neutral/10 dark:border-dark-border pt-4 text-[10px] text-neutral dark:text-dark-muted">
                    <span>◷ &nbsp;{article.minutes} min read&nbsp; · &nbsp;{article.topic}</span>
                    <Link to={`/blog/${articleSlug(article.title)}`} className="font-semibold text-[11px] text-ink dark:text-dark-text hover:text-secondary">Read Article ↗</Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length > 4 && (
              <div className="mt-6 text-center">
                <button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex items-center gap-2 rounded-full border border-neutral/20 dark:border-dark-border bg-background dark:bg-dark-bg-light px-5 py-2 text-[10px] font-medium text-ink dark:text-dark-text transition hover:border-secondary/40 hover:text-secondary">
                  {showAll ? 'Show Fewer Articles' : 'Load More Articles'}
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={showAll ? 'm4 10 4-4 4 4' : 'm4 6 4 4 4-4'} />
                  </svg>
                </button>
              </div>
            )}
          </section>

          <section className="mt-16 flex flex-col gap-8 rounded-3xl border border-neutral/10 dark:border-dark-border bg-gradient-to-br from-background via-neutral/5 to-primary/10 px-6 py-8 shadow-sm dark:from-dark-bg-light dark:via-dark-bg dark:to-dark-nav-bg sm:mt-20 sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-neutral/15 dark:border-dark-border bg-background/80 dark:bg-dark-bg-light/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.14em] text-neutral dark:text-dark-muted">
                Engagement framework
              </span>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-.04em] text-ink dark:text-dark-text sm:text-4xl">
                Let’s build something better together.
              </h2>
              <p className="mt-3 text-sm text-neutral dark:text-dark-muted">
                Have a project in mind? Let’s find the right technology for your business.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light px-3.5 py-2 text-[11px] text-neutral dark:text-dark-muted">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-secondary" fill="currentColor" aria-hidden="true"><path d="M8 1.2 13.5 3v4.1c0 3.5-2.4 6.2-5.5 7.7-3.1-1.5-5.5-4.2-5.5-7.7V3L8 1.2Zm0 3.1L5 9h2l-.4 2.8L11 6.5H8.8L9.5 4.3 8 4.3Z" /></svg>
                  Mutual NDA Guarantee
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light px-3.5 py-2 text-[11px] text-neutral dark:text-dark-muted">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="8" cy="8" r="6" /><path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  24h Response SLA
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
              <Link to="/talk-to-team" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-ink/90 dark:bg-dark-nav-bg dark:hover:bg-dark-bg-light">
                Talk to Our Team <span className="text-primary">↗</span>
              </Link>
              <p className="font-mono text-[9px] uppercase tracking-[.15em] text-muted dark:text-dark-muted">Average response time: &lt; 2 hours</p>
            </div>
          </section>
        </Container>
      </div>
    </>
  )
}
