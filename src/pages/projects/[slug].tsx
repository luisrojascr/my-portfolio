import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PROJECTS } from '@/common/constant/projects';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  const canonicalUrl = `https://luisrojascr.netlify.app/project/${project?.slug}`;

  return (
    <>
      <NextSeo
        title={`${project?.title} - Project Luis Rojas`}
        description={project?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.updated_at.toString(),
            modifiedTime: project?.updated_at.toString(),
            authors: ['Luis Rojas'],
          },
          url: canonicalUrl,
          images: [
            {
              url: project?.image,
            },
          ],
          siteName: 'Blog Luis Rojas',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const project = PROJECTS.find((project) => project.slug === String(params?.slug));

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'projects',
      ])),
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales?.reduce<{ params: { slug: string }; locale: string }[]>(
    (acc, locale) => [
      ...acc,
      ...PROJECTS.map((project) => ({
        params: { slug: project.slug },
        locale,
      })),
    ],
    []
  ) || [];

  return {
    paths,
    fallback: false,
  };
};
