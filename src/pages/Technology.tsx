import technologyCard from '@/assets/images/technology-card.svg'
import technologyGraph from '@/assets/images/technology-graph.svg'
import TechnologyCTA from '@/components/sections/TechnologyCTA'
import Container from '@/components/ui/Container'
import PageDecorations from '@/components/ui/PageDecorations'
import { Link } from 'react-router-dom'
import { technologyPath } from '@/data/technologyDetails'

const stacks = [
  {
    slug: 'frontend', index: '01 / FRONTEND', title: 'High-Throughput Clients', label: 'INTERACTIVE UI',
    tags: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'WASM'],
    foot: '100 Lighthouse', metric: '<20ms INP Target',
  },
  {
    slug: 'ai-agents', index: '04 / COGNITIVE', title: 'Autonomous Agent Mesh', label: 'REASONING',
    tags: ['PyTorch', 'LangGraph', 'Gradient Vector', 'Claude & GPT-4o', 'vLLM Inference'],
    foot: 'Real-Time Semantic Loop', metric: '<60s First Token',
  },
  {
    slug: 'runtime', index: '02 / RUNTIME', title: 'Event Streams & Microservices', label: 'DISTRIBUTED',
    tags: ['Bun / Node', 'FastAPI', 'Laravel 11', 'gRPC', 'OpenAPI v3'],
    foot: 'Async Non-blocking', metric: 'Zero Thread Contention',
  },
  {
    slug: 'data-platform', index: '03 / DATA & MEMORY', title: 'Persistent & Vector Fabric', label: 'STATE FABRIC',
    tags: ['pgvector', 'MySQL 8.0', 'Redis Cluster', 'Kubernetes', 'AWS/GCP'],
    foot: 'Active / Active Multi-Region', metric: 'RPO 0 / RTO < 30s',
  },
]

const standards = [
  { icon: '⌘', index: '01 / SECURITY', title: 'Hardware & Cryptographic Isolation', detail: 'AES-256 E2E  ·  HMAC / Scrypt', result: 'End-to-End Encryption' },
  { icon: '↗', index: '02 / SCALE', title: 'Predictable Multi-Tenant Headroom', detail: '100K+ RPS  ·  <200ms Autoscaling', result: 'Stateless Edge Pods' },
  { icon: '◎', index: '03 / FEDERATION', title: 'Universal Ingestion & RPC Sync', detail: 'GraphQL / gRPC / Webhook  ·  Strict Idempotency', result: 'Zero Drift' },
]

function Eyebrow({ children }: { children: string }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-secondary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{children}</span>
}

export default function Technology() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-neutral/5 dark:bg-dark-bg">
      <PageDecorations glowPosition="left" />
      <Container className="relative z-10 pt-28 lg:pt-32">
        <section className="grid items-center gap-12 pb-16 lg:grid-cols-[1.25fr_.75fr] lg:gap-20 lg:pb-20">
          <div>
            <Eyebrow>System Core // V4.0 Pro</Eyebrow>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-.045em] text-ink dark:text-dark-text sm:text-5xl lg:text-[64px]">
              The Technology<br />Behind <span className="text-secondary underline decoration-2 underline-offset-4">Better<br className="hidden sm:block" /> Solutions</span><span className='text-4xl'>.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-neutral dark:text-dark-muted">Deterministic systems, low-latency neural pipelines, and scalable sovereign architectures.</p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <a href="#production-stack" className="rounded-full bg-secondary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-secondary/90">Explore stack <span aria-hidden="true">›</span></a>
              {['<1.8ms RT', '99.99% SLA', 'SOC2 TYPE II'].map((item) => <span key={item} className="rounded-full border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light px-3 py-1.5 font-mono text-[10px] text-neutral dark:text-dark-muted"><span className="mr-1 text-secondary">●</span>{item}</span>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[400px] rounded-2xl border border-secondary/10 bg-background dark:bg-dark-bg-light p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-secondary"><span className="rounded border border-secondary/20 px-2 py-1">Core engine // live</span><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />Synapse: 99.8%</span></div>
            <img src={technologyCard} alt="Neural technology architecture diagram" className="mx-auto h-36 w-full object-contain" />
            <div className="rounded-xl border border-neutral/10 dark:border-dark-border bg-neutral/5 dark:bg-dark-bg p-4">
              <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-neutral dark:text-dark-muted"><span>Neural flow</span><span className="font-semibold text-secondary">1,842 ops/s</span></div>
              <img src={technologyGraph} alt="Live neural flow performance graph" className="mt-1 h-8 w-full object-contain" />
              <div className="flex justify-between font-mono text-[8px] uppercase text-muted dark:text-dark-muted"><span>Cluster alpha</span><span className="text-secondary">Stable</span></div>
            </div>
          </div>
        </section>

        <section id="production-stack" className="scroll-mt-24">
          <Eyebrow>Architecture</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-ink dark:text-dark-text">Production Stack</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral dark:text-dark-muted">Battle-tested runtime environments engineered for speed, low memory overhead, and deterministic scaling.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {stacks.map((stack) => <Link to={technologyPath(stack.slug)} key={stack.index} className="group flex min-h-[180px] flex-col rounded-2xl border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary">
              <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] font-semibold tracking-wider text-secondary">{stack.index}</span><span className="rounded border border-secondary/20 bg-primary/10 px-2 py-1 font-mono text-[9px] uppercase text-secondary">{stack.label}</span></div>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-ink dark:text-dark-text">{stack.title}</h3>
              <span className="mt-2 text-xs font-semibold text-secondary group-hover:underline">Explore technology →</span>
              <div className="mt-3 flex flex-wrap gap-1.5">{stack.tags.map((tag) => <span key={tag} className="rounded bg-neutral/5 dark:bg-dark-bg px-2 py-1 font-mono text-[10px] text-neutral dark:text-dark-muted">{tag}</span>)}</div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-neutral/10 dark:border-dark-border pt-3 mt-4 font-mono text-[9px]"><span className="text-secondary">● {stack.foot}</span><span className="text-muted dark:text-dark-muted">{stack.metric}</span></div>
            </Link>)}
          </div>
        </section>

        <section className="mt-16 lg:mt-20">
          <Eyebrow>Principles</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-ink dark:text-dark-text">Core Engineering Standards</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral dark:text-dark-muted">No hype cycles. Rigorous validation focused on fault isolation, scale ceilings, and zero data loss.</p>
          <div className="mt-7 space-y-3">
            {standards.map((item) => <article key={item.index} className="flex flex-col gap-4 rounded-2xl border border-neutral/10 dark:border-dark-border bg-background dark:bg-dark-bg-light p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary/10 bg-primary/10 text-lg text-secondary">{item.icon}</span><div><div className="font-mono text-[9px] font-semibold tracking-wider text-secondary">{item.index}<span className="ml-2 font-normal text-muted dark:text-dark-muted">ZERO-TRUST</span></div><h3 className="mt-1 text-sm font-semibold text-ink dark:text-dark-text">{item.title}</h3></div></div>
              <div className="flex flex-wrap items-center gap-2 rounded-full bg-neutral/5 dark:bg-dark-bg px-4 py-2 font-mono text-[9px] text-neutral dark:text-dark-muted sm:ml-4"><span>{item.detail}</span><span className="text-secondary">·</span><span className="font-semibold text-secondary">{item.result}</span></div>
            </article>)}
          </div>
         </section>

        <TechnologyCTA />
      </Container>
    </div>
  )
}
