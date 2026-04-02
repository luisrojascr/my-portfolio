import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  const { t } = useTranslation('home');

  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title={t('introduction.whatIveBeenWorkingOn')} />
        <p className='leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          {t('introduction.services')}
        </p>
      </div>
      <Card className='space-y-4 rounded-xl border bg-neutral-100 p-8 dark:border-none dark:bg-[#1e1e1e]'>
        <div className='flex items-center gap-2'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>
            {t('introduction.workTogether')}
          </h3>
        </div>
        <p className='pl-2 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          {t('introduction.openForFreelance')}
        </p>
        <Link
          href='/contact'
          data-umami-event='Click Contact Button'
          className='inline-flex w-fit items-center gap-2 rounded-lg bg-brand px-4 py-2 text-[15px] font-medium text-brand-foreground transition-all duration-300 hover:bg-brand-muted dark:bg-brand dark:hover:bg-brand-muted'
        >
          {t('introduction.contactMe')}
        </Link>
      </Card>
    </section>
  );
};

export default Services;
