export interface CapabilityDomain {
  id: string;
  title: string;
  description: string;
  competencies: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

export const capabilities: CapabilityDomain[] = [
  {
    id: 'infra-cloud',
    title: 'Infrastructure & Cloud Operations',
    description: 'Operating production cloud resources, diagnosing network bottlenecks, and optimizing operational costs.',
    competencies: [
      {
        name: 'AWS Cloud Architecture & Compute',
        description: 'Managing containerized deployments and virtual servers across ECS, EC2, Application Load Balancers, and CloudFront distributions.',
        technologies: ['AWS ECS', 'EC2', 'ALB', 'CloudFront', 'WAF', 'S3']
      },
      {
        name: 'Cloud Cost Optimization (FinOps)',
        description: 'Analyzing CloudWatch utilization metrics to right-size compute instances, tune database tiers, and cut cloud expenditure by up to 46%.',
        technologies: ['CloudWatch', 'Cost Explorer', 'RDS Right-sizing', 'Lifecycle Rules']
      },
      {
        name: 'Self-Hosted Server Management',
        description: 'Hardened Linux server operations with Docker orchestration, Coolify deployment managers, reverse proxies, and automated offsite backup routines.',
        technologies: ['Docker', 'Coolify', 'Ubuntu Server', 'Nginx', 'Backup Scripts']
      }
    ]
  },
  {
    id: 'automation-integration',
    title: 'Automation & System Integration',
    description: 'Connecting isolated services, business workflows, and communication platforms into reliable pipelines.',
    competencies: [
      {
        name: 'Event-Driven Webhook Pipelines',
        description: 'Building decoupled webhook ingestion pipelines with payload normalizers, schema enforcement, and idempotent deduplication.',
        technologies: ['n8n Self-Hosted', 'Power Automate', 'REST APIs', 'Webhooks']
      },
      {
        name: 'Omnichannel & AI Helpdesk Integration',
        description: 'Connecting WhatsApp gateways (Wablas) and Qiscus with AI response drafting and human-in-the-loop review in Microsoft Teams.',
        technologies: ['WhatsApp Business API', 'Teams Adaptive Cards', 'Aura AI Drafts']
      },
      {
        name: 'Enterprise API Synchronization',
        description: 'Automating business processes with Microsoft Graph API, Azure Active Directory authentication, and enterprise SharePoint lists.',
        technologies: ['MSAL.js', 'Microsoft Graph API', 'Azure AD', 'SharePoint Online']
      }
    ]
  },
  {
    id: 'application-engineering',
    title: 'Application Engineering & Security',
    description: 'Writing full-stack code to solve operational problems and authoring reusable interface systems.',
    competencies: [
      {
        name: 'Full-Stack Development',
        description: 'Constructing robust backend APIs and responsive clients using Node.js, NestJS, React, and relational databases.',
        technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'SQLite', 'Prisma']
      },
      {
        name: 'Component Systems & Tokens',
        description: 'Creating modular design systems like SatuInti UI with centralized CSS custom properties and WCAG AA accessibility compliance.',
        technologies: ['Tailwind CSS', 'Vite', 'PostCSS', 'ARIA Patterns']
      },
      {
        name: 'Security & Access Control',
        description: 'Implementing Row-Level Security (RLS), secure API key vaulting, WAF rules, and token-based authentication flows.',
        technologies: ['Postgres RLS', 'JWT / OAuth2', 'AWS WAF', 'Environment Isolation']
      }
    ]
  }
];
