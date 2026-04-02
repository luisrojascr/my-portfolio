import type { ReactElement } from 'react';
import { BsCpu, BsRobot } from 'react-icons/bs';
import { HiOutlineCode } from 'react-icons/hi';
import {
  SiAngular,
  SiApollographql,
  SiChakraui,
  SiContentful,
  SiCss,
  SiDatefns,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLucide,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNx,
  SiOpenai,
  SiOpenid,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiReactivex,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiStorybook,
  SiStripe,
  SiStyledcomponents,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandAws } from 'react-icons/tb';

export type stacksProps = {
  [key: string]: ReactElement;
};

const iconSize = 20;

const FALLBACK_STACK_ICON = (
  <HiOutlineCode
    size={iconSize}
    className='text-neutral-500 dark:text-neutral-400'
    aria-hidden
  />
);

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
  CSS: <SiCss size={iconSize} className='text-blue-300' />,
  Express: <SiExpress size={iconSize} />,
  Nx: <SiNx size={iconSize} />,
  PostgreSQL: <SiPostgresql size={iconSize} />,
  Supabase: <SiSupabase size={iconSize} className='text-blue-300' />,
  Python: <SiPython size={iconSize} />,
};

/** Keys match trimmed stack labels from `projects` data; extends {@link STACKS} for aliases and extra tech. */
export const PROJECT_STACK_ICONS: stacksProps = {
  ...STACKS,
  React: <SiReact size={iconSize} className='text-sky-500' />,
  'React 18': <SiReact size={iconSize} className='text-sky-500' />,
  Tailwind: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Tailwind CSS': <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Material-UI': <SiMui size={iconSize} className='text-sky-400' />,
  'Material UI v7': <SiMui size={iconSize} className='text-sky-400' />,
  'MUI X Pro': <SiMui size={iconSize} className='text-sky-400' />,
  'Styled-Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  ES6: <SiJavascript size={iconSize} className='text-yellow-400' />,
  'Redux Toolkit': <SiRedux size={iconSize} className='text-purple-500' />,
  'Chakra UI': <SiChakraui size={iconSize} className='text-teal-400' />,
  ContentFul: <SiContentful size={iconSize} />,
  'Framer Motion': <SiFramer size={iconSize} />,
  'shadcn/ui': <SiShadcnui size={iconSize} />,
  'shadcn/ui + Radix UI': <SiShadcnui size={iconSize} />,
  Radix: <SiRadixui size={iconSize} />,
  'React Router v6': <SiReactrouter size={iconSize} className='text-red-400' />,
  'TanStack React Query v5': (
    <SiReactquery size={iconSize} className='text-red-500' />
  ),
  'TanStack Query': <SiReactquery size={iconSize} className='text-red-500' />,
  'date-fns': <SiDatefns size={iconSize} />,
  'Lucide React': <SiLucide size={iconSize} />,
  'AppSync GraphQL': <SiGraphql size={iconSize} className='text-pink-600' />,
  Elasticsearch: <SiElasticsearch size={iconSize} />,
  Stripe: <SiStripe size={iconSize} className='text-indigo-400' />,
  HubSpot: <SiHubspot size={iconSize} className='text-orange-500' />,
  'React Testing Library': (
    <SiTestinglibrary size={iconSize} className='text-red-500' />
  ),
  OpenAI: <SiOpenai size={iconSize} />,
  RxJS: <SiReactivex size={iconSize} className='text-purple-600' />,
  'NGX-Admin': <SiAngular size={iconSize} className='text-red-500' />,
  Sass: <SiSass size={iconSize} className='text-pink-500' />,
  'Material Design': <SiMui size={iconSize} className='text-blue-500' />,
  PHP: <SiPhp size={iconSize} className='text-indigo-400' />,
  HTML: <SiHtml5 size={iconSize} className='text-orange-500' />,
  'AI/ML': <BsRobot size={iconSize} className='text-rose-500' />,
  'Computer Vision': <BsCpu size={iconSize} className='text-sky-400' />,
  'AWS Amplify': <TbBrandAws size={iconSize} className='text-amber-600' />,
  DynamoDB: <TbBrandAws size={iconSize} className='text-amber-600' />,
  'AWS Cognito': <TbBrandAws size={iconSize} className='text-amber-600' />,
  'JWT (jose)': (
    <SiJsonwebtokens size={iconSize} className='text-neutral-500' />
  ),
  'OAuth (Google, LinkedIn)': (
    <SiOpenid size={iconSize} className='text-neutral-500' />
  ),
};

export function getProjectStackIcon(stackName: string): ReactElement {
  const key = stackName.trim();
  return PROJECT_STACK_ICONS[key] ?? FALLBACK_STACK_ICON;
}
