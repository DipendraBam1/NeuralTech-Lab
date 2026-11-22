import logo from '@/assets/icons/logo.svg'
import Container from '@/components/ui/Container'

const navigation = ['Home', 'Services', 'Capabilities', 'About Us', 'Clients']

const solutions = [
  'AI Automation & Workflows',
  'Custom Software Engineering',
  'Government Technology',
  'Cloud Solutions & DevOps',
  'Dedicated Development Teams',
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_1fr_1.5fr]">
          <div>
            <img src={logo} alt="Neural Tech Labs" width={121} height={43} />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Neural Tech Labs (Ntechlabs) is an AI and enterprise software
              development powerhouse operating between Nepal and Australia.
              Bridging engineering excellence with real-world enterprise impact.
            </p>

            <div className="mt-4 flex gap-2" aria-label="Social links">
              {[
                ['in', 'LinkedIn'],
                ['git', 'GitHub'],
                ['x', 'X'],
              ].map(([label, name]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-8 min-w-8 items-center justify-center rounded-full bg-neutral/5 px-2 text-xs font-semibold text-neutral"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterLinks title="Navigation" links={navigation} />
          <FooterLinks title="Solutions" links={solutions} />

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Contact · Hubs
            </h2>
            <div className="mt-3 space-y-2">
              <HubCard
                name="Kathmandu Studio"
                location="Shankhamul, Kathmandu, Nepal"
                email="nepal@ntechlabs.com"
              />
              <HubCard
                name="Sydney Gateway"
                location="Barangaroo, Sydney, NSW, Australia"
                email="australia@ntechlabs.com"
              />
            </div>
          </div>
        </div>


      </Container>
    </footer>
  )
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">
        {title}
      </h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-xs text-neutral hover:text-secondary">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HubCard({
  name,
  location,
  email,
}: {
  name: string
  location: string
  email: string
}) {
  return (
    <article className="rounded-lg border border-neutral/10 bg-neutral/5 p-3">
      <h3 className="text-xs font-semibold text-ink">▣ &nbsp;{name}</h3>
      <p className="mt-1 pl-5 text-[11px] text-muted">{location}</p>
      <a
        href={`mailto:${email}`}
        className="mt-1 block pl-5 text-[11px] font-medium text-secondary"
      >
        {email}
      </a>
    </article>
  )
}
