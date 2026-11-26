import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import PageDecorations from '@/components/ui/PageDecorations'

type PageId = 'terms' | 'cookies' | 'privacy' | 'sitemap'

type PageSection = {
  title: string
  paragraphs?: string[]
  links?: { label: string; href: string; description: string }[]
}

const siteLinks = [
  { label: 'Home', href: '/', description: 'Company overview and featured work.' },
  { label: 'Services', href: '/services', description: 'Explore our software and technology services.' },
  { label: 'Technology', href: '/technology', description: 'Learn about our engineering approach and technology stack.' },
  { label: 'About Us', href: '/about', description: 'Our team, values, and ways of working.' },
  { label: 'Blog', href: '/blog', description: 'Articles and perspectives from our team.' },
  { label: 'Contact Us', href: '/contact', description: 'Send a project inquiry to our team.' },
  { label: 'Talk to Our Team', href: '/talk-to-team', description: 'Request a 30-minute introductory call.' },
]

const policyLinks = [
  { label: 'Terms & Conditions', href: '/terms', description: 'Terms for using this website.' },
  { label: 'Cookies', href: '/cookies', description: 'How this site stores your theme preference.' },
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'How inquiry information is handled.' },
]

const pages: Record<PageId, { title: string; intro: string; sections: PageSection[] }> = {
  terms: {
    title: 'Terms & Conditions',
    intro: 'These terms describe the basic conditions for using the Neural Tech Labs website. Project work is covered by a separate written agreement.',
    sections: [
      { title: 'Using this website', paragraphs: ['You may browse this site for information about Neural Tech Labs and our services. Please use it lawfully and avoid actions that could disrupt the site or interfere with other visitors.'] },
      { title: 'Services and project agreements', paragraphs: ['Descriptions on this site are general information, not a binding offer or project specification. Any delivery scope, fees, schedule, ownership, and support terms are confirmed in a separate proposal or agreement accepted by both parties.'] },
      { title: 'Content and intellectual property', paragraphs: ['Unless stated otherwise, site content, visual materials, and the Neural Tech Labs name are owned by Neural Tech Labs or used with permission. You may link to our public pages; please contact us before reproducing site materials for another purpose.'] },
      { title: 'External links and availability', paragraphs: ['Links to third-party websites are provided for convenience. Those sites are operated independently. We work to keep this website available and current, but pages and details may change over time.'] },
      { title: 'Questions', paragraphs: ['For questions about these terms, contact us at hello@neuraltechlabs.com.'] },
    ],
  },
  cookies: {
    title: 'Cookies',
    intro: 'This page explains the browser storage currently used by this website.',
    sections: [
      { title: 'Theme preference', paragraphs: ['When you switch themes from the navbar, this site saves your choice in your browser using local storage under the key site-theme. This keeps your selected theme when you return to the site. The theme preference is stored in local storage, not in a cookie.'] },
      { title: 'Email links', paragraphs: ['Inquiry forms open your email application with a message prepared for you. Your email application and provider handle the message if you choose to send it.'] },
      { title: 'Managing your preference', paragraphs: ['Use the theme control in the navbar to switch between light and dark themes. You can also clear this site’s stored data through your browser settings.'] },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'This page describes what happens when you choose to contact Neural Tech Labs through this website.',
    sections: [
      { title: 'Information you choose to send', paragraphs: ['The inquiry forms can prepare an email containing details such as your name, work email, company, service interest, preferred call time, and project notes. Submitting the form opens your email application; the message is sent only if you choose to send it.'] },
      { title: 'How we use inquiry details', paragraphs: ['If you send us an inquiry, our team uses the information in your message to respond, discuss your request, and arrange a follow-up. Please avoid including passwords, payment details, or sensitive personal information in an initial inquiry.'] },
      { title: 'Email and browser services', paragraphs: ['Your email application and email provider process messages you send. This website also stores your light or dark theme preference in your browser’s local storage.'] },
      { title: 'Questions or requests', paragraphs: ['For privacy questions or requests relating to an inquiry you sent, contact hello@neuraltechlabs.com.'] },
    ],
  },
  sitemap: {
    title: 'Sitemap',
    intro: 'Browse the main pages and information on the Neural Tech Labs website.',
    sections: [
      { title: 'Main pages', links: siteLinks },
      { title: 'Policies and information', links: policyLinks },
    ],
  },
}

export default function SiteInfo({ page }: { page: PageId }) {
  const content = pages[page]

  return (
    <>
      <div className="relative isolate overflow-clip bg-neutral/5 pb-16 dark:bg-dark-bg sm:pb-20">
        <PageDecorations />
        <Container className="relative z-10 pt-28 sm:pt-32">
          <header className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-secondary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-secondary">
              Neural Tech Labs · Information
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-[-.04em] text-ink dark:text-dark-text sm:text-5xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral dark:text-dark-muted sm:text-base">
              {content.intro}
            </p>
          </header>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <aside className="h-fit rounded-2xl border border-neutral/10 bg-background p-5 dark:border-dark-border dark:bg-dark-bg-light lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 dark:text-dark-muted">On this page</p>
              <nav className="mt-3 space-y-1" aria-label="Page sections">
                {content.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block rounded-lg border-b border-neutral/10 px-3 py-2 text-sm text-neutral transition hover:bg-neutral/5 hover:text-ink dark:border-dark-border dark:text-dark-muted dark:hover:bg-dark-bg dark:hover:text-dark-text"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>


            <div className="space-y-4">
              {content.sections.map((section, index) => (
                <section
                  id={`section-${index + 1}`}
                  key={section.title}
                  className="scroll-mt-28 rounded-2xl border border-neutral/10 bg-background p-5 dark:border-dark-border dark:bg-dark-bg-light sm:p-7"
                >
                  <h2 className="text-lg font-semibold tracking-tight text-ink dark:text-dark-text">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-7 text-neutral dark:text-dark-muted">{paragraph}</p>
                  ))}
                  {section.links && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {section.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            className="block h-full rounded-xl border border-neutral/10 bg-neutral/5 p-4 transition hover:border-secondary/30 hover:bg-primary/5 dark:border-dark-border dark:bg-dark-bg dark:hover:bg-dark-nav-bg"
                          >
                            <span className="font-semibold text-ink dark:text-dark-text">{item.label}</span>
                            <span className="mt-1 block text-xs leading-relaxed text-neutral dark:text-dark-muted">{item.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
