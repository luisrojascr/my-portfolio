import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { SITE_URL } from '@/common/constant/site';
import LaunchRefined from '@/modules/launch-refined';

const LaunchRefinedPage: NextPage = () => {
  const { t } = useTranslation('launch-refined');
  const title = t('seo.title');
  const description = t('seo.description');

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${SITE_URL}/launch-refined`}
        openGraph={{
          title,
          description,
          url: `${SITE_URL}/launch-refined`,
        }}
      />
      <Container data-aos='fade-up' className='!mt-12 lg:!mt-0'>
        <LaunchRefined />
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
        'launch-refined',
      ])),
    },
  };
};

export default LaunchRefinedPage;
