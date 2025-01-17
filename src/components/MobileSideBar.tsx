'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Navigation } from '@/types/types';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useCart } from '@/context/CartProvider';
import MobileNavigationLinks from './MobileNavigationLinks';
import { useRouter } from 'next/navigation';

interface MobileSideBarProps {
  navigation: Navigation;
}

const MobileSideBar: React.FC<MobileSideBarProps> = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const user = useSession();
  const router = useRouter();
  const isLoggedIn = user.status === 'authenticated';
  const { clearCart } = useCart();
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <MobileNavigationLinks navigation={navigation} onClose={() => setOpen(false)} />

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <button
                  className="-m-2 block p-2 font-medium text-gray-900"
                  onClick={() => {
                    if (isLoggedIn) {
                      console.log('Show User Profile');
                    } else {
                      router.push('/auth/sign-in');
                      setOpen(false);
                    }
                  }}
                >
                  {isLoggedIn ? user.data?.user?.name : 'Sign in'}
                </button>
              </div>
              <div className="flow-root">
                <button
                  className="-m-2 block p-2 font-medium text-gray-900"
                  onClick={() => {
                    if (isLoggedIn) {
                      console.log(
                        'sync the cart to the user cart and remove cart form local store and implement logout',
                      );
                      signOut();
                      clearCart();
                    } else {
                      console.log('take to the register page');
                    }
                  }}
                >
                  {isLoggedIn ? 'Logout' : 'Create account'}
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <Image
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-australia.svg"
                  className="block h-auto w-auto shrink-0"
                  width={20}
                  height={15}
                />
                <span className="ml-3 block text-base font-medium text-gray-900">AUD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open menu</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
    </>
  );
};

export default MobileSideBar;
