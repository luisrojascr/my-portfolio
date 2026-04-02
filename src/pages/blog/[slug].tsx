import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/common/constant/site';
import { formatExcerpt } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { getBlogDetail } from '@/services/blog';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment'),
);

interface BlogDetailPageProps {
  blog: {
    data: BlogDetailProps;
  };
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data || {};

  const slug = `blog/${blogData?.slug}?id=${blogData?.id}`;
  const canonicalUrl = `${SITE_URL}/${slug}`;
  const plainTitle =
    blogData?.title?.rendered?.replace(/<[^>]*>/g, '').trim() || 'Blog post';
  const description =
    formatExcerpt(blogData?.excerpt?.rendered, 160) || plainTitle;
  const ogImage = absoluteUrl(blogData?.featured_image_url);
  const publisherLogo = `${SITE_URL}/favicon/apple-touch-icon.png`;

  const incrementViews = async () => {
    await fetch(`/api/views?&slug=${blogData?.slug}`, { method: 'POST' });
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      incrementViews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ArticleJsonLd
        type='BlogPosting'
        url={canonicalUrl}
        title={plainTitle}
        images={[ogImage]}
        datePublished={blogData?.date}
        dateModified={blogData?.modified || blogData?.date}
        authorName={SITE_NAME}
        publisherName={SITE_NAME}
        publisherLogo={publisherLogo}
        description={description}
      />
      <NextSeo
        title={`${plainTitle} — Blog`}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date,
            modifiedTime: blogData?.modified || blogData?.date,
            authors: [SITE_NAME],
          },
          url: canonicalUrl,
          images: [{ url: ogImage, alt: plainTitle }],
          siteName: `${SITE_NAME} — Blog`,
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment isEnableReaction={false} />
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogId = context.query?.id as string;

  if (!blogId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await getBlogDetail(parseInt(blogId));

  if (response?.status === 404) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: response,
    },
  };
};
