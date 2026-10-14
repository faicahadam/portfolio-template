
/**
 * Personal profile for GoHighLevel, SEO, Digital Marketing,
 * Website Development, and Healthcare Administrative Support.
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
  name: 'Faicah Julianne Adam',
  firstName: 'Faicah',
  handle: '@faicahadam',
  role: 'GoHighLevel Specialist | SEO Expert | Virtual Assistant',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'GoHighLevel Specialist',
  email: 'faicahadam@gmail.com',
  location: 'Philippines | GMT+8',

  stats: [
    { value: 'GHL', label: 'CRM & Automation', Icon: Briefcase },
    { value: 'SEO', label: 'Website Optimization', Icon: SealCheck },
    { value: 'Healthcare', label: 'Admin Support', Icon: Clock },
  ],

  displayName: {
    line1: 'Smart systems.',
    line2: 'Better results.',
  },

  hero: {
    body:
      'I help businesses streamline their CRM, build sales funnels, manage marketing automation, improve website SEO, and handle administrative tasks. I also bring experience in healthcare scheduling and insurance verification.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Faicah Julianne Adam profile photo placeholder',
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
