import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { SITE_URL } from '@/common/constant/site';
import { formatExcerpt } from '@/common/helpers';
import About from '@/modules/about';

const AboutPage: NextPage = () => {
  const { t } = useTranslation('about');
  const description = formatExcerpt(t('content'), 158);

  return (
    <>
      <NextSeo
        title='About — Luis Rojas'
        description={description}
        canonical={`${SITE_URL}/about`}
        openGraph={{ url: `${SITE_URL}/about`, description }}
      />
      <Container data-aos='fade-up'>
        <PageHeading title='About' description={t('description')} />
        <About />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'about',
      ])),
    },
  };
};

export default AboutPage;
