import { Fira_Code, Onest, Sora } from 'next/font/google';

export const firaCode = Fira_Code({
  variable: '--firaCode-font',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const soraSans = Sora({
  variable: '--soraSans-font',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const onestSans = Onest({
  variable: '--onestSans-font',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
