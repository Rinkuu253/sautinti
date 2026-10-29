export interface ProfileData {
  name: string;
  alias: string;
  title: string;
  subheadline: string;
  bio: string[];
  location: string;
  timezone: string;
  availability: string;
  responseTime: string;
  /** Path under /public. Leave empty to show initials instead. */
  photo: string;
  links: {
    linkedin: string;
    /** Leave empty to hide the Upwork button. */
    upwork: string;
    email: string;
    whatsapp: string;
    phoneFormatted: string;
  };
  proof: {
    value: string;
    label: string;
    note: string;
  }[];
  /** Add `url` (e.g. a Credly badge) to make the chip a verification link. */
  certifications: { name: string; issuer: string; url?: string }[];
}

export const profile: ProfileData = {
  name: 'Matthew Marvelino',
  alias: 'Anthos',
  title: 'Systems & Full-Stack Engineer',
  subheadline:
    'Cloud infrastructure, integrations, and apps that keep working offline or talk to lab hardware. By day I run IT operations, so what I hand over comes with documentation, not just code.',
  bio: [
    'My day job is IT operations: I write and maintain SOPs, run and optimize the company AWS environment, and handle support when things break. It taught me that most systems fail after launch, not before it.',
    'That work also covers the layer underneath the apps: office networks on MikroTik and Cisco, security hardening, and the laptops and PCs people actually work on. I hold the AWS Certified Cloud Practitioner and MikroTik MTCNA certifications.',
    'Outside of that I build products end to end. Qompeten, a psychometric exam platform, has more than a thousand registered users across its exam app, CMS, and university dashboard. Amarylis, a laboratory information system, reads results directly from analyzers in clinic labs.',
    'I also run my own platform at home: NAS storage, S3-compatible object storage, single sign-on, databases, and container hosting. New client projects usually start there as working prototypes before anything is deployed to the cloud.',
  ],
  location: 'Indonesia',
  timezone: 'GMT+7',
  availability: 'Available for freelance projects',
  responseTime: 'Replies within 24 hours',
  photo: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/matthew-marvelino-b60405332/',
    upwork: '',
    email: 'matthew.212523@gmail.com',
    whatsapp: 'https://wa.me/6287880324362',
    phoneFormatted: '+62 878 8032 4362',
  },
  proof: [
    { value: '1,000+', label: 'registered users', note: 'on Qompeten, the exam platform I lead' },
    { value: 'In labs', label: 'daily clinical use', note: 'Amarylis reads results straight from analyzers' },
    { value: '38–46%', label: 'AWS bill reduced', note: 'from ~$390 to $210–240 per month' },
    { value: 'IT Ops', label: 'day job', note: 'SOPs, AWS operations, and support' },
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
    { name: 'MTCNA', issuer: 'MikroTik', url: 'https://mikrotik.com/training/certificates/c513689c237d612e6ecd' },
  ],
};
