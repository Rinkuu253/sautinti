export interface RoadmapItem {
  id: string;
  stage: 'Active R&D' | 'Planned Architecture' | 'Exploration';
  title: string;
  focus: string;
  description: string;
  keyChallenge: string;
  targetStack: string[];
}

export const roadmap: RoadmapItem[] = [
  {
    id: 'cloud-anomaly-detection',
    stage: 'Active R&D',
    title: 'Automated Cloud Cost & Spike Anomaly Alerting',
    focus: 'AWS FinOps & Observability',
    description: 'Engineering proactive alerting bots that detect abnormal ECS task restarts, unexpected ALB 5xx spikes, or AWS billing run-rate shifts in real time.',
    keyChallenge: 'Filtering transient traffic spikes from genuine cost runaway conditions without creating alert fatigue for on-call engineers.',
    targetStack: ['AWS CloudWatch Metrics', 'AWS Cost Anomaly Detection', 'Lambda', 'Telegram / Teams Webhooks']
  },
  {
    id: 'mcp-integration-hub',
    stage: 'Active R&D',
    title: 'Model Context Protocol (MCP) Infrastructure Integration',
    focus: 'AI Automation & Tool Calling',
    description: 'Constructing dedicated MCP servers that securely expose internal infrastructure telemetry, database inspection, and deployment logs to authorized AI agents.',
    keyChallenge: 'Implementing strict capability boundaries and audit logs so AI agents can query infrastructure state without risking destructive commands.',
    targetStack: ['Model Context Protocol (MCP)', 'TypeScript', 'Docker', 'OAuth2']
  },
  {
    id: 'multi-tenant-gateway',
    stage: 'Planned Architecture',
    title: 'Isolated Multi-Tenant WhatsApp Webhook Broker',
    focus: 'Enterprise Support Pipelines',
    description: 'A resilient queue gateway buffering inbound and outbound messages across separate customer tenants with rate-limit protection and fair queueing.',
    keyChallenge: 'Preventing one client tenant from monopolizing outbound message throughput during bulk promotional or notification blasts.',
    targetStack: ['Redis BullMQ', 'Fastify / Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'self-healing-infra',
    stage: 'Exploration',
    title: 'Self-Healing Automated Disaster Recovery Drills',
    focus: 'Self-Hosted Infrastructure',
    description: 'An automated testing harness that spins up temporary staging containers, restores the latest offsite database backup, validates table integrity, and tears down safely.',
    keyChallenge: 'Validating real application functionality against restored data without exposing production credentials or saturating storage IO.',
    targetStack: ['Bash', 'Docker Compose', 'Postgres pg_dump', 'Cron']
  }
];
