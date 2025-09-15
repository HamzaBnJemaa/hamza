import { Inter, Instrument_Serif, Unica_One } from 'next/font/google';

export const ngetic = Unica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ngetic',
  display: 'swap',
});

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});
