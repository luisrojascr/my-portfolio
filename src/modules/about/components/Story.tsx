import { useTranslation } from 'next-i18next';

const Story = () => {
  const { t } = useTranslation('about');

  // Function to parse **bold** text into <strong> tags
  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  const achievements = t('achievements', { returnObjects: true }) as string[];
  const closing = t('closing', { returnObjects: true }) as string[];

  return (
    <div className='space-y-8'>
      <section className='space-y-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        <p>{t('content')}</p>
        
        <ul className='list-none space-y-3'>
          {achievements.map((achievement, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{parseBoldText(achievement)}</span>
            </li>
          ))}
        </ul>
        
        {closing.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <div className='space-y-4'>
        <span>{t('regards')},</span>
        <p>Luis Rojas</p>
      </div>
    </div>
  );
};

export default Story;
