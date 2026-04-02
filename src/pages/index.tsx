import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';

import Container from '@/common/components/elements/Container';
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILE_URLS,
} from '@/common/constant/site';
import Home from '@/modules/home';

const HOME_TITLE = 'Luis Rojas — Software engineer & frontend developer';

const HomePage: NextPage = () => {
  return (
    <>
      <SocialProfileJsonLd
        type='Person'
        name={SITE_NAME}
        url={SITE_URL}
        sameAs={SOCIAL_PROFILE_URLS}
      />
      <NextSeo
        title={HOME_TITLE}
        description={DEFAULT_META_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          title: HOME_TITLE,
          description: DEFAULT_META_DESCRIPTION,
          url: SITE_URL,
          images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} — portfolio` }],
        }}
      />
      <Container>
        <Home />
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
        'home',
      ])),
    },
  };
};

export default HomePage;
