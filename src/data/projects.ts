export interface SystemProject {
  id: string;
  name: string;
  role: string;
  category: 'Cloud & Infrastructure' | 'Automation & Integration' | 'Application Engineering';
  summary: string;
  problem: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  status: 'Production' | 'Active Deployment' | 'Internal Lab';
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
}

export const projects: SystemProject[] = [
  {
    id: 'aws-cost-optimization',
    name: 'AWS Infrastructure & Cost Optimization',
    role: 'Cloud Infrastructure & DevOps Engineer',
    category: 'Cloud & Infrastructure',
    summary: 'Restructured cloud resource footprint across compute, networking, and storage, decreasing monthly AWS operational costs from ~USD 390 to USD 210-240.',
    problem: 'Cloud expenditure had climbed to nearly USD 390 per month due to unoptimized EC2/ECS sizing, overprovisioned RDS instances, idle load balancers, and unmanaged snapshot accumulation.',
    solution: 'Audited cloud utilization metrics, right-sized ECS tasks and database compute tiers, consolidated ALB listener rules, removed redundant NAT gateways where possible, and scheduled lifecycle cleanup for S3 and EBS snapshots.',
    architectureDetails: [
      'Right-sized ECS container definitions and EC2 instances based on CloudWatch CPU/memory metrics.',
      'Audited RDS utilization and tuned connection pools, eliminating compute idle waste.',
      'Consolidated Application Load Balancer (ALB) routing targets and cleaned up stale security group rules.',
      'Enforced automated S3 lifecycle transitions and scheduled purging of orphaned EBS snapshots.'
    ],
    techStack: ['AWS ECS', 'EC2', 'ALB', 'RDS PostgreSQL', 'S3', 'IAM', 'CloudFront', 'CloudWatch'],
    status: 'Production',
    imageUrl: '/images/aws-topology.jpg',
    metrics: [
      { label: 'Cost Reduction', value: '38% to 46% savings' },
      { label: 'Monthly Run Rate', value: 'USD 390 down to USD 210-240' }
    ]
  },
  {
    id: 'anthos-helpdesk',
    name: 'Anthos: WhatsApp AI Helpdesk (MSP v3.1)',
    role: 'Automation & Systems Integration Engineer',
    category: 'Automation & Integration',
    summary: 'Engineered a multi-tenant support pipeline integrating WhatsApp (Wablas), Qiscus, and Microsoft Teams with Human-in-the-Loop AI response drafting.',
    problem: 'Support tickets arriving via WhatsApp and webchat were answered manually without context, leading to delayed response times and agent confusion over ticket ownership.',
    solution: 'Built an event-driven n8n pipeline that normalizes inbound webhooks into a Unified Schema, handles session deduplication, generates an AI draft response, and posts an interactive card to Microsoft Teams for agent review before customer dispatch.',
    architectureDetails: [
      'GROW modular workflow layout separating channel adapters, core session engine, and egress routes.',
      'Strict session idempotency check in Postgres preventing double-processing during webhook retry storms.',
      'AI draft generation (Aura) combined with mandatory Human-in-the-Loop approval gate before outbound send.',
      'Two-way dispatch routing resolving customer session tokens to send replies back through Wablas or Qiscus.'
    ],
    techStack: ['n8n Self-Hosted', 'TypeScript', 'Microsoft Teams Adaptive Cards', 'Wablas API', 'Qiscus SDK', 'PostgreSQL'],
    status: 'Production',
    imageUrl: '/images/n8n-workflow.jpg',
    metrics: [
      { label: 'Human-in-the-Loop', value: 'Zero unapproved AI sends' },
      { label: 'Supported Channels', value: 'WhatsApp + Omnichannel' }
    ]
  },
  {
    id: 'self-hosted-lab',
    name: 'Self-Hosted Infrastructure Lab',
    role: 'Infrastructure & Systems Administrator',
    category: 'Cloud & Infrastructure',
    summary: 'Designed and maintains a hardened self-hosted infrastructure cluster hosting internal development services, container deployments, and automated disaster recovery.',
    problem: 'Relying entirely on third-party managed SaaS for internal developer tooling resulted in escalating subscription overhead and vendor lock-in for internal experimentation.',
    solution: 'Deployed a self-hosted server cluster utilizing Docker, Coolify, and reverse proxies to orchestrate internal Git, automation runners (n8n), staging databases, and automated offsite backups.',
    architectureDetails: [
      'Isolated Docker network bridges with reverse proxy routing and automated SSL certificate renewal.',
      'Self-hosted Git service running on lightweight containerized infrastructure.',
      'Scheduled offsite database snapshots and config backups with verified recovery drills.',
      'Uptime monitoring and container health checks with webhook alerts to personal notification channels.'
    ],
    techStack: ['Docker', 'Coolify', 'Ubuntu Server', 'Nginx Reverse Proxy', 'PostgreSQL', 'Bash Scripts'],
    status: 'Internal Lab',
    metrics: [
      { label: 'Uptime Tracking', value: 'Healthcheck Monitors' },
      { label: 'Recovery Strategy', value: 'Automated Offsite Backups' }
    ]
  },
  {
    id: 'enterprise-asset-audit',
    name: 'Enterprise Asset Audit & Process Automation',
    role: 'Integration & Automation Engineer',
    category: 'Automation & Integration',
    summary: 'Automated physical equipment inventory by connecting mobile QR code scanning directly to enterprise SharePoint lists via Microsoft Graph API.',
    problem: 'Hardware inventory audits required manual clipboard logging followed by manual data entry into enterprise systems, resulting in week-long audit cycles and transcription errors.',
    solution: 'Created an in-browser scanner application with Azure Active Directory identity tokens that authenticates warehouse staff and mutates SharePoint inventory records in real time.',
    architectureDetails: [
      'Client-side MSAL.js authentication with silent token refresh against Azure AD tenant.',
      'Direct Microsoft Graph API REST transactions replacing slow manual spreadsheet imports.',
      'Optimized camera feed processing for high-speed barcode recognition under varying field illumination.',
      'Client-side schema validation preventing corrupted serial numbers from updating target lists.'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'MSAL.js', 'Microsoft Graph API', 'SharePoint Online'],
    status: 'Active Deployment',
    metrics: [
      { label: 'Data Latency', value: 'Real-time sync to SharePoint' },
      { label: 'Auth Model', value: 'Azure Active Directory' }
    ]
  },
  {
    id: 'satuinti-ui',
    name: 'SatuInti UI: Enterprise Component System',
    role: 'Design System & Frontend Engineer',
    category: 'Application Engineering',
    summary: 'Modular design system providing unified tokens, accessible primitives, and domain-specific widgets for internal POS, Healthcare, and Finance consoles.',
    problem: 'Internal operational web applications suffered from inconsistent UI styling, fragmented component libraries, and poor contrast accessibility.',
    solution: 'Authored an isolated component library distributed as @satuinti/ui with strict CSS variable design tokens and accessible headless contracts.',
    architectureDetails: [
      'Centralized CSS custom property pipeline extending Tailwind configuration.',
      'Accessible keyboard focus and WCAG AA color contrast compliance across all interactive surfaces.',
      'Domain-specific composite components for Point of Sale, Healthcare Patient cards, and Financial metric trends.',
      'Automated TypeScript declaration builds with Vite library mode.'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostCSS'],
    status: 'Production',
    imageUrl: '/images/satuinti-ui-showcase.jpg',
    metrics: [
      { label: 'Design Tokens', value: '7 Subsystems' },
      { label: 'Accessibility', value: 'WCAG AA Compliant' }
    ]
  }
];
