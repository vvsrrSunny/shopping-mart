'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartProvider';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loading from '../products/loading';

const CheckoutPage: React.FC = () => {
  const { countTotalPrice, items: cartItems, removeFromCart, updateCart } = useCart();
  const { status } = useSession();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem('cartItems');
    if (result !== null) {
      console.log(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    if (status === 'loading') {
      // Session status is still loading, return early and don't do anything
      return;
    }
    if (status === 'authenticated') setIsLoggedIn(true);
    else setIsLoggedIn(false);

    // If not logged in, redirect to the login page
    if (!(status === 'authenticated')) {
      router.push('/auth/sign-in');
    }
  }, [status, router, isLoggedIn]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (isLoggedIn) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="py-4 text-2xl">Checkout</h1>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.product.id} className="p-4">
              <div className="flex space-x-4">
                <Image
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                  className="rounded object-scale-down"
                  width={64}
                  height={64}
                />
                <div className="flex-1">
                  <h2 className="font-semibold">Smartphone Case</h2>
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

        <div className="flex flex-col items-end py-4">
          <h1 className="text-xl font-semibold uppercase">Total</h1>
          <p className="font-semibold">
            <span className="font-normal text-gray-400">The total of your cart is:</span> $
            {countTotalPrice()}
          </p>

          <button
            onClick={() => {
              console.log('Handle Payment Process...');
            }}
            className="mt-4 rounded-md bg-green-700 px-6 py-2 uppercase text-white hover:opacity-75"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default CheckoutPage;
