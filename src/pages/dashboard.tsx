import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';

const DashboardPage: NextPage = () => {
  return (
    <>
      <NextSeo title='Dashboard - Luis Rojas' />
      <Container data-aos='fade-up'>
        <PageHeading title='Dashboard' description='Personal dashboard' />
        <Dashboard />
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
        'dashboard',
      ])),
    },
  };
};

export default DashboardPage;
