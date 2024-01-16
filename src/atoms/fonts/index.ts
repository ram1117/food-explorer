import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  style: ['italic', 'normal'],
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
