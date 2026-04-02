import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { SITE_URL } from '@/common/constant/site';
import BlogListNew from '@/modules/blog';

const PAGE_TITLE = 'Blog';
const BLOG_DESCRIPTION =
  'Articles on frontend development, React, Next.js, and engineering — written by Luis Rojas.';

const BlogPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} — Luis Rojas`}
        description={BLOG_DESCRIPTION}
        canonical={`${SITE_URL}/blog`}
        openGraph={{
          url: `${SITE_URL}/blog`,
          description: BLOG_DESCRIPTION,
        }}
      />
      <Container className='xl:!-mt-5' data-aos='fade-up'>
        <BlogListNew />
      </Container>
    </>
  );
};

export default BlogPage;
