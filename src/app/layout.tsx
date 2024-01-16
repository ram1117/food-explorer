import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
import BackgroundSvg from '@/components/BackgroundSvg';
import { montserrat } from '@/atoms/fonts';

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
    <html lang="en" className={montserrat.variable}>
      <body className=" min-h-screen flex items-center flex-col m-4 text-text-primary bg-slate-900 font-montserrat">
        <BackgroundSvg />

        <main className="max-w-[1024px] w-full">
          <MainHeader />
          <div className="mt-12 md:mt-30">{children}</div>
        </main>
      </body>
    </html>
  );
}
