export type TechnologyDetail = {
  slug: string
  index: string
  title: string
  label: string
  tags: string[]
  summary: string
  description: string
  principles: string[]
}

export const TECHNOLOGY_DETAILS: TechnologyDetail[] = [
  {
    slug: 'frontend', index: '01 / FRONTEND', title: 'High-Throughput Clients', label: 'INTERACTIVE UI',
    tags: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'WASM'],
    summary: 'Fast, accessible interfaces built to make complex products feel clear and responsive.',
    description: 'We use modern frontend tools to build responsive web applications with reusable components, strong type safety, and careful attention to loading speed and accessibility.',
    principles: ['Design around real user tasks', 'Keep interfaces responsive and accessible', 'Use shared components for consistency'],
  },
  {
    slug: 'ai-agents', index: '04 / COGNITIVE', title: 'Autonomous Agent Mesh', label: 'REASONING',
    tags: ['PyTorch', 'LangGraph', 'Gradient Vector', 'Claude & GPT-4o', 'vLLM Inference'],
    summary: 'AI systems that combine models, tools, and human review for useful business tasks.',
    description: 'We build AI workflows with defined responsibilities, appropriate access to tools and data, and practical evaluation. Human oversight is included where decisions need it.',
    principles: ['Keep each agent task clearly scoped', 'Evaluate quality and reliability continuously', 'Keep people involved in consequential decisions'],
  },
  {
    slug: 'runtime', index: '02 / RUNTIME', title: 'Event Streams & Microservices', label: 'DISTRIBUTED',
    tags: ['Bun / Node', 'FastAPI', 'Laravel 11', 'gRPC', 'OpenAPI v3'],
    summary: 'Well-defined services and event-driven systems that help applications scale and integrate.',
    description: 'We select runtime and service patterns to fit each product, with clear APIs, asynchronous processing where useful, and observability to support ongoing operations.',
    principles: ['Choose simple service boundaries', 'Design resilient API and event contracts', 'Monitor performance and failures'],
  },
  {
    slug: 'data-platform', index: '03 / DATA & MEMORY', title: 'Persistent & Vector Fabric', label: 'STATE FABRIC',
    tags: ['pgvector', 'MySQL 8.0', 'Redis Cluster', 'Kubernetes', 'AWS/GCP'],
    summary: 'Data foundations that keep application state reliable, searchable, and available.',
    description: 'We design storage and data infrastructure around access patterns, recovery needs, and operational constraints, combining relational, cache, and vector capabilities when they fit.',
    principles: ['Protect data with backups and access controls', 'Choose storage to fit the workload', 'Plan for observability and recovery'],
  },
]

export const technologyPath = (slug: string) => `/technology/${slug}`
