'use client';

import { useCart } from '@/context/CartProvider';
import { Product } from '@/types/types';
import { FC } from 'react';

interface Props {
  product: Product;
}

const BuyingOptions: FC<Props> = ({ product }) => {
  const { updateCart } = useCart();
  const onAddToCartClick = () => {
    console.log('Add to cart clicked');
    updateCart(product, 1);
  };

  return (
    <div className="flex flex-col space-y-2 p-2 lg:flex-row lg:space-x-2 lg:space-y-0">
      <button className="flex-1 rounded-md bg-green-700 p-1 text-white">Buy Now</button>
      <button
        onClick={onAddToCartClick}
        className="flex-1 rounded-md border-2 border-green-700 p-1 text-gray-800 z-10"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BuyingOptions;
