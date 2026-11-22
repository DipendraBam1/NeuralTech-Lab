import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { useTypewriter } from '@/hooks/useTypewriter'
 
const TYPED_WORDS = ['Margins', 'Momentum', 'Markets'] // TODO: replace with the words from Figma
const CHIPS = ['IT Consulting', 'Custom Software', 'AI Automation']

export default function Hero() {
  const typed = useTypewriter(TYPED_WORDS)

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-neutral/5 to-white pb-20 pt-20">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          AI &amp; Enterprise Software — Nepal · Australia
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Build <span className="text-primary">Smarter.</span> Automate{' '}
          <span className="text-primary">Faster.</span> Power the{' '}
          <span className="inline-block min-w-[1ch] text-primary">
            {typed}
            <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-ink" />
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          We build intelligent software, AI-powered automation, and enterprise technology solutions that reduce costs,
          streamline operations, increase efficiency, and accelerate growth.
        </p>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {CHIPS.map((chip) => (
            <li
              key={chip}
              className="flex items-center gap-1.5 rounded-full border border-neutral/15 bg-white px-3 py-1 text-[11px] text-neutral"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="#contact">Talk to an Expert</Button>
          <Button href="#service" variant="outline">Explore Our Services →</Button>
        </div>

        <CodeWindow />
      </Container>
    </section>
  )
}

function CodeWindow() {
  return (
    <div className="mt-14 w-full max-w-lg overflow-hidden rounded-xl border border-neutral/15 bg-white text-left shadow-xl shadow-neutral/10">
      <div className="flex items-center justify-between border-b border-neutral/10 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <i className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <i className="h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[10px] text-muted">pipeline.ts</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-muted">
          <span className="font-mono">TYPESCRIPT · V5</span>
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-secondary">
            <span className="h-1 w-1 rounded-full bg-primary" /> PIPELINE HEALTHY
          </span>
        </div>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-6 text-neutral">
        <span className="text-muted">{'// Route every request to the right agent swarm'}</span>
        {'\n'}
        <span className="text-violet-600">const</span> flow = <span className="text-blue-600">orchestrate</span>({'{'}
        {'\n  '}agents: [<span className="text-secondary">"intake"</span>, <span className="text-secondary">"classify"</span>, <span className="text-secondary">"resolve"</span>],
        {'\n  '}model: <span className="text-secondary">"fine-tuned-llm"</span>,
        {'\n  '}onEscalate: notifyTeam,
        {'\n'}{'}'});
        {'\n\n'}
        <span className="text-violet-600">await</span> flow.<span className="text-blue-600">run</span>(workload);
        {'\n\n'}
        <span className="text-secondary">{'// ✓ 1,284 tasks automated today'}</span>
      </pre>
    </div>
  )
}
