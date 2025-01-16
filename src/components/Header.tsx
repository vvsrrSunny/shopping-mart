'use client';
import React, { useState } from 'react';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Navigation } from '@/types/types';
import MobileSideBar from './MobileSideBar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/context/CartProvider';
import CartDrawer from './CartDrawer';

interface HeaderProps {
  navigation: Navigation;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const pathname = usePathname();
  const { countAllItems, countTotalPrice } = useCart();
  const cartItems = countAllItems();
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-green-700 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* $add this button later */}
            <MobileSideBar navigation={navigation} />
            <CartDrawer open={openCartDrawer} setOpen={setOpenCartDrawer}/>
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=700"
                  className="h-8 w-auto bg-white"
                  width={20}
                  height={20}
                />
              </a>
            </div>

            {/* Flyout menus */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page, index) => (
                  <Link
                    href={page.href}
                    key={index}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <p
                      className={
                        page.href === pathname
                          ? 'underline decoration-green-700 decoration-2 underline-offset-8'
                          : ''
                      }
                    >
                      {page.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Sign in
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                  <Image
                    alt=""
                    src="https://tailwindui.com/plus/img/flags/flag-australia.svg"
                    className="block h-auto w-5 shrink-0"
                    width={20}
                    height={15}
                  />
                  <span className="ml-3 block text-sm font-medium">AUD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <button className="relative" onClick={() => setOpenCartDrawer(true)}>
                    <ShoppingCartIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    {cartItems > 0 ? (
                      <div className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-700 bg-opacity-70 text-xs font-semibold text-white">
                        <p className="text-xs font-light">{cartItems >= 9 ? '9+' : cartItems}</p>
                      </div>
                    ) : null}
                  </button>
                  <span className="ml-5 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    ${countTotalPrice()}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
