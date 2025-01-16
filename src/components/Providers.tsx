'use client';
import CartProvider from '@/context/CartProvider';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
