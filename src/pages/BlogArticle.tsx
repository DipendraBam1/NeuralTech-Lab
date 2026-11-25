import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Footer2 from '@/components/layout/Footer2'
import PageDecorations from '@/components/ui/PageDecorations'
import { articleSlug, articles } from './Blog'

const articleSections = {
  Software: [
    ['AI-Powered Development', 'AI is helping developers work more efficiently while bringing intelligent automation and insights into business applications. By synthesizing telemetry and execution patterns at runtime, intelligent pipelines anticipate edge cases long before they impact client workflows.'],
    ['Built to Scale', 'Flexible architecture makes it easier for software to grow alongside changing business needs. Microservices coupled with unified edge deployment enable systems to scale smoothly without compounding operational debt.'],
    ['Connected Systems', 'Integrations bring business tools together, reduce repetitive work, and keep information consistent. Through resilient webhook topologies and typed schema synchronization, disparate data silos become real-time knowledge graphs.'],
    ['Security Meets Experience', 'Reliable software combines strong security with intuitive, user-friendly design. Zero-trust architecture and encrypted endpoints should remain frictionless while protecting sensitive information.'],
  ],
  'Data & Analytics': [
    ['Start With Reliable Data', 'Useful decisions depend on trustworthy inputs. Build clear validation, ownership, and quality checks into every stage of the data lifecycle.'],
    ['Make Signals Actionable', 'Well-designed analytics translate complex information into timely answers. Give teams context that helps them understand what changed and where to focus.'],
    ['Design for Continuous Insight', 'Streaming pipelines and thoughtful observability help organizations respond as conditions change, rather than relying on stale reports.'],
    ['Protect Data by Design', 'Strong access controls, transparent governance, and clear retention practices help teams use information responsibly.'],
  ],
  'AI & Automation': [
    ['Find the Right Workflow', 'Start with a repeatable process that creates friction. Clear inputs and measurable outcomes make a strong foundation for automation.'],
    ['Connect Tools and Context', 'Useful automation works across the systems people already rely on, carrying the right information between each step.'],
    ['Keep People in Control', 'Good AI systems make their actions understandable and give people a clear path to review, guide, or override important decisions.'],
    ['Measure and Improve', 'Track reliability, quality, and time saved after launch. Those signals guide safe improvements as the workflow evolves.'],
  ],
}

