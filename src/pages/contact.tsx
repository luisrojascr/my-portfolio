import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';

const ContactPage: NextPage = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <NextSeo title='Contact - Luis Rojas' />
      <Container data-aos='fade-up'>
        <PageHeading title={t('title')} description={t('workTogether')} />
        <Contact />
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
        'contact',
      ])),
    },
  };
};

export default ContactPage;
