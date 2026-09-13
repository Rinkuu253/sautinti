export interface ProfileData {
  name: string;
  alias: string;
  title: string;
  focus: string;
  motto: string;
  headline: string;
  bio: string[];
  location: string;
  status: string;
  links: {
    linkedin: string;
    email: string;
    phone: string;
    phoneFormatted: string;
  };
  metrics: {
    label: string;
    value: string;
    note: string;
  }[];
}

export const profile: ProfileData = {
  name: 'Matthew Marvelino',
  alias: 'Anthos',
  title: 'IT Infrastructure & Cloud Engineer',
  focus: 'Automation & System Integration',
  motto: 'Turning ideas into working systems.',
  headline: 'I build infrastructure, applications, and automations that solve everyday problems.',
  bio: [
    'Specializes in AWS cloud operations, infrastructure cost reduction, and automated service integration. Experienced in diagnosing issues from container configurations and networks down to runtime application behavior.',
    'Proven track record optimizing AWS cloud footprints (cutting monthly bills by 38% to 46%), designing human-in-the-loop WhatsApp AI helpdesk pipelines, and managing self-hosted infrastructure labs.'
  ],
  location: 'Indonesia (Remote)',
  status: 'Open for Cloud Infrastructure & Automation roles',
  links: {
    linkedin: 'https://www.linkedin.com/in/matthew-marvelino-b60405332/',
    email: 'matthew.212523@gmail.com',
    phone: '+6287880324362',
    phoneFormatted: '+62 878 8032 4362',
  },
  metrics: [
    { label: 'AWS FinOps', value: '38% to 46% Cut', note: 'Reduced AWS costs from ~USD 390 to USD 210-240/mo' },
    { label: 'Primary Cloud', value: 'AWS Architecture', note: 'ECS, EC2, ALB, RDS, S3, IAM, CloudFront, WAF' },
    { label: 'Automation', value: 'Event Pipelines', note: 'n8n self-hosted, Power Automate, Webhook queues' },
    { label: 'App & Systems', value: 'React + Node + SQL', note: 'SatuInti UI, NestJS, PostgreSQL, SQLite' },
  ]
};
