import { useState, type FormEvent } from 'react'
import {
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Footer2 from '@/components/layout/Footer2'
import polygonDecoration from '@/assets/images/Polygon 1.svg'
import dottedDecoration from '@/assets/images/dotted.svg'

const topics = [
  'AI Automation',
  'Custom Software Development',
  'Government Technology',
  'ERP Systems',
  'AI Agents',
  'Data & Analytics',
  'Dedicated Development Teams',
  'Maintenance & Support',
  'Something else',
]

const inputClass =
  'mt-2 block w-full rounded-md border border-neutral/20 dark:border-dark-border bg-background dark:bg-dark-bg-light px-3 py-3 text-xs font-normal text-ink dark:text-dark-text outline-none placeholder:text-muted dark:placeholder:text-dark-muted focus:border-secondary focus:ring-2 focus:ring-secondary/10'

export default function TalkToTeam() {
  const [step, setStep] = useState(0)
  const [topic, setTopic] = useState('AI Automation')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`30-minute consultation — ${topic}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nWork email: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\nTopic: ${topic}\nPreferred date: ${date}\nPreferred time: ${time}\n\nProject details:\n${data.get('details') || 'Not provided'}`,
    )

    setSubmitted(true)
    window.location.href = `mailto:hello@neuraltechlabs.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="talk-to-team">
      <div className="relative isolate overflow-hidden bg-neutral/5 dark:bg-dark-bg pb-6 pt-28 sm:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <img
          aria-hidden="true"
          src={polygonDecoration}
          alt=""
          className="pointer-events-none absolute -right-12 -top-12 z-0 h-[240px] w-[150px] opacity-50 sm:h-[300px] sm:w-[166px]"
        />
        <img
          aria-hidden="true"
          src={dottedDecoration}
          alt=""
          className="pointer-events-none absolute -left-8 top-20 z-0 h-20 w-[72px] opacity-90"
        />
        <img
          aria-hidden="true"
          src={dottedDecoration}
          alt=""
          className="pointer-events-none absolute -left-10 top-[52%] z-0 h-24 w-24 opacity-90"
        />
        <img
          aria-hidden="true"
          src={dottedDecoration}
          alt=""
          className="pointer-events-none absolute -right-10 top-[62%] z-0 h-24 w-24 rotate-180 opacity-90"
        />
        <Container className="relative z-10">
        <main>
          <header className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-bold leading-[1.04] tracking-[-.045em] text-ink dark:text-dark-text sm:text-[42px]">
              Let&apos;s talk about what
              <br className="hidden sm:block" /> you&apos;re{' '}
              <span className="text-secondary">building.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-[440px] text-xs leading-[1.55] text-neutral dark:text-dark-muted sm:text-[13px]">
              Book a 30-minute call with one of our engineers. Tell us the
              problem, and we&apos;ll tell you honestly how we would approach it.
            </p>
          </header>

          <div className="mx-auto mt-10 grid max-w-[1100px] overflow-hidden rounded-2xl border border-neutral/15 dark:border-dark-border bg-background dark:bg-dark-bg-light shadow-xl shadow-ink/5 md:mt-12 md:grid-cols-[.92fr_1.22fr]">
            <aside className="flex flex-col border-b border-neutral/20 dark:border-dark-border bg-neutral/5 dark:bg-dark-bg p-7 sm:p-10 md:border-b-0 md:border-r">
              <h2 className="text-xl font-bold tracking-tight text-ink dark:text-dark-text">
                What happens on the call
              </h2>
              <p className="mt-2 max-w-[340px] text-[13px] leading-relaxed text-neutral dark:text-dark-muted">
                No sales script. A focused conversation about your goals, your
                systems and your constraints.
              </p>

              <ol className="mt-8 space-y-6">
                {[
                  [
                    'You pick a topic and a time',
                    'It takes under a minute, and no account is needed.',
                  ],
                  [
                    'We confirm by email',
                    'You get the final time and a meeting link within 24 hours.',
                  ],
                  [
                    'We talk it through',
                    'You leave with a clear next step, whether or not we work together.',
                  ],
                ].map(([title, description], index) => (
                  <li key={title} className="flex gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                        index === 0
                          ? 'border-secondary/30 bg-secondary/5 text-secondary'
                          : 'border-neutral/20 dark:border-dark-border bg-background dark:bg-dark-bg-light text-ink dark:text-dark-text'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-ink dark:text-dark-text">
                        {title}
                      </h3>
                      <p className="mt-1 max-w-[300px] text-xs leading-relaxed text-neutral dark:text-dark-muted">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-semibold uppercase tracking-wide text-secondary">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck size={14} /> Mutual NDA guarantee
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 size={14} /> 24h response SLA
                </span>
              </div>

              <div className="mt-9 space-y-3 border-t border-neutral/20 dark:border-dark-border pt-5 text-xs text-neutral dark:text-dark-muted md:mt-auto md:pt-6">
                <p className="flex items-center gap-2">
                  <Mail size={14} /> hello@neuraltechlabs.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} /> +977 9700000000
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} /> Kathmandu, Nepal
                </p>
              </div>
            </aside>

            <section className="p-7 sm:p-10" aria-label="Book a call">
              <div className="flex gap-2" aria-label={`Step ${step + 1} of 3`}>
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`h-1.5 flex-1 rounded-full ${
                      index <= step ? 'bg-secondary' : 'bg-neutral/10 dark:bg-dark-border'
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-wide text-secondary">
                Step {step + 1} of 3
              </p>

              <form onSubmit={handleSubmit}>
                {step === 0 && (
                  <>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-[22px]">
                      What would you like to talk about?
                    </h2>
                    <p className="mt-1 text-xs text-neutral dark:text-dark-muted">
                      Pick the closest match. You can add details later.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {topics.map((item) => (
                        <label
                          key={item}
                          className={`flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border px-4 text-xs transition ${
                            topic === item
                              ? 'border-secondary/50 bg-secondary/5 text-ink dark:text-dark-text'
                              : 'border-neutral/20 dark:border-dark-border text-neutral dark:text-dark-muted hover:border-secondary/40'
                          }`}
                        >
                          <input
                            className="h-3.5 w-3.5 accent-secondary"
                            type="radio"
                            name="topic"
                            value={item}
                            checked={topic === item}
                            onChange={() => setTopic(item)}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-[22px]">
                      When works for you?
                    </h2>
                    <p className="mt-1 text-xs text-neutral dark:text-dark-muted">
                      Choose a preferred date and time. We&apos;ll confirm by
                      email.
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted">
                        Preferred date
                        <input
                          required
                          type="date"
                          min={new Date().toISOString().slice(0, 10)}
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          className={`${inputClass} dark:[color-scheme:dark]`}
                        />
                      </label>
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted">
                        Preferred time (Nepal time)
                        <select
                          required
                          value={time}
                          onChange={(event) => setTime(event.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select a time</option>
                          {[
                            '9:00 AM',
                            '10:00 AM',
                            '11:00 AM',
                            '1:00 PM',
                            '2:00 PM',
                            '3:00 PM',
                            '4:00 PM',
                          ].map((slot) => (
                            <option key={slot}>{slot}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <p className="mt-5 rounded-lg bg-neutral/5 dark:bg-dark-bg p-4 text-xs text-neutral dark:text-dark-muted">
                      Selected topic:{' '}
                      <span className="font-semibold text-ink dark:text-dark-text">
                        {topic}
                      </span>
                    </p>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-[22px]">
                      How can we reach you?
                    </h2>
                    <p className="mt-1 text-xs text-neutral dark:text-dark-muted">
                      We&apos;ll use these details to arrange your call.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted">
                        Your name
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          placeholder="Full name"
                          className={inputClass}
                        />
                      </label>
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted">
                        Work email
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </label>
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted sm:col-span-2">
                        Company <span className="font-normal text-muted dark:text-dark-muted">(optional)</span>
                        <input
                          name="company"
                          autoComplete="organization"
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </label>
                      <label className="text-xs font-medium text-neutral dark:text-dark-muted sm:col-span-2">
                        Anything we should know?{' '}
                        <span className="font-normal text-muted dark:text-dark-muted">(optional)</span>
                        <textarea
                          name="details"
                          rows={3}
                          placeholder="A little context helps us make the most of our time."
                          className={`${inputClass} resize-y`}
                        />
                      </label>
                    </div>

                    <p className="mt-4 rounded-lg bg-neutral/5 dark:bg-dark-bg p-4 text-xs text-neutral dark:text-dark-muted">
                      {date} at {time} · {topic}
                    </p>
                  </>
                )}

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-neutral/10 dark:border-dark-border pt-4">
                  <p className="flex items-center gap-2 text-[10px] text-muted dark:text-dark-muted sm:text-[11px]">
                    <LockKeyhole size={12} />
                    Your information is only used to arrange this call.
                  </p>
                  <div className="flex gap-2">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((current) => current - 1)}
                        className="rounded-full px-4 py-2.5 text-xs font-semibold text-neutral dark:text-dark-muted hover:bg-neutral/10 dark:hover:bg-dark-border"
                      >
                        Back
                      </button>
                    )}
                    {step < 2 ? (
                      <button
                        type="button"
                        disabled={step === 1 && (!date || !time)}
                        onClick={() => setStep((current) => current + 1)}
                        className="rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        Continue <span aria-hidden="true">→</span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90"
                      >
                        Request call <span aria-hidden="true">→</span>
                      </button>
                    )}
                  </div>
                </div>

                {submitted && (
                  <p role="status" className="mt-2 text-right text-[10px] text-secondary">
                    Your email app is opening with your request ready to send.
                  </p>
                )}
              </form>
            </section>
          </div>
        </main>
        </Container>
      </div>

      <Footer2 darkTheme />
    </div>
  )
}