export default function BlogArticle() {
  const { slug = '' } = useParams()
  const article = articles.find((item) => articleSlug(item.title) === slug)
  const [copied, setCopied] = useState(false)
  const [listening, setListening] = useState(false)

  if (!article) {
    return (
      <div className="relative isolate overflow-hidden bg-neutral/5">
        <PageDecorations />
        <Container className="relative z-10 py-24 text-center">
        <h1 className="text-3xl font-bold text-ink">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-secondary">Back to all articles →</Link>
        </Container>
      </div>
    )
  }

  const articleTitle = article.title
  const articleDescription = article.description
  const sections = articleSections[article.category]
  const related = articles.filter((item) => item.title !== article.title).slice(0, 2)

  async function copyLink() {
    await navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  function toggleListening() {
    if (!('speechSynthesis' in window)) return
    if (listening) {
      window.speechSynthesis.cancel()
      setListening(false)
      return
    }
    const utterance = new SpeechSynthesisUtterance(`${articleTitle}. ${articleDescription}`)
    utterance.onend = () => setListening(false)
    window.speechSynthesis.speak(utterance)
    setListening(true)
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-neutral/5 pb-16">
        <PageDecorations />
        <Container className="relative z-10 pt-28 sm:pt-32">
          <header className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-wide">
              <span className="rounded-full bg-primary/15 px-3 py-1.5 text-secondary">{article.category}</span>
              <span className="rounded-full border border-neutral/10 bg-background px-3 py-1.5 text-muted">Vol. 01 / 2026</span>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.08] tracking-[-.045em] text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral sm:text-base">{article.description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-neutral/10 py-4">
              <div>
                <p className="text-sm font-semibold text-ink">Neural Tech Labs Team</p>
                <p className="mt-1 text-xs text-muted">Technology &amp; Architecture · 5 min read · Oct 2026</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button type="button" onClick={toggleListening} className="rounded-full border border-neutral/15 bg-background px-3 py-2 text-[11px] font-medium text-ink hover:border-secondary/30">
                  {listening ? 'Stop listening' : 'Listen to article'}
                </button>
                <button type="button" onClick={copyLink} className="rounded-full bg-primary/10 px-3 py-2 text-[11px] font-semibold text-secondary">
                  {copied ? 'Link copied' : 'Copy link'}
                </button>
              </div>
            </div>
          </header>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_230px] lg:gap-10">
            <article>
              <aside className="rounded-2xl border border-primary/20 bg-gradient-to-br from-background via-primary/5 to-primary/10 p-5 sm:p-7">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[.14em] text-secondary">Executive overview</p>
                <h2 className="mt-3 text-lg font-bold leading-snug text-ink">Technology is moving forward. Is your software ready?</h2>
                <p className="mt-2 text-xs leading-relaxed text-neutral">Businesses need more than off-the-shelf tools. Custom software creates solutions around the way teams work — helping them automate processes, connect systems, and prepare for growth.</p>
              </aside>

              <div className="mt-8 space-y-8">
                {sections.map(([title, description], index) => (
                  <section key={title} id={`section-${index + 1}`} className="scroll-mt-28">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-neutral/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-secondary">{index === 0 ? 'AI & automation' : index === 1 ? 'Scalable architecture' : index === 2 ? 'Integration' : 'Security'}</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs text-muted" aria-hidden="true">{index === 3 ? '♙' : '↗'}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-bold tracking-tight text-ink">{String(index + 1).padStart(2, '0')} — {title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral">{description}</p>
                  </section>
                ))}
              </div>
            </article>

            <aside className="rounded-xl border border-neutral/10 bg-background p-5 lg:sticky lg:top-28">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink">In this article</h2>
              <nav className="mt-4 space-y-3" aria-label="Article contents">
                {sections.map(([title], index) => (
                  <a key={title} href={`#section-${index + 1}`} className="flex gap-2 text-[11px] text-neutral transition-colors hover:text-secondary">
                    <span className="text-secondary">•</span>{title}
                  </a>
                ))}
              </nav>
              <div className="mt-5 border-t border-neutral/10 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted">Share this article</p>
                <button type="button" onClick={copyLink} className="mt-2 w-full rounded-lg border border-neutral/10 bg-neutral/5 px-3 py-2 text-left text-[10px] font-medium text-ink hover:border-secondary/30">
                  {copied ? 'Link copied ✓' : 'Copy link'}
                </button>
              </div>
            </aside>
          </div>

          <section className="mt-16 border-t border-neutral/10 pt-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[.15em] text-secondary">Continue exploring</p>
            <h2 className="mt-2 text-xl font-bold text-ink">More from Neural Tech Labs</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((item, index) => (
                <Link key={item.title} to={`/blog/${articleSlug(item.title)}`} className="flex items-center gap-4 rounded-xl border border-neutral/10 bg-background p-3 transition hover:shadow-md">
                  <span className="flex h-16 w-20 shrink-0 items-end gap-1 overflow-hidden rounded-lg bg-ink p-3">
                    {[25, 38, 18, 44].map((height, bar) => <i key={bar} className={`w-2 rounded-t ${bar === index + 2 ? 'bg-secondary' : 'bg-primary/70'}`} style={{ height }} />)}
                  </span>
                  <span><span className="block font-mono text-[10px] uppercase tracking-wide text-secondary">{item.category} · {item.minutes} min read</span><span className="mt-1 block text-xs font-semibold leading-snug text-ink">{item.title}</span><span className="mt-2 block text-[9px] font-medium text-neutral">Read article ↗</span></span>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </div>
      <Footer2 />
    </>
  )
}
