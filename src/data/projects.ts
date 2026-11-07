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
  /** More screenshots, shown on the project page below the main visual. */
  gallery?: string[];
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
      'An exam must never be lost to a browser refresh or a weak connection. The exam app saves answers as the student goes, keeps the timer correct after a reload, and controls how students move between questions, so a session always resumes exactly where it stopped.',
    architectureDetails: [
      'Exam app that saves answers as students go, keeps the timer accurate after a refresh, and controls how students move between questions.',
      'Authoring tool for building tests such as DASS-42, RIASEC, and cognitive potential tests, and for scheduling groups of tests.',
      'University dashboard with score distributions per cohort, percentile rankings, and exports.',
      'One login for everything, supporting Firebase, Microsoft work accounts, and campus (ITB) accounts.',
      'Shared design system with light and dark themes and Indonesian/English language switching.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'Vite', 'Azure AD', 'Firebase Auth'],
    status: 'Production',
    imageUrl: '/images/aposis-test.png',
    sketch: [
      { label: 'Users', items: ['Students', 'Admins', 'Campus leadership'] },
      { label: 'Apps', items: ['Exam app', 'Test authoring', 'University dashboard'] },
      { label: 'Shared', items: ['One login', 'Design system', 'ID / EN languages'] },
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
      'Many clinics still run old Windows 7 and 8 computers. I ship two desktop versions from one codebase: a modern one for current machines, and a lightweight one for legacy hardware that also prints barcode labels silently.',
    architectureDetails: [
      'A small background program that listens to lab analyzers over serial cable or network, and starts automatically on Windows and macOS.',
      'Reads the standard healthcare data formats (ASTM and HL7), checks each message for corruption, and turns it into clean structured results.',
      'Two desktop versions: a modern one for current computers and a lightweight one for older clinic PCs.',
      'Silent barcode label printing to USB and network printers.',
      'Records are structured for Indonesia’s SATUSEHAT health data integration.',
    ],
    techStack: ['Go', 'Tauri v2', 'Rust', 'Electron', 'React', 'TypeScript', 'RS-232', 'ASTM', 'HL7'],
    status: 'In daily use',
    imageUrl: '/images/amarylis-lab.png',
    sketch: [
      { label: 'Hardware', items: ['Analyzer (cable)', 'Analyzer (network)', 'Barcode printer'] },
      { label: 'Listener', items: ['Background service', 'Data reader', 'Error check'] },
      { label: 'Desktop', items: ['Modern PCs', 'Older PCs', 'Lab records'] },
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
    outcome: 'A leaner monthly AWS bill, with production still highly available and changes rolled out without downtime.',
    summary:
      'Audit and restructuring of a production AWS environment across compute, database, networking, and storage.',
    problem:
      'Costs had crept up month after month through oversized containers and databases, idle capacity, and storage nobody was cleaning up.',
    solution:
      'Measured real usage in CloudWatch, right-sized ECS tasks and RDS instances, tidied up load balancer routing, and automated cleanup of old snapshots and storage.',
    challenge:
      'Spending less usually means less redundancy. The goal was to cut cost without giving up availability: every downsize was based on measured processor, memory, and disk headroom, and rolled out gradually behind health checks so changes went live without downtime.',
    architectureDetails: [
      'Resized servers and containers to match real usage measured by monitoring.',
      'Downsized an oversized database and tuned how the apps connect to it.',
      'Simplified traffic routing through the load balancer, with health checks and gradual updates.',
      'Automatic cleanup of old storage files and forgotten backups.',
      'A small internal dashboard to watch resource use and budget.',
    ],
    techStack: ['AWS ECS', 'EC2', 'ALB', 'RDS PostgreSQL', 'S3', 'CloudFront', 'CloudWatch', 'IAM', 'Docker'],
    status: 'Production',
    imageUrl: '/images/aws-topology.jpg',
    metrics: [
      { label: 'Result in this engagement', value: 'Up to 30% lower bill' },
      { label: 'Availability', value: 'Health-checked, zero-downtime rollouts' },
    ],
  },
  {
    id: 'jejak-asset-manager',
    name: 'Jejak: IT Asset Manager',
    role: 'Product Owner & Full-Stack Engineer (AI-assisted)',
    category: 'Apps',
    tier: 'more',
    outcome: 'One register for every IT device across business units, with a history that can never be rewritten.',
    summary:
      'An internal IT asset register that keeps the full life of each device: who held it, what changed, what was serviced, and which documents back it up.',
    problem:
      'Asset records lived in scattered spreadsheets, so audits and handovers relied on data anyone could edit without a trace.',
    solution:
      'A multi-unit web app where every change is an appended event, with QR labels, handover documents, preventive maintenance, and physical audits in one place.',
    challenge:
      'Trust. An audit is only useful if nobody can quietly change the past. Jejak never overwrites a record: every change is added as a new entry, and a mistake is fixed by adding a correction that points to the original. Each business unit is also walled off twice, once in the app and once in the database, so one unit can never see another unit’s data.',
    architectureDetails: [
      'Every device has a page with its full history: who had it, where it moved, what was repaired, and which documents go with it.',
      'Staff scan a QR sticker on any device with their phone to open its record instantly.',
      'Handover forms and maintenance reports are generated as ready-to-print PDFs.',
      'Preventive maintenance is planned in campaigns, with checklists, photos, and overdue work flagged on the home screen.',
      'Physical audits: staff walk the floor, scan each device, and mark it found, in the wrong place, or missing.',
      'Each company or unit only sees its own devices, while managers can see across all units.',
      'Installs on a company’s own server with one command, and sets up its own database and first admin account.',
    ],
    techStack: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'Bun', 'Elysia', 'Drizzle ORM', 'PostgreSQL 16', 'S3', 'Docker Compose'],
    status: 'Internal tool',
    imageUrl: '/images/jejak-dashboard.png',
    gallery: ['/images/jejak-asset-history.png', '/images/jejak-documents.png'],
    sketch: [
      { label: 'People', items: ['IT staff', 'Technicians', 'QR scan on phone'] },
      { label: 'The app', items: ['Web app', 'Secure back end', 'PDF documents'] },
      { label: 'Stored safely', items: ['Records database', 'Scanned files', 'History that never changes'] },
    ],
    metrics: [
      { label: 'Device history', value: 'Cannot be edited' },
      { label: 'Each unit’s data', value: 'Kept separate' },
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
      'Merging orders edited offline on several devices without duplicating or losing tickets once they reconnect.',
    architectureDetails: [
      'Each device stores carts, bills, and receipts locally, so selling continues without internet.',
      'Data syncs to the central database as soon as the connection returns.',
      'The kitchen screen updates live as an order moves from Queued to Preparing to Ready.',
      'One codebase produces the web, desktop, and Android versions.',
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
      'Spotting conflicting routing rules across many conditions in real time, with no server doing the work.',
    architectureDetails: [
      'Runs entirely in the browser: no server, no database, no tracking. It can be hosted anywhere.',
      'Checks for dead ends, unreachable states, conflicting rules, and unlinked conditions as you build.',
      'Handles “any value” conditions and lets you edit exact combinations in a table.',
      'Saves and loads the whole project as one Excel file with 20 sheets.',
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
      'Two-way sync with Outlook room calendars, so bookings made in either place show up in both.',
      'Each company and its rooms are kept separate, with its own room limits.',
      'Single sign-on with Microsoft work accounts.',
    ],
    techStack: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Microsoft Graph', 'Azure AD'],
    status: 'Production',
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
      'Screens and navigation organized by file, with tabs and pop-up flows.',
      'Camera scanning of QR codes for asset tracking.',
      'Data cached on the device, with login tokens stored securely.',
      'Builds both locally and in the cloud, producing installable Android files.',
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
      'Each app runs in its own isolated container behind a single entry point with automatic HTTPS.',
      'Shared file storage on a home NAS and S3-compatible object storage.',
      'One login protects all internal services.',
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
      'Shared colors, spacing, and fonts defined once and reused everywhere.',
      'Keyboard-friendly focus and text contrast that meets WCAG AA.',
      'Ready-made pieces for POS, healthcare, and finance screens, such as product cards, patient cards, and trend charts.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Personal project',
    imageUrl: '/images/satuinti-ui-showcase.jpg',
  },
];
