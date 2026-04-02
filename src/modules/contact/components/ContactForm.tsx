import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import {
  FiAlertCircle as AlertIcon,
  FiCheckCircle as CheckIcon,
  FiClock as ClockIcon,
} from 'react-icons/fi';

import Button from '@/common/components/elements/Button';
import { submitWeb3Forms } from '@/services/contact';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: FormDataProps = {
  name: '',
  email: '',
  message: '',
};

type FormFeedback = {
  type: 'success' | 'error';
  message: string;
};

const ContactForm = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState<FormDataProps>(formInitialState);

  const [formErrors, setFormErrors] = useState<Partial<FormDataProps>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFeedback(null);
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is required`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasErrors = Object.values(formErrors).some((error) => error);

    if (hasErrors) {
      setFeedback({ type: 'error', message: t('form.validationHint') });
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY;
    if (!accessKey) {
      setFeedback({ type: 'error', message: t('form.missingConfig') });
      return;
    }

    setFeedback(null);
    setIsLoading(true);
    try {
      const payload = new FormData();
      payload.append('access_key', accessKey);
      payload.append('name', formData.name.trim());
      payload.append('email', formData.email.trim());
      payload.append('message', formData.message.trim());
      payload.append(
        'subject',
        `Portfolio contact from ${formData.name.trim()}`,
      );

      const result = await submitWeb3Forms(payload);

      if (result.ok) {
        setFeedback({ type: 'success', message: t('form.success') });
        setFormData(formInitialState);
        setFormErrors({});
      } else {
        setFeedback({
          type: 'error',
          message: `${t('form.error')} ${result.message}`,
        });
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        message: `${t('form.error')} ${error instanceof Error ? error.message : String(error)}`,
      });
    }
    setIsLoading(false);
  };

  const isSubmitDisabled = Object.values(formErrors).some((error) => error);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      {feedback ? (
        <div
          className={clsx(
            'flex gap-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed shadow-sm',
            feedback.type === 'success'
              ? 'dark:bg-emerald-950/35 border-emerald-200/80 bg-emerald-50 text-emerald-950 dark:border-emerald-800/80 dark:text-emerald-50'
              : 'dark:bg-red-950/35 border-red-200/80 bg-red-50 text-red-950 dark:border-red-900/80 dark:text-red-50',
          )}
          role={feedback.type === 'success' ? 'status' : 'alert'}
          aria-live={feedback.type === 'success' ? 'polite' : 'assertive'}
        >
          {feedback.type === 'success' ? (
            <CheckIcon
              className='mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400'
              aria-hidden
            />
          ) : (
            <AlertIcon
              className='mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400'
              aria-hidden
            />
          )}
          <p className='min-w-0 flex-1'>{feedback.message}</p>
        </div>
      ) : null}

      <div className='flex flex-grow flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='text'
            placeholder={t('form.name')}
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='email'
            placeholder='Email*'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
          rows={5}
          placeholder={t('form.message')}
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          className={clsx('flex justify-center py-2.5')}
          type='submit'
          icon={<></>}
          data-umami-event='Send Contact Message'
          disabled={isSubmitDisabled || isLoading}
        >
          {isLoading ? t('form.sending') : t('form.send')}
        </Button>
      </div>

      <div className='my-5 flex items-center gap-2 dark:text-neutral-400'>
        <ClockIcon />
        <div className='text-sm'>
          <span className='font-medium'>{t('info.response')}:</span> 1-2 Hours
          (Time zone CST/GMT-6)
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
