import card1 from '@/assets/images/aboutus-card1.svg'
import card2 from '@/assets/images/aboutus-card2.svg'
import Container from '@/components/ui/Container'
import Footer2 from '@/components/layout/Footer2'

const values = [
  {
    number: '01',
    category: 'DISCOVERY',
    title: 'Innovation',
    description: 'Explore better ways to solve real-world problems using technology.',
    icon: '✧',
  },
  {
    number: '02',
    category: 'PARTNERSHIP',
    title: 'Collaboration',
    description: 'Work closely with clients to understand their goals and challenges.',
    icon: '♡',
  },
  {
    number: '03',
    category: 'RELIABILITY',
    title: 'Reliability',
    description: 'Build dependable solutions with a focus on quality and consistency.',
    icon: '▣',
  },
  {
    number: '04',
    category: 'RESILIENCE',
    title: 'Growth',
    description: 'Create scalable technology that adapts as businesses evolve.',
    icon: '⌁',
  },
]

const workSteps = [
  'Understand your business needs.',
  'Plan the right technology solution.',
  'Build, test, and refine.',
  'Support and improve over time.',
]

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-primary/10 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[.12em] text-secondary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  )
}

function CenterHeading({ eyebrow }: { eyebrow: string }) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-.04em] text-ink sm:text-3xl">
        Technology should make work easier, not more complicated.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-neutral sm:text-sm">
        We turn business challenges into practical digital solutions that help organizations work smarter and grow with confidence.
      </p>
    </header>
  )
}

export default function About() {
  return (
    <>
      <div className="bg-neutral/5 pb-16 sm:pb-20">
        <Container className="pt-28 sm:pt-32">
          <CenterHeading eyebrow="Our approach" />

          <section className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
            <div className="max-w-md">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-.035em] text-ink sm:text-3xl">
                Technology built around your business.
              </h2>
              <div className="mt-4 space-y-3 text-xs leading-relaxed text-neutral sm:text-sm">
                <p>
                  Neural Tech Labs partners with businesses to design, develop, and maintain technology that makes everyday operations simpler and more effective.
                </p>
                <p>
                  Our focus is on practical innovation, reliable software, and engineering solutions that support long-term growth.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Enterprise Proven', 'Bespoke Intelligence'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-neutral/10 bg-background px-3 py-1.5 text-[10px] text-neutral">
                    <span className="text-secondary">✧</span>{item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={card1}
                alt="Illustration of a team collaborating on technology solutions"
                className="h-auto w-full max-w-[638px]"
              />
            </div>
          </section>

          <section className="border-t border-neutral/10 pt-10 sm:pt-12">
            <CenterHeading eyebrow="Our purpose" />
          </section>

          <section className="mt-12 sm:mt-16">
            <header className="mb-6 text-center">
              <Eyebrow>What drives us</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">Our Core Values</h2>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {values.map((value) => (
                <article key={value.number} className="flex min-h-40 flex-col rounded-xl border border-neutral/10 bg-background p-5 shadow-sm sm:p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-2xl text-secondary">
                    {value.icon}
                  </span>
                  <h3 className="mt-5 text-sm font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 max-w-md text-[11px] leading-relaxed text-neutral">{value.description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-neutral/10 pt-4 mt-5 font-mono text-[9px] font-semibold tracking-wide text-secondary">
                    <span>{value.number} / {value.category}</span>
                    <span aria-hidden="true" className='text-lg'>{value.icon}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid items-center gap-8 sm:mt-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
            <div className="order-2 lg:order-1">
              <img
                src={card2}
                alt="A team planning and delivering a technology project"
                className="h-auto w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-[-.035em] text-ink sm:text-3xl">
                From ideas to real-world solutions.
              </h2>
              <p className="mt-3 max-w-lg text-xs leading-relaxed text-neutral sm:text-sm">
                We combine technical expertise, collaborative problem-solving, and thoughtful development to turn ideas into useful digital products.
              </p>
              <ol className="mt-6 space-y-2.5">
                {workSteps.map((step, index) => (
                  <li key={step} className="flex items-center gap-3 rounded-full border border-neutral/10 bg-background px-3 py-2 text-[11px] font-bold text-ink shadow-sm sm:px-4">
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/20 p-3 font-mono text-[9px] font-bold text-secondary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </Container>
      </div>
      <Footer2 />
    </>
  )
}
