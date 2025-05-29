import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title='Luis Rojas - Personal Website' />
      <Container data-aos='fade-up'>
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
