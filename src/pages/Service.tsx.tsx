import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import PageDecorations from "@/components/ui/PageDecorations";

type Category = "All" | "AI" | "Software" | "Business";

type Service = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string;
  href: string;
  visual:
    | "automation"
    | "software"
    | "government"
    | "erp"
    | "agents"
    | "analytics"
    | "teams"
    | "support";
};

const categories: Category[] = ["All", "AI", "Software", "Business"];

const capabilities = [
  {
    title: "Workflow Automation",
    description:
      "Automate recurring tasks and multi-step processes with end-to-end reliability and guaranteed idempotency.",
    icon: "workflow",
  },
  {
    title: "System Integration",
    description:
      "Connect business tools, APIs, legacy software, and databases to eliminate manual dual-entry friction.",
    icon: "integration",
  },
  {
    title: "AI-Powered Processes",
    description:
      "Apply AI models where they can assist decisioning, semantic routing, and cognitive routines at scale.",
    icon: "ai",
  },
  {
    title: "Process Optimization",
    description:
      "Improve real-time auditability, execution consistency, compliance validation, and cross-team visibility.",
    icon: "shield",
  },
] as const;

function CapabilityIcon({
  name,
}: {
  name: (typeof capabilities)[number]["icon"];
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "workflow" && <path d="M13 2 4 13h7l-1 9 10-13h-7l1-7Z" />}
      {name === "integration" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m7 14 3-3 2 2 3-4 2 2" />
          <circle cx="8" cy="8" r=".7" fill="currentColor" />
        </>
      )}
      {name === "ai" && (
        <>
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M8 21h8m-4-4v4M8 10h.01M12 10h.01M16 10h.01M8 13h8" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
    </svg>
  );
}

const services: Service[] = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks and workflows with reliable algorithmic processing.",
    category: "AI",
    tags: "AI / AUTOMATION",
    href: "/services/ai-automation",
    visual: "automation",
  },
  {
    title: "Custom Software Development",
    description:
      "Build enterprise-ready digital products engineered around your bespoke operational needs.",
    category: "Software",
    tags: "WEB / SOFTWARE",
    href: "/services/custom-software",
    visual: "software",
  },
  {
    title: "Government Technology",
    description:
      "Modernize public services with secure, auditable, and resilient citizen-first digital systems.",
    category: "Business",
    tags: "PUBLIC SECTOR",
    href: "/services/government-technology",
    visual: "government",
  },
  {
    title: "ERP Systems",
    description:
      "Connect fragmented supply-chain, inventory, and financial operations into one workflow.",
    category: "Business",
    tags: "ERP / SYSTEMS",
    href: "/services/erp-systems",
    visual: "erp",
  },
  {
    title: "AI Agents",
    description:
      "Create autonomous cognitive assistants tailored to parse and resolve complex multi-step workflows.",
    category: "AI",
    tags: "AI / INTELLIGENT SYSTEMS",
    href: "/services/ai-agents",
    visual: "agents",
  },
  {
    title: "Data & Analytics",
    description:
      "Turn high-volume business logs into real-time visual telemetry and actionable predictive insights.",
    category: "AI",
    tags: "AI / DATA / INSIGHTS",
    href: "/services/data-analytics",
    visual: "analytics",
  },
  {
    title: "Dedicated Development Teams",
    description:
      "Augment your engineering team with specialized senior technical talent embedded seamlessly.",
    category: "Software",
    tags: "IT / ENGINEERING",
    href: "/services/dedicated-teams",
    visual: "teams",
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your production infrastructure secure, resilient, and performing at peak capacity 24/7/365.",
    category: "Software",
    tags: "IT / SERVICE SUPPORT",
    href: "/services/maintenance-support",
    visual: "support",
  },
];

