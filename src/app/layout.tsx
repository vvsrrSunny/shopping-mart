import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/types/types';
import Header from '@/components/Header';
import Providers from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PLAYA3ULL Shopping',
  description: 'A Next js application for E-Commerce',
};

const navigation: Navigation = {
  pages: [
    { name: 'Products', href: '/products' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Company', href: '/company' },
    { name: 'Stores', href: '/stores' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <Header navigation={navigation} />
          <div className="mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
