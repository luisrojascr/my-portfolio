import { useTranslation } from 'next-i18next';

const Introduction = () => {
  const { t } = useTranslation('home');

  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>{t('introduction.greeting')}</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              {t('introduction.location')} <span className='ml-1'>🇨🇷</span>
            </li>
            <li>{t('introduction.position')}&nbsp;
              <a href="https://www.petsmart.com/" target="_blank">
                <span className='cursor-pointer underline-offset-2 hover:text-dark hover:underline hover:dark:text-white'>
                  {t('introduction.company')}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        {t('introduction.bio')}
      </p>
    </section>
  );
};

export default Introduction;
