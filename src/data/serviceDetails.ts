export type ServiceDetail = {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  outcomes: string[]
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'ai-automation', title: 'AI Automation', category: 'AI & Automation',
    summary: 'Make recurring work faster and more consistent with thoughtfully designed automation.',
    description: 'We map the steps your team repeats, connect the tools involved, and build reliable workflows with clear review points. AI is applied where it adds useful classification, extraction, or decision support.',
    outcomes: ['Reduce manual, repetitive work', 'Connect tools and keep information in sync', 'Add review and monitoring to important workflows'],
  },
  {
    slug: 'custom-software', title: 'Custom Software Development', category: 'Software',
    summary: 'Purpose-built digital products shaped around the way your organization works.',
    description: 'From early product design through launch, we build secure web applications, mobile experiences, APIs, and backend systems around your users and business requirements.',
    outcomes: ['A product shaped to your processes', 'Maintainable architecture that can grow', 'Secure integrations with existing systems'],
  },
  {
    slug: 'government-technology', title: 'Government Technology', category: 'Public Sector',
    summary: 'Modern digital services that make public processes clearer and easier to access.',
    description: 'We help public sector teams modernize services with accessible interfaces, dependable systems, and the operational visibility needed to support citizens and staff.',
    outcomes: ['Simpler online access to public services', 'Secure, auditable workflows', 'Resilient systems for essential operations'],
  },
  {
    slug: 'erp-systems', title: 'ERP Systems', category: 'Business Systems',
    summary: 'Bring finance, inventory, operations, and people onto connected business workflows.',
    description: 'We implement and integrate ERP capabilities around your actual processes, helping teams replace disconnected tools and gain a consistent view of operations.',
    outcomes: ['Connected business data and processes', 'Less duplicate entry and manual reconciliation', 'Clearer operational reporting'],
  },
  {
    slug: 'ai-agents', title: 'AI Agents', category: 'AI & Automation',
    summary: 'Build task-focused AI assistants that work with your systems and your team.',
    description: 'We design bounded assistants for research, support, and multi-step business tasks, with suitable permissions, human review, and clear measures of quality.',
    outcomes: ['Assist with well-defined multi-step tasks', 'Use relevant internal context and tools', 'Keep people in control of important decisions'],
  },
  {
    slug: 'data-analytics', title: 'Data & Analytics', category: 'Data',
    summary: 'Turn reliable business data into useful answers and timely decisions.',
    description: 'We bring together data sources, build dependable reporting pipelines, and present the measures that help teams understand performance and respond to change.',
    outcomes: ['Consistent reporting across data sources', 'Clear dashboards for key measures', 'Better data quality and visibility'],
  },
  {
    slug: 'dedicated-teams', title: 'Dedicated Development Teams', category: 'Engineering',
    summary: 'Add experienced engineering capacity that fits your team and delivery goals.',
    description: 'Our engineers can join your delivery rhythm to help design, build, and maintain software while sharing progress and technical decisions clearly.',
    outcomes: ['Flexible engineering capacity', 'Consistent collaboration with your team', 'Practical support across the delivery lifecycle'],
  },
  {
    slug: 'maintenance-support', title: 'Maintenance & Support', category: 'Operations',
    summary: 'Keep business critical software dependable, secure, and ready to evolve.',
    description: 'We help monitor, maintain, and improve production systems through planned updates, issue response, and ongoing technical care matched to your needs.',
    outcomes: ['Proactive maintenance and updates', 'Faster visibility into production issues', 'Ongoing improvements to reliability and security'],
  },
  {
    slug: 'cloud-devops', title: 'Cloud Solutions & DevOps', category: 'Cloud & Infrastructure',
    summary: 'Build and operate cloud foundations that support dependable delivery.',
    description: 'We design cloud environments and delivery pipelines that help teams release safely, observe system health, and manage infrastructure with confidence.',
    outcomes: ['Repeatable deployment workflows', 'Improved infrastructure visibility', 'Cloud architecture aligned to your needs'],
  },
  {
    slug: 'cybersecurity', title: 'Cyber Security & Compliance', category: 'Security',
    summary: 'Strengthen your systems with practical security controls and clear processes.',
    description: 'We help identify risks, improve access and data protections, and prepare teams to operate with security practices appropriate to their environment.',
    outcomes: ['Clearer security posture and priorities', 'Stronger identity and access controls', 'Practical compliance readiness support'],
  },
]

export const servicePath = (slug: string) => `/services/${slug}`
