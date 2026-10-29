export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Short call',
    description: 'We talk through the problem, what you already have, and what "done" looks like. Async by message works too.',
  },
  {
    title: 'Written scope',
    description: 'You get a short document with what I will build, what I will not, the timeline, and a fixed or capped estimate.',
  },
  {
    title: 'Weekly demos',
    description: 'Every week you see working software, not status reports. GMT+7 means you often wake up to progress.',
  },
  {
    title: 'Handover',
    description: 'Code, credentials, and a runbook written the way I write SOPs at my day job, plus two weeks of support after launch.',
  },
];
