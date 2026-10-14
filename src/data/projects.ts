
export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

const ghlStats: AppStat[] = [
  { value: 'CRM', label: 'Lead management' },
  { value: 'Demo', label: 'Sample workflow' },
  { value: 'GHL', label: 'Platform focus' },
]

const healthcareStats: AppStat[] = [
  { value: 'Admin', label: 'Office support' },
  { value: 'Demo', label: 'Sample workflow' },
  { value: 'Care', label: 'Patient coordination' },
]

export const mobileApps: MobileApp[] = [
  {
    name: 'Lead Follow-Up Workflow',
    tagline: 'Organized lead management with GoHighLevel',
    description:
      'A demonstration concept for organizing new leads, tracking pipeline stages, and planning follow-up tasks in GoHighLevel. This is a sample project, not a completed client implementation.',
    accentColor: '#2563EB',
    stats: ghlStats,
    badge: 'Demo Project',
  },
  {
    name: 'Appointment Coordination',
    tagline: 'A sample healthcare scheduling process',
    description:
      'A sample workflow showing how appointment requests, scheduling tasks, and follow-up reminders can be organized for a healthcare team. No real patient information is used.',
    accentColor: '#7C3AED',
    stats: healthcareStats,
    badge: 'Demo Project',
  },
  {
    name: 'Administrative Task Tracker',
    tagline: 'A more organized virtual assistant workflow',
    description:
      'A demonstration concept for organizing recurring tasks, tracking pending requests, and planning administrative follow-ups.',
    accentColor: '#16A34A',
    stats: [
      { value: 'Tasks', label: 'Organization' },
      { value: 'Demo', label: 'Sample workflow' },
      { value: 'VA', label: 'Admin support' },
    ],
    badge: 'Demo Project',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'CRM Pipeline Setup',
    tagline: 'Keep contacts and opportunities organized',
    description:
      'A sample GoHighLevel CRM concept illustrating contact organization, pipeline stages, and a consistent lead follow-up process.',
    accentColor: '#0EA5E9',
    stats: ghlStats,
    badge: 'Demo Project',
  },
  {
    name: 'Lead Capture Funnel',
    tagline: 'A sample inquiry-to-follow-up journey',
    description:
      'A demonstration concept for a landing page that collects inquiries and organizes follow-up steps for a business.',
    accentColor: '#EF4444',
    stats: [
      { value: 'Leads', label: 'Inquiry capture' },
      { value: 'Demo', label: 'Sample funnel' },
      { value: 'CRM', label: 'Contact organization' },
    ],
    badge: 'Demo Project',
  },
  {
    name: 'Healthcare Appointment Support',
    tagline: 'A sample appointment coordination workflow',
    description:
      'A concept for organizing appointment requests, reminders, and administrative follow-ups. It uses no real patient records and does not represent a live healthcare system.',
    accentColor: '#0891B2',
    stats: healthcareStats,
    badge: 'Demo Project',
  },
  {
    name: 'Virtual Assistant Operations',
    tagline: 'Simple systems for everyday business tasks',
    description:
      'A sample workflow for tracking assigned tasks, organizing priorities, and keeping administrative requests moving.',
    accentColor: '#F59E0B',
    stats: [
      { value: 'Tasks', label: 'Task tracking' },
      { value: 'Demo', label: 'Sample workflow' },
      { value: 'Ops', label: 'Business support' },
    ],
    badge: 'Demo Project',
  },
]
