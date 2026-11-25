import brainImage from '@/assets/images/brainImage.svg'
import Container from '@/components/ui/Container'

const highlights = [
  {
    icon: '✓',
    title: 'Enterprise Proven',
    description: 'Reliable mission-critical uptime & compliance.',
  },
  {
    icon: '♙',
    title: 'Bespoke Intelligence',
    description: 'Custom AI models trained on your private data.',
  },
]

export default function AboutUS() {
  return (
    <section id="about" className="border-y border-neutral/10 dark:border-dark-border bg-neutral/5 dark:bg-dark-bg py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
              • Who we are
            </p>

            <h1 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-ink dark:text-dark-text sm:text-4xl">
              Technology built around{' '}
              <span className="text-secondary">your business.</span>
            </h1>

            <div className="mt-5 max-w-xl space-y-4 text-sm leading-relaxed text-neutral dark:text-dark-muted">
              <p>
                Neural Tech Labs partners with businesses to design, develop, and
                maintain technology that makes everyday operations simpler and
                more effective.
              </p>
              <p>
                Our focus is on practical innovation, reliable software, and
                engineering solutions that support long-term growth.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-4"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-secondary">
                    {item.icon}
                  </span>
                  <h2 className="mt-3 text-xs font-semibold text-ink dark:text-dark-text">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted dark:text-dark-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-wide text-neutral dark:text-dark-muted">
              <span><span className="text-primary">●</span> Kathmandu HQ</span>
              <span><span className="text-primary">●</span> Sydney Hub</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={brainImage}
              alt="Illustration of a glowing brain with technology skills"
              className="h-auto w-full max-w-[520px]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}