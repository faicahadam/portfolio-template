
/**
 * Personal profile for GoHighLevel and Healthcare Virtual Assistance.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'J. Carlo Ang',
  firstName: 'Carlo',
  handle: '@jcarloang',
  role: 'GoHighLevel Specialist & Healthcare VA',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Virtual Assistant',
  email: 'YOUR_EMAIL@example.com',
  location: 'Philippines | GMT+8',

  stats: [
    { value: 'GHL', label: 'CRM Support', Icon: Briefcase },
    { value: 'Healthcare', label: 'VA Experience', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],

  displayName: {
    line1: 'Better systems.',
    line2: 'Reliable support.',
  },

  hero: {
    body:
      'I help businesses manage CRM workflows, appointment scheduling, patient coordination, and everyday administrative tasks.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Profile photo placeholder',
  },

  socials: [
    {
      label: 'Facebook profile',
      href: '#',
      iconPath: '/icons/facebook.svg',
    },
    {
      label: 'LinkedIn profile',
      href: '#',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
