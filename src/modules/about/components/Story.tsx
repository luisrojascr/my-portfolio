import Image from '@/common/components/elements/Image';
import { ABOUT } from '@/common/constant/about';

const Story = () => {
  return (
    <div className='space-y-8'>
      <section
        className='space-y-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'
        dangerouslySetInnerHTML={{ __html: ABOUT }}
      />

      <div className='space-y-4'>
        <span>Best Regards,</span>
        <p>Luis Rojas</p>
      </div>
    </div>
  );
};

export default Story;
