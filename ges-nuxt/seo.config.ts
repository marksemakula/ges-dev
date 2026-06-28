/**
 * Central SEO configuration for Gombe Education Service.
 *
 * One source of truth for the production domain, per-route <title>/description,
 * the institution network (used for Organization > subOrganization JSON-LD),
 * and social profiles (used for Organization > sameAs JSON-LD).
 *
 * Titles: keep under ~60 chars, brand at the end.
 * Descriptions: 150-160 chars, action-oriented, primary keyword included.
 */

export const siteConfig = {
  url: 'https://ges.ac.ug',
  name: 'Gombe Education Service',
  description:
    'Gombe Education Service (GES) has delivered quality education in Uganda since 1995 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.',
  email: 'info@ges.ac.ug',
  telephone: '+256708700006',
}

export interface RouteSeo {
  title: string
  description: string
  breadcrumb?: string
  /** path under /public, e.g. '/logo.png' */
  ogImage?: string
}

export const defaultSeo: RouteSeo = {
  title: 'Gombe Education Service (GES) – Quality Education in Uganda',
  description: siteConfig.description,
}

export const routeSeo: Record<string, RouteSeo> = {
  '/': {
    title: 'Gombe Education Service (GES) – Schools in Uganda',
    description:
      'Gombe Education Service (GES) has delivered quality education in Uganda since 1995 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.',
    breadcrumb: 'Home',
  },
  '/about': {
    title: 'About Us – Gombe Education Service (GES)',
    description:
      'Discover Gombe Education Service (GES): our vision, mission and legacy of academic excellence across primary, secondary and vocational schools in Uganda.',
    breadcrumb: 'About Us',
  },
  '/leadership': {
    title: 'Leadership – Gombe Education Service',
    description:
      'Meet the leadership and management committee guiding Gombe Education Service (GES) and its network of schools across Uganda, driving excellence since 1995.',
    breadcrumb: 'Leadership',
  },
  '/blog': {
    title: 'News & Blog – Gombe Education Service',
    description:
      'Read the latest news, events and stories from Gombe Education Service (GES) and its schools: Gombe High School, Gombe Junior School, ScoobyDoo and JSBI.',
    breadcrumb: 'News & Blog',
  },
  '/partnerships': {
    title: 'Partnerships – Gombe Education Service',
    description:
      'Explore Gombe Education Service (GES) partnerships with local and global organisations advancing quality education and opportunity for students in Uganda.',
    breadcrumb: 'Partnerships',
  },
  '/ges-life': {
    title: 'GES Life – Student Life at Gombe Education Service',
    description:
      'Experience student life at Gombe Education Service (GES): campus activities, sports, clubs and culture across our schools in Uganda. See GES Life in pictures.',
    breadcrumb: 'GES Life',
  },
  '/mentorship': {
    title: 'Mentorship Programme – Gombe Education Service',
    description:
      'The Gombe Education Service (GES) mentorship programme connects students with mentors to build skills, character and career pathways across Uganda.',
    breadcrumb: 'Mentorship',
  },
  '/academic-calendar': {
    title: 'Academic Calendar – Gombe Education Service',
    description:
      'View the Gombe Education Service (GES) academic calendar: term dates, holidays and key events for Gombe High School, Gombe Junior School and partner schools.',
    breadcrumb: 'Academic Calendar',
  },
  '/international-pathway': {
    title: 'International Pathway – Gombe Education Service',
    description:
      'The Gombe Education Service (GES) International Pathway opens global study and university opportunities for students in Uganda. Explore programmes and admissions.',
    breadcrumb: 'International Pathway',
  },
  '/institutions/jsbi': {
    title: 'Jimmy Sekasi Business Institute (JSBI) – GES',
    description:
      'Jimmy Sekasi Business Institute (JSBI), part of Gombe Education Service, offers business and vocational training in Uganda. Explore courses, admissions and campus.',
    breadcrumb: 'Jimmy Sekasi Business Institute',
  },
}

/**
 * The GES institution network. Rendered into Organization > subOrganization
 * JSON-LD so Google associates every school name with GES. `alt` values feed
 * `alternateName` to catch common search variants.
 */
export interface Institution {
  name: string
  alt: string[]
  url: string
}

export const institutions: Institution[] = [
  {
    name: 'Jimmy Sekasi Business Institute',
    alt: ['JSBI', 'Jimmy Sekasi Business Institute Uganda'],
    url: 'https://www.gibst.ac.ug/',
  },
  {
    name: 'St. Andrew Kaggwa Gombe High School – Bujuuko',
    alt: ['SAKGHS Bujuuko', 'St. Andrew Kaggwa Gombe High School', 'Gombe High School'],
    url: 'https://sakghs-bujuuko.vercel.app/',
  },
  {
    name: 'St. Andrew Kaggwa Gombe High School – Kawaala',
    alt: ['SAKGHS Kawaala', 'St. Andrew Kaggwa Gombe High School', 'Gombe High School'],
    url: 'https://sakghs-kawaala.vercel.app/',
  },
  {
    name: 'Gombe Junior School – Kampala',
    alt: ['GJS Kampala', 'Gombe Junior School'],
    url: 'https://gjs-kikajjo.vercel.app/',
  },
  {
    name: 'Gombe Junior School – Gulu',
    alt: ['GJS Gulu', 'Gombe Junior School'],
    url: 'https://gjs-gulu.vercel.app/',
  },
  {
    name: 'ScoobyDoo International School Uganda – Kampala',
    alt: ['SISU Kampala', 'ScoobyDoo International School Uganda', 'Scoobydoo International School'],
    url: 'https://sisu-katale.vercel.app/',
  },
  {
    name: 'ScoobyDoo International School Uganda – Gulu',
    alt: ['SISU Gulu', 'ScoobyDoo International School Uganda', 'Scoobydoo International School'],
    url: 'https://sisu-gulu.vercel.app/',
  },
  {
    name: 'International Education Pathways Program',
    alt: ['IEPP', 'International Education Pathways'],
    url: 'https://ipp-vert.vercel.app/',
  },
]

/**
 * Official social profiles -> Organization > sameAs.
 * TODO(client): confirm/replace these with the real, live profile URLs.
 */
export const socials: string[] = [
  'https://www.linkedin.com/company/ges',
  'https://www.facebook.com/share/18cQvvPYgX/',
  'https://x.com/ges',
  'https://www.instagram.com/ges',
  'https://www.youtube.com/@ges',
  'https://www.tiktok.com/@ges',
]
