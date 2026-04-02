import clsx from 'clsx';
import NextImage from 'next/image';
import Link from 'next/link';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

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
      <>
        <div className='mt-1 flex items-center gap-2 lg:mt-4'>
          <h2 className='flex-grow text-lg font-medium lg:text-xl'>
            <Link
              href='/'
              className='text-inherit no-underline hover:underline hover:underline-offset-2'
            >
              Luis Rojas
            </Link>
          </h2>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
        <div className='hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex'>
          @luisrojascr
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;
