const canonicalUrl = 'https://luisrojascr.netlify.app';
const metaImage = 'https://media.licdn.com/dms/image/v2/D4E16AQHP84NqC8sOFQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1719352032180?e=1753920000&v=beta&t=jG5cFLpeuRKUvpz364Zs8UIZ_-jACeyc_Z0i1YDtwrg';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Luis Rojas - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Luis Rojas - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'luisrojascr.netlify.app og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'luisrojascr.netlify.app og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'luisrojascr.netlify.app og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'luisrojascr.netlify.app',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
