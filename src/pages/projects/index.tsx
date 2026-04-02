import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PROJECTS } from '@/common/constant/projects';
import { SITE_URL } from '@/common/constant/site';
import Projects from '@/modules/projects';

const ProjectsPage: NextPage = () => {
  const [projects] = useState(PROJECTS);
  const [hasMore] = useState(false);
  const { t } = useTranslation('projects');
  const description = `${t('projects.showcase')} Built with React, Next.js, and TypeScript.`;

  const loadMore = () => {
    // Implementation for loading more projects if needed
  };

  return (
    <>
      <NextSeo
        title='Projects — Luis Rojas'
        description={description}
        canonical={`${SITE_URL}/projects`}
        openGraph={{ url: `${SITE_URL}/projects`, description }}
      />
      <Container data-aos='fade-up'>
        <PageHeading
          title={t('projects.name')}
          description={t('projects.showcase')}
        />
        <Projects projects={projects} loadMore={loadMore} hasMore={hasMore} />
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
        'projects',
      ])),
    },
  };
};

export default ProjectsPage;
