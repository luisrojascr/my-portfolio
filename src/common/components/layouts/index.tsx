import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import HeaderSidebar from './header/HeaderSidebar';
import HeaderTop from './header/HeaderTop';

const NowPlayingBar = dynamic(() => import('../elements/NowPlayingBar'), {
  ssr: false,
});
const NowPlayingCard = dynamic(() => import('../elements/NowPlayingCard'), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const isFullPageHeader =
    router.pathname === '/blog' ||
    router.pathname.startsWith('/blog/') ||
    router.pathname.startsWith('/learn/') ||
    router.pathname === '/launch-refined';

  return (
    <>
      <div className='mx-auto max-w-6xl dark:text-darkText'>
        {isFullPageHeader ? (
          <div className='flex flex-col xl:pb-8'>
            <HeaderTop />
            <main className='transition-all duration-300'>{children}</main>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row lg:gap-2 lg:py-4 xl:pb-8'>
            <HeaderSidebar />
            <main className='max-w-[915px] transition-all duration-300 lg:w-4/5'>
              {children}
            </main>
          </div>
        )}
      </div>
      {/* Render both, show/hide via CSS to avoid JS-gated rendering */}
      <div className='block sm:hidden'>
        <NowPlayingCard />
      </div>
      <div className='hidden sm:block'>
        <NowPlayingBar />
      </div>
    </>
  );
};

export default Layout;
