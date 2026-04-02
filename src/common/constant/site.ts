/**
 * Canonical origin for SEO (Open Graph, JSON-LD, sitemap).
 * Set NEXT_PUBLIC_SITE_URL or SITE_URL to your production URL (no trailing slash).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://luisrojascr.netlify.app'
).replace(/\/$/, '');

export const DEFAULT_META_DESCRIPTION =
  'Luis Rojas — software engineer focused on frontend, React, and Next.js. Portfolio, projects, and technical writing.';

export const SITE_NAME = 'Luis Rojas';

export const SOCIAL_PROFILE_URLS: string[] = [
  'https://github.com/luisrojascr',
  'https://www.linkedin.com/in/luisrojascr',
  'https://twitter.com/luisrojascr',
  'https://instagram.com/luisrojascr',
];

export const DEFAULT_OG_IMAGE =
  'https://media.licdn.com/dms/image/v2/D4E16AQHP84NqC8sOFQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1719352032180?e=1753920000&v=beta&t=jG5cFLpeuRKUvpz364Zs8UIZ_-jACeyc_Z0i1YDtwrg';

/** Absolute URL for Open Graph / JSON-LD (handles site-relative paths). */
export function absoluteUrl(
  pathOrUrl: string | undefined,
  fallbackPath = '/images/placeholder.png',
) {
  const raw = pathOrUrl?.trim() || fallbackPath;
  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw;
  }
  return `${SITE_URL}${raw.startsWith('/') ? '' : '/'}${raw}`;
}
