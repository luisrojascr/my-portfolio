import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import SectionHeading from '@/common/components/elements/SectionHeading';

const GAP_KEYS = [
  'genericUx',
  'weakHierarchy',
  'trustFriction',
  'conversionLeakage',
  'performanceFriction',
] as const;

const REFINEMENT_KEYS = [
  'uiPolish',
  'uxClarity',
  'flowOptimization',
  'performance',
  'productionCleanup',
] as const;

const WHO_KEYS = ['mvp', 'premium', 'focused', 'cares', 'readiness'] as const;

const OUTCOME_KEYS = [
  'deliberate',
  'understand',
  'complete',
  'trustworthy',
  'fasterSmoother',
  'aiSpeed',
] as const;

type ServiceTier = 'audit' | 'sprint' | 'upgrade';

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is string => typeof x === 'string');
}

type FaqEntry = { question: string; answer: string };

function asFaqItems(value: unknown): FaqEntry[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is FaqEntry => {
    if (typeof x !== 'object' || x === null) return false;
    const o = x as Record<string, unknown>;
    return typeof o.question === 'string' && typeof o.answer === 'string';
  });
}

type HowStep = { title: string; description: string };

function asHowSteps(value: unknown): HowStep[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is HowStep => {
    if (typeof x !== 'object' || x === null) return false;
    const o = x as Record<string, unknown>;
    return typeof o.title === 'string' && typeof o.description === 'string';
  });
}

const SERVICE_ORDER: {
  tier: ServiceTier;
  anchorId?: string;
  featured?: boolean;
}[] = [
  { tier: 'audit', anchorId: 'mvp-polish-audit' },
  { tier: 'sprint', featured: true },
  { tier: 'upgrade' },
];

/** Primary filled CTAs only — theme accent `#81c8e0` */
const MAIN_BUTTON =
  'inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[15px] font-medium text-brand-foreground transition-all duration-300 hover:bg-brand-muted dark:bg-brand dark:text-brand-foreground dark:hover:bg-brand-muted';

const MAIN_BUTTON_LG =
  'inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-[15px] font-medium text-brand-foreground transition-all duration-300 hover:bg-brand-muted dark:bg-brand dark:text-brand-foreground dark:hover:bg-brand-muted';

