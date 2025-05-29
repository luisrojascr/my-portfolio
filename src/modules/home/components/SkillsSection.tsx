import { useTranslation } from 'next-i18next';

import SectionHeading from '@/common/components/elements/SectionHeading';
import Skills from '@/modules/about/components/Skills';

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
