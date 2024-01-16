import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
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
        className={`${inter.className} min-h-screen flex items-center flex-col m-4 text-text-primary bg-slate-900`}
      >
        <BackgroundSvg />

        <main className="max-w-[1024px] w-full">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
