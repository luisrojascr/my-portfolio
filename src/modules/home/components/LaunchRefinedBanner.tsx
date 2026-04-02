import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiArrowRight } from 'react-icons/fi';

const LaunchRefinedBanner = () => {
  const { t } = useTranslation('home');

  return (
    <aside className='mb-8'>
      <Link
        href='/launch-refined'
        data-umami-event='Home: Launch refined banner'
        className='group flex flex-col gap-3 rounded-2xl border border-teal-200/80 bg-gradient-to-r from-teal-50/90 to-neutral-50 px-4 py-4 transition-all duration-300 hover:border-teal-300 hover:shadow-sm dark:border-teal-900/60 dark:from-teal-950/40 dark:to-neutral-900/40 dark:hover:border-teal-800 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5'
      >
        <p className='text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-[15px]'>
          {t('launchRefinedBanner.message')}
        </p>
        <span className='inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-800 transition-colors group-hover:text-teal-900 dark:text-teal-300 dark:group-hover:text-teal-200'>
          {t('launchRefinedBanner.cta')}
          <FiArrowRight
            size={18}
            className='transition-transform duration-300 group-hover:translate-x-0.5'
            aria-hidden
          />
        </span>
      </Link>
    </aside>
  );
};

export default LaunchRefinedBanner;