const LaunchRefined = () => {
  const { t } = useTranslation('launch-refined');

  const howSteps = asHowSteps(t('howItWorks.steps', { returnObjects: true }));
  const faqItems = asFaqItems(t('faq.items', { returnObjects: true }));
  const typicalItems = asStringArray(
    t('typicalIssues.items', { returnObjects: true }),
  );
  const applyChecklist = asStringArray(
    t('apply.checklist', { returnObjects: true }),
  );

  return (
    <section className='space-y-12 lg:space-y-16'>
      <div className='grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
        <div className='space-y-6'>
          <span className='inline-flex rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400'>
            {t('hero.eyebrow')}
          </span>
          <div className='space-y-4'>
            <h1 className='max-w-2xl text-3xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 md:text-4xl lg:text-[2.35rem] lg:leading-[1.15]'>
              {t('hero.title')}
            </h1>
            <p className='max-w-xl leading-[1.8] text-neutral-700 dark:text-neutral-300 md:leading-loose'>
              {t('hero.description1')}
            </p>
            <p className='max-w-xl leading-[1.8] text-neutral-700 dark:text-neutral-300 md:leading-loose'>
              {t('hero.description2')}
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <a
              href='#mvp-polish-audit'
              data-umami-event='Launch refined: hero audit CTA'
              className={MAIN_BUTTON}
            >
              {t('hero.primaryCta')}
              <FiArrowRight size={18} aria-hidden />
            </a>
            <a
              href='#services'
              className='inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2.5 text-[15px] text-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900'
            >
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>
        <Card className='border border-neutral-200 bg-neutral-100/80 p-4 dark:border-neutral-800 dark:bg-[#1e1e1e] sm:p-6'>
          <Image
            src='/images/launch-refined/launch-refined-hero.png'
            alt={t('hero.imageAlt')}
            width={1376}
            height={768}
            sizes='(max-width: 1024px) 100vw, 520px'
            className='h-auto w-full object-cover'
            rounded='rounded-xl'
            priority
          />
          <p className='mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400'>
            {t('hero.visualCaption')}
          </p>
        </Card>
      </div>

      <Breakline className='my-0' />

      <div className='space-y-6'>
        <SectionHeading title={t('gap.title')} />
        <p className='max-w-2xl leading-[1.8] text-neutral-700 dark:text-neutral-300 md:leading-loose'>
          {t('gap.description')}
        </p>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          {GAP_KEYS.map((key) => (
            <Card
              key={key}
              className='border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-[#1e1e1e]'
            >
              <h2 className='mb-2 text-base font-medium text-neutral-900 dark:text-neutral-100'>
                {t(`gap.items.${key}.title`)}
              </h2>
              <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
                {t(`gap.items.${key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Breakline className='my-0' />

      <div id='refinement' className='scroll-mt-8 space-y-8'>
        <div className='max-w-2xl space-y-4'>
          <SectionHeading title={t('refinement.title')} />
          <p className='leading-[1.8] text-neutral-700 dark:text-neutral-300 md:leading-loose'>
            {t('refinement.description')}
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {REFINEMENT_KEYS.map((key) => (
            <div
              key={key}
              className='flex h-full gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-[#1e1e1e]'
            >
              <FiCheckCircle
                className='mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400'
                size={20}
                aria-hidden
              />
              <div className='min-w-0'>
                <h3 className='font-medium text-neutral-900 dark:text-neutral-100'>
                  {t(`refinement.items.${key}.title`)}
                </h3>
                <p className='mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
                  {t(`refinement.items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Breakline className='my-0' />

      <div className='space-y-6'>
        <SectionHeading title={t('who.title')} />
        <p className='max-w-2xl leading-[1.8] text-neutral-700 dark:text-neutral-300 md:leading-loose'>
          {t('who.description')}
        </p>
        <ul className='ml-5 list-disc space-y-2 text-neutral-800 dark:text-neutral-300'>
          {WHO_KEYS.map((key) => (
            <li key={key}>{t(`who.bullets.${key}`)}</li>
          ))}
        </ul>
      </div>

      <Breakline className='my-0' />

      <div className='space-y-6'>
        <SectionHeading title={t('outcomes.title')} />
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {OUTCOME_KEYS.map((key) => (
            <Card
              key={key}
              className='flex items-start gap-3 border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-[#1e1e1e]'
            >
              <FiCheckCircle
                className='mt-0.5 shrink-0 text-teal-600 dark:text-teal-400'
                size={18}
                aria-hidden
              />
              <p className='text-sm font-medium text-neutral-800 dark:text-neutral-200'>
                {t(`outcomes.items.${key}`)}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Breakline className='my-0' />

      <div id='services' className='scroll-mt-8 space-y-6'>
        <SectionHeading title={t('engagements.title')} />
        <div className='grid gap-5 lg:grid-cols-3'>
          {SERVICE_ORDER.map(({ tier, anchorId, featured }) => {
            const included = asStringArray(
              t(`engagements.${tier}.included`, { returnObjects: true }),
            );
            const cardInner = (
              <>
                <p
                  className={`text-xs font-medium uppercase tracking-[0.18em] ${
                    featured
                      ? 'text-teal-700 dark:text-teal-400'
                      : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  {t(`engagements.${tier}.label`)}
                </p>
                <h2 className='mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                  {t(`engagements.${tier}.title`)}
                </h2>
                <p className='mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
                  {t(`engagements.${tier}.description`)}
                </p>
                <p className='mt-3 text-sm font-medium text-neutral-800 dark:text-neutral-300'>
                  {t(`engagements.${tier}.bestFor`)}
                </p>
                <p className='mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
                  {t('engagements.includedLabel')}
                </p>
                <ul className='mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-400'>
                  {included.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <p className='mt-4 text-sm text-neutral-600 dark:text-neutral-400'>
                  <span className='font-semibold text-neutral-800 dark:text-neutral-200'>
                    {t('engagements.timelineLabel')}:
                  </span>{' '}
                  {t(`engagements.${tier}.timeline`)}
                </p>
                <p className='mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                  <span className='text-sm font-medium text-neutral-500 dark:text-neutral-400'>
                    {t('engagements.priceLabel')}:{' '}
                  </span>
                  {t(`engagements.${tier}.price`)}
                </p>
                <Link
                  href='https://calendly.com/luisrojascr88/refinement-meeting'
                  target='_blank'
                  rel='noopener noreferrer'
                  data-umami-event={`Launch refined: ${tier} CTA`}
                  className={
                    featured
                      ? `mt-6 ${MAIN_BUTTON}`
                      : 'mt-6 inline-flex rounded-lg border-2 border-neutral-700 px-4 py-2.5 text-[15px] font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-800'
                  }
                >
                  {t(`engagements.${tier}.cta`)}
                </Link>
              </>
            );

            return (
              <Card
                key={tier}
                id={anchorId}
                className={`scroll-mt-8 border p-6 dark:bg-[#1e1e1e] ${
                  featured
                    ? 'border-neutral-300 bg-white shadow-md dark:border-neutral-700 dark:shadow-lg'
                    : 'border-neutral-200 bg-neutral-50 dark:border-neutral-800'
                }`}
              >
                {cardInner}
              </Card>
            );
          })}
        </div>
      </div>

      <Breakline className='my-0' />

      <div id='process' className='scroll-mt-8 space-y-6'>
        <SectionHeading title={t('howItWorks.title')} />
        <div className='grid gap-4 sm:grid-cols-2'>
          {howSteps.map((step, index) => (
            <Card
              key={index}
              className='border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-[#1e1e1e]'
            >
              <p className='text-xs font-medium text-neutral-500 dark:text-neutral-400'>
                {index + 1}
              </p>
              <h3 className='mt-2 font-semibold text-neutral-900 dark:text-neutral-100'>
                {step.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Breakline className='my-0' />

      <Card className='border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-[#1e1e1e] md:p-8'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start'>
          <div className='mx-auto w-full max-w-[280px] shrink-0 lg:mx-0'>
            <Image
              src='/images/launch-refined/luis-rojas.png'
              alt={t('about.imageAlt')}
              width={1024}
              height={1024}
              sizes='(max-width: 1024px) 280px, 280px'
              className='aspect-square w-full object-cover object-top'
              rounded='rounded-2xl'
              priority={false}
            />
          </div>
          <div className='min-w-0 space-y-4'>
            <SectionHeading title={t('about.title')} />
            <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
              {t('about.p1')}
            </p>
            <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
              {t('about.p2')}
            </p>
            <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
              {t('about.p3')}
            </p>
          </div>
        </div>
      </Card>

      <Breakline className='my-0' />

      <div className='space-y-6'>
        <SectionHeading title={t('typicalIssues.title')} />
        <ul className='grid gap-2 sm:grid-cols-2'>
          {typicalItems.map((item, i) => (
            <li
              key={i}
              className='flex gap-2 text-sm text-neutral-800 dark:text-neutral-300'
            >
              <span className='text-teal-600 dark:text-teal-400' aria-hidden>
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Breakline className='my-0' />

      <div className='space-y-4'>
        <SectionHeading title={t('faq.title')} />
        <div className='space-y-2'>
          {faqItems.map((item, i) => (
            <details
              key={i}
              className='group rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-[#1e1e1e]'
            >
              <summary className='cursor-pointer list-none font-medium text-neutral-900 dark:text-neutral-100 [&::-webkit-details-marker]:hidden'>
                <span className='flex items-center justify-between gap-2'>
                  {item.question}
                  <span className='text-neutral-400 transition-transform group-open:rotate-180'>
                    ▼
                  </span>
                </span>
              </summary>
              <p className='mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div
        id='apply'
        className='scroll-mt-8 space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#1e1e1e] md:p-8'
      >
        <div>
          <h2 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
            {t('apply.title')}
          </h2>
          <p className='mt-2 max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-400'>
            {t('apply.description')}
          </p>
        </div>
        <div>
          <p className='text-sm font-semibold text-neutral-800 dark:text-neutral-200'>
            {t('apply.checklistTitle')}
          </p>
          <ul className='ml-5 mt-2 list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-400'>
            {applyChecklist.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          <span className='font-medium text-neutral-800 dark:text-neutral-200'>
            {t('apply.responseTimeLabel')}:
          </span>{' '}
          {t('apply.responseTime')}
        </p>
        <div className='flex justify-center py-8 sm:py-10'>
          <Link
            href='https://calendly.com/luisrojascr88/refinement-meeting'
            target='_blank'
            rel='noopener noreferrer'
            data-umami-event='Launch refined: apply CTA'
            className={MAIN_BUTTON_LG}
          >
            {t('apply.cta')}
            <FiArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <p className='text-center text-xs text-neutral-500 dark:text-neutral-500'>
          <span className='font-medium text-neutral-700 dark:text-neutral-400'>
            LaunchRefined
          </span>
          {' — '}
          {t('footerTagline')}
        </p>
      </div>
    </section>
  );
};

export default LaunchRefined;
