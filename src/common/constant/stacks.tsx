import { BsRobot } from 'react-icons/bs';
import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNx,
  SiPostgresql,
  SiPrisma,
  SiPwa,
SiPython,  SiReact,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiSvelte,  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  Apollo: <SiApollographql size={iconSize} />,
  WordPress: <SiWordpress size={iconSize} />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className='text-rose-500' />
  ),
  Angular: <SiAngular size={iconSize} className='text-red-500' />,
  Svelte: <SiSvelte size={iconSize} />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  PWA: <SiPwa size={iconSize} className='text-amber-600' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  Storybook: <SiStorybook size={iconSize} className='text-amber-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Express: <SiExpress size={iconSize} />,
  Nx: <SiNx size={iconSize} />,
  PostgreSQL: <SiPostgresql size={iconSize} />,
  Supabase: <SiSupabase size={iconSize} className='text-blue-300'  />,
  Python: <SiPython size={iconSize} />
};