function ServiceVisual({ kind }: { kind: Service["visual"] }) {
  return (
    <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-neutral/5 via-primary/10 to-primary/20">
      {kind === "automation" && (
        <div className="flex items-center gap-2 text-[8px] font-medium text-neutral dark:text-dark-muted">
          <span className="rounded border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light px-2 py-1">
            Input
          </span>
          <span className="text-secondary">→</span>
          <span className="rounded border border-primary/20 bg-white dark:bg-dark-bg-light px-2 py-1">
            Classify
          </span>
          <span className="text-secondary">→</span>
          <span className="rounded bg-secondary px-2 py-1 text-white">
            AI workflow
          </span>
          <span className="text-secondary">→</span>
          <span className="text-primary">✓</span>
        </div>
      )}

      {kind === "software" && (
        <div className="w-3/4 rounded-md border border-neutral/10 dark:border-dark-border bg-white/80 dark:bg-dark-bg-light/80 p-3">
          <div className="flex gap-1">
            <i className="h-1.5 w-1.5 rounded-full bg-primary" />
            <i className="h-1.5 w-1.5 rounded-full bg-secondary/50" />
            <i className="h-1.5 w-1.5 rounded-full bg-muted" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded bg-neutral/10 dark:bg-dark-border" />
            <div className="h-1 w-3/4 rounded bg-primary/50" />
            <div className="h-1 w-5/6 rounded bg-secondary/50" />
          </div>
        </div>
      )}

      {kind === "government" && (
        <svg
          width="38"
          height="38"
          viewBox="0 0 40 40"
          fill="none"
          className="text-secondary"
          aria-hidden="true"
        >
          <path
            d="M5 15h30L20 6 5 15ZM8 17v14m8-14v14m8-14v14m8-14v14M5 34h30"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}

      {kind === "erp" && (
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <span
              key={i}
              className="h-5 w-10 rounded border border-primary/30 bg-white/80 dark:bg-dark-bg-light/80"
            />
          ))}
        </div>
      )}

      {kind === "agents" && (
        <svg
          width="150"
          height="54"
          viewBox="0 0 150 54"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="#059669" strokeOpacity=".45">
            <path d="M75 27 38 12m37 15L38 42m37-15 37-15m-37 15 37 15M38 12 18 27m20-15 20 15m54-15 20 15m-20 15 20-15" />
          </g>
          <g fill="#00DE99">
            <circle cx="75" cy="27" r="6" />
            <circle cx="38" cy="12" r="4" />
            <circle cx="38" cy="42" r="4" />
            <circle cx="112" cy="12" r="4" />
            <circle cx="112" cy="42" r="4" />
            <circle cx="18" cy="27" r="3" />
            <circle cx="58" cy="27" r="3" />
            <circle cx="132" cy="27" r="3" />
          </g>
        </svg>
      )}

      {kind === "analytics" && (
        <div className="flex h-14 items-end gap-2">
          {[20, 30, 40, 52, 64].map((height, i) => (
            <span
              key={height}
              className={
                i === 4
                  ? "w-3 rounded-t bg-secondary"
                  : "w-3 rounded-t bg-primary/60"
              }
              style={{ height }}
            />
          ))}
          <svg
            className="absolute h-12 w-36"
            viewBox="0 0 144 48"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m8 38 28-10 22 3 24-13 20 2 32-15"
              stroke="#059669"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}

      {kind === "teams" && (
        <div className="flex items-end gap-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center gap-1">
              <span
                className={`h-3 w-3 rounded-full ${item === 2 ? "bg-secondary" : "bg-primary/70"}`}
              />
              <span className="h-3 w-7 rounded-t-full bg-primary/40" />
            </div>
          ))}
        </div>
      )}

      {kind === "support" && (
        <div className="flex items-center gap-2 text-secondary">
          <span className="text-[8px] font-semibold tracking-widest">
            UPTIME 99.9%
          </span>
          <svg
            width="100"
            height="28"
            viewBox="0 0 100 28"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 15h20l6-9 9 17 8-13 6 5h47"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function TopServices() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <section
        id="services"
        className="relative isolate overflow-hidden bg-neutral/5 dark:bg-dark-bg pt-28 pb-16 sm:pt-32 sm:pb-20"
      >
        <PageDecorations />
        <Container className="relative z-10">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary">
              • Our services
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink dark:text-dark-text sm:text-5xl">
              Technology that moves your{" "}
              <span className="text-primary">business forward.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral dark:text-dark-muted">
              From AI automation to custom software, we help businesses build
              smarter, scale faster, and simplify complex operations.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-[10px] text-neutral dark:text-dark-muted">
              <span className="rounded-full border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light px-3 py-1.5">
                32+ solutions delivered
              </span>
              <span className="rounded-full border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light px-3 py-1.5">
                Mutual NDA guarantee
              </span>
              <span className="rounded-full border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light px-3 py-1.5">
                24/7 response SLA
              </span>
            </div>
          </header>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink dark:text-dark-text">
                Top Services of{" "}
                <span className="text-secondary">Ntechlabs</span>
              </h2>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                High-impact engineering crafted for forward-thinking
                enterprises.
              </p>
            </div>

            <div className="flex w-fit rounded-full border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "text-neutral dark:text-dark-muted hover:text-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {visibleServices.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group rounded-xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-3 transition-shadow hover:shadow-lg hover:shadow-neutral/10"
              >
                <ServiceVisual kind={service.visual} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-tight text-secondary">
                  {String(index + 1).padStart(2, "0")} / {service.tags}
                </p>
                <h3 className="mt-1 text-sm font-bold text-ink dark:text-dark-text">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral dark:text-dark-muted">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-[11px] font-semibold text-secondary group-hover:underline">
                  Explore service ↗
                </span>
              </Link>
            ))}
          </div>

          <section className="mt-14 grid items-center gap-8 overflow-hidden rounded-2xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-secondary">
                • AI automation
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight text-ink dark:text-dark-text">
                Work smarter with{" "}
                <span className="text-primary">intelligent automation.</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral dark:text-dark-muted">
                Streamline repetitive tasks, connect business processes, and
                help your team focus on work that creates real value.
              </p>
              <Link
                to="/services/ai-automation"
                className="mt-5 border rounded-full p-3 inline-flex text-xs font-semibold text-white bg-secondary"
              >
                Explore AI automation ↗
              </Link>
            </div>

            <div className="rounded-xl bg-ink p-5 font-mono text-[10px] text-white shadow-lg">
              <div className="flex justify-between border-b border-white/10 pb-3 text-muted dark:text-dark-muted">
                <span>INPUT</span>
                <span>PROCESS</span>
                <span>RESULT</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <span className="rounded border border-white/10 p-2">
                  New request
                </span>
                <span className="rounded border border-primary/30 bg-primary/10 p-2 text-primary">
                  AI classify
                </span>
                <span className="rounded border border-white/10 p-2">
                  Task routed
                </span>
              </div>
              <div className="mt-4 h-1 rounded-full bg-white/10">
                <div className="h-1 w-3/4 rounded-full bg-primary" />
              </div>
              <p className="mt-3 text-primary">
                ✓ Workflow completed automatically
              </p>
            </div>
          </section>
        </Container>
      </section>
      <section id="capabilities" className="py-16 bg-neutral/5 dark:bg-dark-bg sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
            Our capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-4xl">
            Automation Solutions
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="flex gap-4 rounded-2xl border border-neutral/10 dark:border-dark-border bg-white dark:bg-dark-bg-light p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-secondary">
                  <CapabilityIcon name={capability.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-ink dark:text-dark-text sm:text-lg">
                      {capability.title}
                    </h3>
                    <span className="rounded border border-neutral/10 dark:border-dark-border bg-neutral/5 dark:bg-dark-bg px-2 py-0.5 font-mono text-xs text-muted dark:text-dark-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-neutral dark:text-dark-muted">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-neutral/5 dark:bg-dark-bg pt-16 pb-0 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-4xl">
              From first call to{" "}
              <span className="text-secondary">live system.</span>
            </h2>

            <div className="relative mt-10 grid gap-8 sm:grid-cols-4 sm:gap-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-4 hidden h-px bg-neutral/15 sm:block" />
              {[
                {
                  title: "Discover",
                  description:
                    "We map your processes and find where automation pays off first.",
                },
                {
                  title: "Design",
                  description:
                    "We shape the pipeline, the integrations and the guardrails.",
                },
                {
                  title: "Build",
                  description:
                    "Engineers ship in short cycles you can see and test.",
                },
                {
                  title: "Operate",
                  description:
                    "We monitor, tune and support the system after launch.",
                },
              ].map((step, index) => (
                <article
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-secondary bg-white dark:bg-dark-bg-light text-xs font-semibold text-secondary">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink dark:text-dark-text">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[190px] text-xs leading-relaxed text-neutral dark:text-dark-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-transparent bg-gradient-to-r from-secondary to-primary px-8 py-10 text-white shadow-lg dark:border-dark-border dark:from-dark-nav-bg dark:to-dark-bg-light sm:px-10 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                Let’s build something
                <br className="hidden sm:block" /> better together.
              </h2>
              <p className="mt-2 text-sm text-white/85">
                Have a project in mind? Let’s find the right technology for your
                business.
              </p>
              <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-white/80">
                Mutual NDA guarantee&nbsp;&nbsp; • &nbsp;&nbsp;24h response SLA
              </p>
            </div>
            <a
              href="/talk-to-team"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ink shadow-md transition hover:brightness-105 "
            >
              Talk to Our Team
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
