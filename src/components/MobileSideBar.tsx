'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Navigation } from '@/types/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { classNames } from '@/utils/helpers';

interface MobileSideBarProps {
  navigation: Navigation;
}

const MobileSideBar: React.FC<MobileSideBarProps> = ({ navigation }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <div
                    onClick={() => setOpen(false)}
                    className={classNames(
                      page.href === pathname ? 'bg-green-700 text-white' : '',
                      'rounded-md p-2',
                    )}
                  >
                    <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                      {page.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
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
