import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import SectionHeading from '@/common/components/elements/SectionHeading';

const Skills = dynamic(() => import('@/modules/about/components/Skills'), {
  ssr: false,
});

const SkillsSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title={t('introduction.toolsIveUsed')} />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;
