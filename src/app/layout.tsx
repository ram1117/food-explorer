import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';
import BackgroundSvg from '@/components/BackgroundSvg';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Explorer',
  description: 'Food explorer website for food enthusiasts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex items-center flex-col m-4 text-text-primary`}
      >
        <div className="absolute w-full h-[140px] lg:h-[320px] top-0 left-0 -z-50">
          <BackgroundSvg />
        </div>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
