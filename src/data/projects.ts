export type ProjectCategory = 'Cloud & Ops' | 'Integrations & Automation' | 'Apps';

/** featured: large rows at the top · more: compact grid · lab: tools I built for myself (About section) */
export type ProjectTier = 'featured' | 'more' | 'lab';

export interface SketchLayer {
  label: string;
  items: string[];
}

export interface SystemProject {
  id: string;
  name: string;
  role: string;
  category: ProjectCategory;
  tier: ProjectTier;
  /** One line a client can read in three seconds. */
  outcome: string;
  summary: string;
  problem: string;
  solution: string;
  /** The single hardest engineering problem in the project. */
  challenge?: string;
  architectureDetails: string[];
  techStack: string[];
  status: 'Production' | 'In daily use' | 'Internal tool' | 'Personal project';
  imageUrl?: string;
  /** Drawn when there is no screenshot yet. */
  sketch?: SketchLayer[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; url: string }[];
}

export const projects: SystemProject[] = [
  {
    id: 'qompeten-aposis',
    name: 'Qompeten / APOSIS',
    role: 'Lead Frontend Architect',
    category: 'Apps',
    tier: 'featured',
    outcome: 'An exam platform with 1,000+ registered users: test app, authoring CMS, and university dashboard behind one login.',
    summary:
      'A psychometric testing ecosystem for universities: students take exams, admins author instruments, and campus leadership reads cohort analytics.',
    problem:
      'Institutional testing needs three very different tools (test-taking, authoring, and reporting) that share users and data but must stay isolated per institution.',
    solution:
      'Split the product into three apps plus a central SSO hub and a shared design system, so each app can ship on its own schedule without drifting apart.',
    challenge:
      'Exams cannot be lost to a browser refresh or a flaky connection. The test client caches answers locally, guards the timer against reloads, and enforces strict navigation rules so a session always resumes where it stopped.',
    architectureDetails: [
      'Exam app with local answer caching, refresh-safe timers, and strict question navigation.',
      'Authoring CMS for instruments such as DASS-42, RIASEC, and cognitive potential tests, plus test battery scheduling.',
      'University dashboard with cohort score distributions, percentile rankings, and exports.',
      'Central SSO hub supporting Firebase, Microsoft Azure AD, and campus (ITB) credentials.',
      'Shared design system with a clean services layer, light/dark themes, and Indonesian/English i18n.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'Vite', 'Azure AD', 'Firebase Auth'],
    status: 'Production',
    sketch: [
      { label: 'Users', items: ['Students', 'Admins', 'Campus leadership'] },
      { label: 'Apps', items: ['Exam app', 'Authoring CMS', 'University dashboard'] },
      { label: 'Shared', items: ['SSO hub', 'Design system', 'i18n ID / EN'] },
    ],
    metrics: [
      { label: 'Registered users', value: '1,000+' },
      { label: 'Apps in the ecosystem', value: '3 + SSO hub' },
    ],
  },
  {
    id: 'amarylis-lis',
    name: 'Amarylis Laboratory Information System',
    role: 'Systems & Desktop Integration Engineer',
    category: 'Apps',
    tier: 'featured',
    outcome: 'Lab results flow from the analyzer cable into the system automatically, with no retyping and no transcription errors.',
    summary:
      'A laboratory information system for clinic and pharmacy labs that captures results directly from medical analyzers over serial and network connections.',
    problem:
      'Clinic labs run on older PCs and analyzers that only output raw serial data. Staff copied numbers by hand, which is slow and error-prone.',
    solution:
      'A native background listener captures analyzer output, parses the healthcare protocols, and hands clean structured results to a desktop app that runs on both new and old Windows machines.',
    challenge:
      'Many clinics still run 32-bit Windows 7/8. I ship two desktop builds from one codebase: Tauri for modern 64-bit machines and a lean 32-bit Electron build with silent barcode-printer support for legacy hardware.',
    architectureDetails: [
      'Go listener running as a Windows service and macOS launchd daemon, reading RS-232 serial and TCP/IP streams.',
      'Parsers for ASTM E1381/E1394 and HL7 that verify checksums and normalize raw output into JSON.',
      'Tauri v2 desktop app for 64-bit systems; Electron 32-bit build for legacy clinic PCs.',
      'Silent USB and network barcode label printing.',
      'Record structure prepared for Indonesia’s SATUSEHAT health data integration.',
    ],
    techStack: ['Go', 'Tauri v2', 'Rust', 'Electron', 'React', 'TypeScript', 'RS-232', 'ASTM', 'HL7'],
    status: 'In daily use',
    sketch: [
      { label: 'Hardware', items: ['Analyzer (RS-232)', 'Analyzer (TCP/IP)', 'Barcode printer'] },
      { label: 'Listener', items: ['Go daemon', 'ASTM / HL7 parser', 'Checksum check'] },
      { label: 'Desktop', items: ['Tauri (64-bit)', 'Electron (32-bit)', 'Lab records'] },
    ],
    metrics: [
      { label: 'Manual retyping', value: 'Eliminated' },
      { label: 'Supported PCs', value: 'Windows 7 and newer' },
    ],
  },
  {
    id: 'aws-finops',
    name: 'AWS Cost Reduction & High Availability',
    role: 'Cloud Infrastructure Engineer',
    category: 'Cloud & Ops',
    tier: 'featured',
    outcome: 'Monthly AWS bill cut from ~$390 to $210–240 (38–46%) while keeping production highly available, with zero-downtime rollouts.',
    summary:
      'Audit and restructuring of a production AWS environment across compute, database, networking, and storage.',
    problem:
      'Costs had crept up to ~$390/month through oversized containers and databases, idle capacity, and storage nobody was cleaning up.',
    solution:
      'Measured real usage in CloudWatch, right-sized ECS tasks and RDS instances, tidied up load balancer routing, and automated cleanup of old snapshots and storage.',
    challenge:
      'Spending less usually means less redundancy. The goal was to cut cost without giving up availability: every downsize was based on observed CPU, memory, and IOPS headroom, and rolled out behind load balancer health checks with rolling container updates so changes went live without downtime.',
    architectureDetails: [
      'Right-sized ECS task definitions and EC2 instances using CloudWatch CPU and memory data.',
      'Downsized overprovisioned RDS PostgreSQL and tuned connection pools.',
      'Consolidated ALB listener rules and target groups with health checks and rolling container updates.',
      'S3 lifecycle rules and scheduled sweeps for orphaned EBS snapshots.',
      'Small internal dashboard (AWS SDK v3) to watch resource allocation and budget burn.',
    ],
    techStack: ['AWS ECS', 'EC2', 'ALB', 'RDS PostgreSQL', 'S3', 'CloudFront', 'CloudWatch', 'IAM', 'Docker'],
    status: 'Production',
    imageUrl: '/images/aws-topology.jpg',
    metrics: [
      { label: 'Cost reduction', value: '38–46%' },
      { label: 'Monthly run rate', value: '$390 → $210–240' },
      { label: 'Availability', value: 'Health-checked, zero-downtime rollouts' },
    ],
  },
  {
    id: 'pos-kds',
    name: 'Offline-First POS & Kitchen Display',
    role: 'Full-Stack Engineer',
    category: 'Apps',
    tier: 'more',
    outcome: 'Cashiers keep selling when the internet drops; orders sync and reach the kitchen once it is back.',
    summary:
      'A point-of-sale and kitchen display system for food & beverage outlets, built to keep working without a connection.',
    problem:
      'Typical web POS systems freeze when the connection drops, losing open carts, table orders, and kitchen tickets.',
    solution:
      'Local-first storage on each device with background sync to PostgreSQL, plus real-time order status pushed to kitchen screens.',
    challenge:
      'Reconciling orders edited offline on several devices without duplicating or losing tickets once they reconnect.',
    architectureDetails: [
      'Local storage (SQLite / WatermelonDB) for carts, bills, and receipts while offline.',
      'Sync back to PostgreSQL on reconnect.',
      'Socket.io kitchen display with Queued → Preparing → Ready states.',
      'One Turborepo monorepo shipping web, desktop, and Android (Capacitor) builds.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'WatermelonDB', 'PostgreSQL', 'Socket.io', 'Capacitor'],
    status: 'Production',
  },
  {
    id: 'workflow-designer',
    name: 'Workflow Designer',
    role: 'Lead Frontend & Systems Architect',
    category: 'Apps',
    tier: 'more',
    outcome: 'Catches broken ticket-routing logic before it reaches the service desk, entirely in the browser.',
    summary:
      'A visual editor for IT service management workflows (e.g. Ivanti) that validates routing logic before deployment.',
    problem:
      'Service desk admins configure routing rules blind, which leads to dead ends, loops, and conflicting rules in production.',
    solution:
      'A graph editor that checks the workflow as you build it and reads and writes the whole project as a standardized Excel file.',
    challenge:
      'Detecting rule collisions across many condition dimensions (OR within a dimension, AND across them) in real time, with no server.',
    architectureDetails: [
      'Runs fully client-side: no backend, no database, no telemetry. Deploys to any static host or S3.',
      'Validation engine finds dead ends, unreachable states, rule collisions, and unlinked conditions.',
      'Condition matching with wildcard detection and an explicit tuple editor.',
      'Reads and writes a 20-sheet XLSX project file as the single source of truth.',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'React Flow', 'Dagre', 'XLSX'],
    status: 'Internal tool',
  },
  {
    id: 'scheduling-365',
    name: 'Microsoft 365 Room Scheduler',
    role: 'Backend & Integration Engineer',
    category: 'Integrations & Automation',
    tier: 'more',
    outcome: 'Room bookings and Outlook calendars stay in sync both ways, so rooms are never double-booked.',
    summary:
      'A multi-tenant meeting room booking backend integrated with Microsoft 365 calendars.',
    problem:
      'Room booking tools drift out of sync with Outlook, causing double bookings and manual coordination.',
    solution:
      'A NestJS backend that creates, updates, and cancels room mailbox events through Microsoft Graph, with per-company isolation.',
    architectureDetails: [
      'Bidirectional sync with Exchange/Outlook room mailboxes via Microsoft Graph.',
      'Multi-tenant company and room quota isolation with Prisma.',
      'Azure AD single sign-on with JWKS token validation.',
    ],
    techStack: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Microsoft Graph', 'Azure AD'],
    status: 'Production',
  },
  {
    id: 'anthos-helpdesk',
    name: 'WhatsApp AI Helpdesk',
    role: 'Automation & Integration Engineer',
    category: 'Integrations & Automation',
    tier: 'more',
    outcome: 'AI drafts the reply, a human approves it in Teams, and the customer gets it on WhatsApp.',
    summary:
      'A multi-tenant support pipeline connecting WhatsApp and webchat to Microsoft Teams, with AI-drafted replies and a human approval step.',
    problem:
      'Support messages from WhatsApp and webchat were answered manually without context, and agents were unsure who owned which ticket.',
    solution:
      'An n8n pipeline that normalizes incoming messages, deduplicates sessions, drafts a reply with AI, and posts it to Teams for an agent to approve before it is sent.',
    challenge:
      'Webhook providers retry aggressively. An idempotency check in PostgreSQL makes sure a retry storm never produces duplicate tickets or replies.',
    architectureDetails: [
      'Channel adapters for WhatsApp (Wablas) and Qiscus feeding one unified message schema.',
      'Idempotent session handling in PostgreSQL.',
      'AI draft plus a mandatory human approval gate in Teams Adaptive Cards.',
      'Replies routed back through the original channel.',
    ],
    techStack: ['n8n', 'TypeScript', 'PostgreSQL', 'Teams Adaptive Cards', 'Wablas API', 'Qiscus'],
    status: 'Production',
    imageUrl: '/images/n8n-workflow.jpg',
    metrics: [{ label: 'Unapproved AI replies', value: 'Zero' }],
  },
  {
    id: 'asset-audit',
    name: 'Asset Audit Scanner',
    role: 'Integration Engineer',
    category: 'Integrations & Automation',
    tier: 'more',
    outcome: 'Equipment audits went from clipboards and spreadsheets to scanning a QR code straight into SharePoint.',
    summary:
      'A browser-based QR scanner that updates SharePoint inventory lists in real time through Microsoft Graph.',
    problem:
      'Hardware audits were logged on paper and retyped into enterprise systems, taking days and introducing errors.',
    solution:
      'A web scanner with Azure AD sign-in that validates each scan and writes it directly to SharePoint.',
    architectureDetails: [
      'MSAL.js sign-in with silent token refresh against the company Azure AD tenant.',
      'Direct Microsoft Graph calls instead of spreadsheet imports.',
      'Schema validation so malformed serial numbers never reach the list.',
    ],
    techStack: ['React', 'TypeScript', 'MSAL.js', 'Microsoft Graph', 'SharePoint Online'],
    status: 'In daily use',
  },
  {
    id: 'mobile-expo',
    name: 'Android Apps with React Native',
    role: 'Mobile Engineer',
    category: 'Apps',
    tier: 'more',
    outcome: 'Native Android apps with camera scanning, offline caching, and clean release builds.',
    summary:
      'Android applications built with React Native and Expo, using device hardware such as the camera and secure storage.',
    problem:
      'Field apps need hardware access and offline data while still shipping fast and building reliably across many Android devices.',
    solution:
      'Expo Router for typed navigation, NativeWind for consistent styling, and EAS for repeatable APK/AAB builds.',
    architectureDetails: [
      'File-based routing with typed params, tabs, and modal stacks.',
      'Camera-based QR scanning for asset tracking.',
      'Local caching and secure token storage (expo-secure-store).',
      'Local and cloud (EAS) builds producing APK and AAB bundles.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Reanimated', 'EAS Build'],
    status: 'Production',
  },
  {
    id: 'self-hosted-lab',
    name: 'Self-Hosted Platform',
    role: 'Infrastructure Administrator',
    category: 'Cloud & Ops',
    tier: 'lab',
    outcome: 'My own small cloud: storage, SSO, databases, and container hosting for prototypes and side projects.',
    summary:
      'A self-hosted server setup I run for my own projects and for prototyping client work before it goes to the cloud.',
    problem: 'Paying for a SaaS tool per experiment gets expensive and locks projects into vendors.',
    solution:
      'Docker and Coolify on Ubuntu, behind a reverse proxy, with NAS storage, S3-compatible object storage, SSO, and automated offsite backups.',
    architectureDetails: [
      'Isolated Docker networks behind a reverse proxy with automatic SSL.',
      'NAS and S3-compatible object storage shared across apps.',
      'Single sign-on in front of internal services.',
      'Scheduled offsite backups with tested restores, plus health checks and alerts.',
    ],
    techStack: ['Docker', 'Coolify', 'Ubuntu Server', 'Nginx', 'PostgreSQL', 'NAS', 'S3-compatible', 'SSO'],
    status: 'Personal project',
  },
  {
    id: 'satuinti-ui',
    name: 'SatuInti UI',
    role: 'Design System Engineer',
    category: 'Apps',
    tier: 'lab',
    outcome: 'The component library behind my projects, including this site.',
    summary:
      'A design system with shared tokens, accessible primitives, and domain widgets for POS, healthcare, and finance screens.',
    problem: 'Each side project was restyling the same buttons, tables, and forms slightly differently.',
    solution: 'One token-based component library, published as @satuinti/ui and reused across apps.',
    architectureDetails: [
      'CSS custom property tokens extending the Tailwind config.',
      'Keyboard focus handling and WCAG AA contrast across interactive elements.',
      'Domain components such as POS product cards, patient cards, and metric trends.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Personal project',
    imageUrl: '/images/satuinti-ui-showcase.jpg',
  },
];
