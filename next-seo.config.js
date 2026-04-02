const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://luisrojascr.netlify.app';

const canonicalUrl = siteUrl.replace(/\/$/, '');
const metaDescription =
  'Luis Rojas — software engineer focused on frontend, React, and Next.js. Portfolio, projects, and technical writing.';
const metaImage =
  'https://media.licdn.com/dms/image/v2/D4E16AQHP84NqC8sOFQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1719352032180?e=1753920000&v=beta&t=jG5cFLpeuRKUvpz364Zs8UIZ_-jACeyc_Z0i1YDtwrg';

const defaultSEOConfig = {
  defaultTitle: 'Luis Rojas — Software engineer & frontend developer',
  description: metaDescription,
  canonical: canonicalUrl,
  additionalMetaTags: [
    {
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  ],
  openGraph: {
    url: canonicalUrl,
    title: 'Luis Rojas — Software engineer & frontend developer',
    description: metaDescription,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: metaImage,
        alt: 'Luis Rojas — banner image',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'Luis Rojas',
  },
  twitter: {
    handle: '@luisrojascr',
    site: '@luisrojascr',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
