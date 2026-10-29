export interface Service {
  id: string;
  title: string;
  pitch: string;
  goodFitIf: string[];
  youGet: string[];
  timeline: string;
  /** Optional starting price, e.g. 'From $400'. Leave empty to hide. */
  price: string;
  relatedProjectIds: string[];
}

export const services: Service[] = [
  {
    id: 'cloud-audit',
    title: 'AWS cost & availability audit',
    pitch: 'Find out where your cloud money goes and cut what you do not need, without risking production.',
    goodFitIf: [
      'Your AWS bill keeps growing and nobody is sure why',
      'You run ECS, EC2, or RDS set up "temporarily" a year ago',
    ],
    youGet: [
      'A written report with findings ranked by savings and risk',
      'Right-sizing and cleanup applied together with your team',
      'Budgets and alerts so the bill does not creep back',
      'High-availability setup without paying for capacity you do not use',
    ],
    timeline: '1–2 weeks',
    price: '',
    relatedProjectIds: ['aws-finops'],
  },
  {
    id: 'integrations',
    title: 'Integrations & automation',
    pitch: 'Connect the tools you already pay for so data stops being copied by hand.',
    goodFitIf: [
      'You use Microsoft 365, WhatsApp, or a SaaS with an API',
      'Someone on your team spends hours moving data between systems',
    ],
    youGet: [
      'Microsoft Graph, SharePoint, and Outlook calendar integrations',
      'WhatsApp and helpdesk pipelines, with AI and human review where it helps',
      'Single sign-on across your internal apps',
    ],
    timeline: '1–4 weeks',
    price: '',
    relatedProjectIds: ['scheduling-365', 'anthos-helpdesk', 'asset-audit'],
  },
  {
    id: 'custom-apps',
    title: 'Custom business apps',
    pitch: 'Web, desktop, or Android apps for the jobs off-the-shelf software does not fit.',
    goodFitIf: [
      'You need it to work offline, or on old hardware',
      'It has to talk to devices: scanners, printers, lab or serial equipment',
    ],
    youGet: [
      'A working app from a shared monorepo: web, desktop, and Android',
      'Offline-first data with sync, when the network is unreliable',
      'Source code, deployment, and documentation you own',
    ],
    timeline: '4–12 weeks',
    price: '',
    relatedProjectIds: ['qompeten-aposis', 'amarylis-lis', 'pos-kds', 'mobile-expo'],
  },
  {
    id: 'ops-retainer',
    title: 'IT consulting & ongoing ops',
    pitch: 'A part-time IT person for teams without one: advice, networks, security basics, and keeping things running.',
    goodFitIf: [
      'You have no in-house IT, or your previous developer left and nothing is written down',
      'You want a second opinion before buying software, cloud, or network gear',
    ],
    youGet: [
      'Network setup and review on MikroTik and Cisco (MTCNA certified)',
      'Security hardening: access control, backups, and patching',
      'Monitoring, runbooks, and SOPs your team can follow without me',
      'On-site laptop, PC, and network support for clients in Indonesia',
    ],
    timeline: 'Hourly or monthly',
    price: '',
    relatedProjectIds: ['self-hosted-lab'],
  },
];
