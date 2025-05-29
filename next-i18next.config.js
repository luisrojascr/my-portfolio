module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: false,
  },
  fallbackLng: {
    default: ['en'],
  },
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
