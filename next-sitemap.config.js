const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://luisrojascr.netlify.app'
).replace(/\/$/, '');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: [
    '/dashboard',
    '/dashboard/',
    '/es/dashboard',
    '/es/dashboard/',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: '*',
        disallow: ['/api/', '/dashboard', '/es/dashboard'],
      },
    ],
  },
};
