import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { HiGlobeAlt } from 'react-icons/hi';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
    setIsOpen(false);
  };

  const currentLanguage = router.locale === 'en' ? 'English' : 'Español';
  const currentFlag = router.locale === 'en' ? '🇺🇸' : '🇪🇸';

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700'
      >
        <div className='flex items-center gap-2'>
          <HiGlobeAlt className='h-4 w-4' />
          <span className='flex items-center gap-1'>
            <span>{currentFlag}</span>
            <span>{currentLanguage}</span>
          </span>
        </div>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute top-full z-50 mt-1 w-full rounded-lg border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800'>
          <button
            onClick={() => changeLanguage('en')}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
              router.locale === 'en'
                ? 'bg-neutral-100 dark:bg-neutral-700'
                : ''
            }`}
          >
            <span>🇺🇸</span>
            <span>{t('english')}</span>
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
              router.locale === 'es'
                ? 'bg-neutral-100 dark:bg-neutral-700'
                : ''
            }`}
          >
            <span>🇪🇸</span>
            <span>{t('spanish')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
