'use client';

import { FC } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useCart } from '@/context/CartProvider';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface CartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartDrawer: FC<CartDrawerProps> = ({ open, setOpen }) => {
  const { items: cartItems, updateCart, removeFromCart, countTotalPrice } = useCart();
  const router = useRouter();
  const { status } = useSession();
  const isLoggedIn = status === 'authenticated';
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-20">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Your Cart
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
                            <div className="flex items-center">
                              <Image
                                src={cartItem.product.image}
                                alt=""
                                className="h-auto w-auto rounded object-none"
                                width={64}
                                height={80}
                              />
                            </div>
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
                <div className="mt-auto p-4 pb-10">
                  <div className="py-4">
                    <h1 className="text-xl font-semibold uppercase">Total</h1>
                    <p className="font-semibold">
                      <span className="font-normal text-gray-400">The total of your cart is:</span>{' '}
                      ${countTotalPrice()}
                    </p>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => {
                        if (isLoggedIn) {
                          console.log('send data to the server and create payment link');
                          router.push('/checkout');
                        } else {
                          router.push('/auth/sign-in');
                        }
                        setOpen(false);
                      }}
                      className="w-1/2 rounded-md bg-green-700 py-2 uppercase text-white"
                    >
                      Checkout
                    </button>
                  </div>
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
