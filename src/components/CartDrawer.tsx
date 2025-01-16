'use client';

import { FC } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useCart } from '@/context/CartProvider';

interface CartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartDrawer: FC<CartDrawerProps> = ({ open, setOpen }) => {
  const { items: cartItems, updateCart, removeFromCart, countTotalPrice, clearCart } = useCart();

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed" />

      <div className="fixed">
        <div className="absolute ">
          <div className=" fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Panel title
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Your content */}

                    {cartItems.map((cartItem) => {
                      return (
                        <div key={cartItem.product.id} className="p-4">
                          <div className="flex space-x-4">
                            <Image
                              src={cartItem.product.image}
                              alt=""
                              className="rounded object-fit"
                              width={64}
                              height={64}
                            />
                            <div className="flex-1">
                              <h2 className="font-semibold">{cartItem.product.title}</h2>
                              <div className="flex space-x-1 text-sm text-gray-400">
                                <span>{cartItem.count}</span>
                                <span>x</span>
                                <span>{cartItem.count * cartItem.product.price}</span>
                              </div>
                            </div>

                            <div className="ml-auto">
                              <button
                                onClick={() => removeFromCart(cartItem.product)}
                                className="text-xs uppercase hover:underline"
                              >
                                Remove
                              </button>

                              <div className="flex items-center justify-between">
                                <button onClick={() => updateCart(cartItem.product, -1)}>-</button>
                                <span className="text-xs">{cartItem.count}</span>
                                <button onClick={() => updateCart(cartItem.product, 1)}>+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CartDrawer;
