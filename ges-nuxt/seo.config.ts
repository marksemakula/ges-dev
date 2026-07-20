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
    title: 'Gombe Institute of Business Science & Technology (GIBST) – GES',
    description:
      'Gombe Institute of Business Science & Technology (GIBST), part of Gombe Education Service, offers business and vocational training in Uganda. Explore courses, admissions and campus.',
    breadcrumb: 'Gombe Institute of Business Science & Technology (GIBST)',
  },
}

/**
 * The GES institution network. Rendered into Organization > subOrganization
 * JSON-LD so Google associates every school name with GES. `alt` values feed
 * `alternateName` to catch common search variants.
 *
 * `path` is the institution's landing page ON ges.ac.ug (required for Google
 * to surface institutions as sitelinks under the GES result — sitelinks only
 * ever show same-domain pages). `externalUrl` is the school's own site,
 * exposed as schema.org `sameAs` and linked from the landing page.
 */
export interface Institution {
  slug: string
  name: string
  alt: string[]
  /** Internal landing page path on ges.ac.ug */
  path: string
  /** The institution's own website */
  externalUrl: string
  type: string
  description: string
  logo: string
  image: string
}

export const institutions: Institution[] = [
  {
    slug: 'jsbi',
    name: 'Gombe Institute of Business Science & Technology (GIBST)',
    alt: ['GIBST', 'Gombe Institute of Business Science & Technology Uganda'],
    path: '/institutions/jsbi',
    externalUrl: 'https://www.gibst.ac.ug/',
    type: 'Vocational Institute',
    description:
      'Gombe Institute of Business Science & Technology (GIBST) equips students with practical business, vocational and hands-on skills for the modern workplace, as part of the Gombe Education Service network.',
    logo: '/images/Jimmy Ssekasi Business Institute Logo.png',
    image: '/images/JIMMY SEKASI.JPG',
  },
  {
    slug: 'sakghs-bujuuko',
    name: 'St. Andrew Kaggwa Gombe High School – Bujuuko',
    alt: ['SAKGHS Bujuuko', 'St. Andrew Kaggwa Gombe High School', 'Gombe High School'],
    path: '/institutions/sakghs-bujuuko',
    externalUrl: 'https://bujuuko.gombehighschool.ac.ug/',
    type: 'Secondary School',
    description:
      'St. Andrew Kaggwa Gombe High School – Bujuuko is a secondary school in the Gombe Education Service network, nurturing tomorrow\'s leaders through quality education, character formation and academic excellence.',
    logo: '/images/Gombe High logo.png',
    image: '/images/Gombe High School - Bujuuko.png',
  },
  {
    slug: 'sakghs-kawaala',
    name: 'St. Andrew Kaggwa Gombe High School – Kawaala',
    alt: ['SAKGHS Kawaala', 'St. Andrew Kaggwa Gombe High School', 'Gombe High School'],
    path: '/institutions/sakghs-kawaala',
    externalUrl: 'https://kawaala.gombehighschool.ac.ug/',
    type: 'Secondary School',
    description:
      'St. Andrew Kaggwa Gombe High School – Kawaala offers advanced secondary education in Kampala with a focus on academic excellence, as part of the Gombe Education Service network.',
    logo: '/images/Gombe High logo.png',
    image: '/images/IMG_9718.JPG',
  },
  {
    slug: 'gjs-kampala',
    name: 'Gombe Junior School – Kampala',
    alt: ['GJS Kampala', 'Gombe Junior School'],
    path: '/institutions/gjs-kampala',
    externalUrl: 'https://kikajjo.gombejuniorschool.ac.ug/',
    type: 'UNEB Licensed Primary School',
    description:
      'Gombe Junior School – Kampala is a UNEB licensed primary school in the Gombe Education Service network, building strong foundations for lifelong learning.',
    logo: '/images/Gombe Junior School logo.png',
    image: '/images/GJS - Kampala.JPG',
  },
  {
    slug: 'gjs-gulu',
    name: 'Gombe Junior School – Gulu',
    alt: ['GJS Gulu', 'Gombe Junior School'],
    path: '/institutions/gjs-gulu',
    externalUrl: 'https://gulu.gombejuniorschool.ac.ug/',
    type: 'UNEB Licensed Primary School',
    description:
      'Gombe Junior School – Gulu extends the Gombe Education Service tradition of foundational education excellence to Northern Uganda as a UNEB licensed primary school.',
    logo: '/images/Gombe Junior School logo.png',
    image: '/images/GJS Gulu class.jpeg',
  },
  {
    slug: 'sisu-kampala',
    name: 'ScoobyDoo International School Uganda – Kampala',
    alt: ['SISU Kampala', 'ScoobyDoo International School Uganda', 'Scoobydoo International School'],
    path: '/institutions/sisu-kampala',
    externalUrl: 'https://katale.scoobydoointernational.ac.ug/',
    type: 'International School',
    description:
      'ScoobyDoo International School Uganda – Kampala delivers an international curriculum preparing students for global success, as part of the Gombe Education Service network.',
    logo: '/images/scooby-logo.png',
    image: '/images/26-08-2015-12-55-02_1.jpg',
  },
  {
    slug: 'sisu-gulu',
    name: 'ScoobyDoo International School Uganda – Gulu',
    alt: ['SISU Gulu', 'ScoobyDoo International School Uganda', 'Scoobydoo International School'],
    path: '/institutions/sisu-gulu',
    externalUrl: 'https://gulu.scoobydoointernational.ac.ug/',
    type: 'International School',
    description:
      'ScoobyDoo International School Uganda – Gulu brings international education to Northern Uganda, as part of the Gombe Education Service network.',
    logo: '/images/scooby-logo.png',
    image: '/images/26-08-2015-01-12-29_IMG_3773.jpg',
  },
  {
    slug: 'iepp',
    name: 'International Education Pathways Program',
    alt: ['IEPP', 'International Education Pathways'],
    path: '/international-pathway',
    externalUrl: 'https://ipp.ges.ac.ug/',
    type: 'International Programme',
    description:
      'The International Education Pathways Program (IEPP) opens global study and university opportunities for students across the Gombe Education Service network.',
    logo: '/logo.png',
    image: '/images/ieppheader.png',
  },
]

// Per-institution landing page meta. jsbi and the IEPP page already have
// hand-written routeSeo entries above / their own pages, so only fill gaps.
for (const inst of institutions) {
  if (!routeSeo[inst.path]) {
    routeSeo[inst.path] = {
      title: `${inst.name} – GES`,
      description: inst.description,
      breadcrumb: inst.name,
      ogImage: inst.image,
    }
  }
}

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
