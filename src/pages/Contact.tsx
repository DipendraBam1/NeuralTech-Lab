import { useState, type FormEvent } from 'react'
import contactImage from '@/assets/images/contact-card.svg'
import polygonDecoration from '@/assets/images/Polygon 1.svg'
import dottedDecoration from '@/assets/images/dotted.svg'
import Container from '@/components/ui/Container'
import Footer2 from '@/components/layout/Footer2'

const services = [
  'AI Automation',
  'Custom Software Development',
  'Government Technology',
  'ERP Systems',
  'AI Agents',
  'Data & Analytics',
  'Dedicated Development Team',
  'Maintenance & Support',
]

const fieldClassName = 'mt-1.5 w-full rounded-lg border border-transparent bg-neutral/5 px-3 py-3 text-xs text-ink outline-none transition placeholder:text-muted focus:border-secondary/40 focus:ring-2 focus:ring-primary/20'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Project inquiry — ${formData.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nWork email: ${formData.get('email')}\nCompany: ${formData.get('company') || 'Not provided'}\nService: ${formData.get('service')}\n\nProject details:\n${formData.get('details')}`,
    )
    setSubmitted(true)
    window.location.href = `mailto:nepal@ntechlabs.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <div className="relative overflow-hidden bg-neutral/5">
        <img aria-hidden="true" src={polygonDecoration} alt="" className="pointer-events-none absolute -left-10 -top-8 h-[220px] w-[150px] object-contain object-left-top sm:h-[280px] sm:w-[166px]" />
        <img aria-hidden="true" src={dottedDecoration} alt="" className="pointer-events-none absolute -right-3 top-3 hidden h-24 w-24 object-contain opacity-90 sm:block" />
        <img aria-hidden="true" src={dottedDecoration} alt="" className="pointer-events-none absolute -left-5 top-[46%] hidden h-24 w-24 rotate-180 object-contain opacity-90 md:block" />

        <Container className="relative pb-10 pt-28 sm:pb-14 sm:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <section className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />Contact our team
              </span>
              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-.045em] text-ink sm:text-5xl">
                Let’s discuss your next project.
              </h1>
              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral">
                Have a challenge to solve or an idea to build? Let’s explore the right technology together.
              </p>
              <h2 className="mt-6 text-base font-semibold text-ink">Technology that moves your business forward.</h2>
              <p className="mt-1 max-w-sm text-xs leading-5 text-neutral">
                From custom software to AI-powered solutions, our team helps turn complex business needs into practical digital products.
              </p>
              <img
                src={contactImage}
                alt="A modern technology workspace with a connected digital network"
                className="mt-6 h-auto w-full max-w-[500px] rounded-xl"
              />
            </section>

            <section className="relative z-10 rounded-2xl bg-background p-5 shadow-xl shadow-ink/5 sm:p-7 lg:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-ink">Send an inquiry</h2>
              <p className="mt-1 text-xs text-neutral">Share a few details and we’ll know how to help.</p>

              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold text-ink">
                  Full name <span className="text-secondary">*</span>
                  <input className={fieldClassName} name="name" type="text" placeholder="Enter your name" autoComplete="name" required />
                </label>
                <label className="block text-sm font-semibold text-ink">
                  Work email <span className="text-secondary">*</span>
                  <input className={fieldClassName} name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                </label>
                <label className="block text-sm font-semibold text-ink">
                  Company name
                  <input className={fieldClassName} name="company" type="text" placeholder="Your company (optional)" autoComplete="organization" />
                </label>
                <label className="block text-sm font-semibold text-ink">
                  Service of interest <span className="text-secondary">*</span>
                  <select className={fieldClassName} name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => <option key={service}>{service}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-ink">
                  Project details <span className="text-secondary">*</span>
                  <textarea className={`${fieldClassName} min-h-24 resize-y`} name="details" placeholder="Tell us about your idea..." required />
                </label>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90">
                  Submit inquiry <span aria-hidden="true">↗</span>
                </button>
                {submitted && <p role="status" className="text-center text-[10px] text-secondary">Your email app is opening with your inquiry ready to send.</p>}
                <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-neutral">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3" /></svg>
                  Your information will only be used to respond to your inquiry.
                </p>
              </form>
            </section>
          </div>
        </Container>
      </div>
      <Footer2 />
    </>
  )
}
