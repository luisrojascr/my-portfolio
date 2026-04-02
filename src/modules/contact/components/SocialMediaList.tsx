import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { SOCIAL_MEDIA } from '@/common/constant/menu';

const linkBaseClass =
  'flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-[15px] text-neutral-50 transition-all duration-300 hover:scale-105 hover:bg-neutral-600 dark:hover:bg-neutral-700 md:w-1/5';

const SocialMediaList = () => {
  const { t } = useTranslation('contact');

  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>{t('findMeSocialMedia')}</h3>
      <div className='flex flex-col justify-between gap-3 md:flex-row'>
        {SOCIAL_MEDIA?.map((item, index: number) => {
          const isExternalHttp = item.href.startsWith('http');
          return (
            <a
              key={index}
              href={item.href}
              {...(isExternalHttp
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={clsx(linkBaseClass, item?.className)}
              data-umami-event={item?.eventName}
            >
              {item?.icon}
              {item?.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaList;
