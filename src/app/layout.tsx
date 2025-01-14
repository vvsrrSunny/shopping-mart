import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Link from 'next/link';
// import { useState } from 'react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import MobileSideBar from '@/components/MobileSideBar';
import { Navigation } from '@/types/types';
import Header from '@/components/Header';

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
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Mobile menu */}
        {/* <MobileSideBar open={open} setOpen={setOpen} /> */}

        <Header navigation={navigation} />
        <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
