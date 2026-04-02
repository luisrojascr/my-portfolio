import clsx from 'clsx';
import NextImage from 'next/image';
import Link from 'next/link';
import { BsLinkedin as LinkedinIcon } from 'react-icons/bs';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/luisrojascr';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({
  expandMenu,
  imageSize,
  isScrolled = false,
}: ProfileHeaderProps) => {
  const size = imageSize || 80;

  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5 lg:px-2',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <div
        className={clsx(
          'overflow-hidden rounded-full transition-all duration-300',
          !expandMenu && isScrolled ? 'h-0 w-0 opacity-0' : 'opacity-100',
        )}
      >
        <NextImage
          src='/images/luis-rojas-foto-v2.png'
          alt='Luis Rojas'
          width={size}
          height={size}
          priority
          fetchPriority='high'
          quality={90}
          className='rotate-3 lg:hover:scale-105'
        />
      </div>
      <div className='flex min-w-0 flex-1 items-center justify-between gap-3 lg:w-full'>
        <div className='flex min-w-0 flex-1 flex-col'>
          <div className='mt-1 flex items-center gap-2 lg:mt-4'>
            <h2 className='min-w-0 flex-1 truncate text-lg font-medium lg:text-xl'>
              <Link
                href='/'
                className='text-inherit no-underline hover:underline hover:underline-offset-2'
              >
                Luis Rojas
              </Link>
            </h2>
            <VerifiedIcon size={18} className='shrink-0 text-blue-400' />
          </div>
          <div className='hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex'>
            @luisrojascr
          </div>
        </div>
        <a
          href={LINKEDIN_PROFILE_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='shrink-0 text-[#0A66C2] transition-opacity hover:opacity-80 dark:text-[#70b7f2]'
          aria-label='LinkedIn profile'
        >
          <LinkedinIcon size={22} aria-hidden />
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
