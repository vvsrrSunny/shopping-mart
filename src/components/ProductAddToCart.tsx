'use client';
import { useCart } from '@/context/CartProvider';
import { Product } from '@/types/types';
import React from 'react';

interface ProductAddToCartProps {
  product: Product;
}

const ProductAddToCart: React.FC<ProductAddToCartProps> = ({ product }) => {
  const { updateCart } = useCart();
  const onAddToCartClick = () => {
    console.log('Add to cart clicked');
    updateCart(product, 1);
  };

  return (
    <button
      type="submit"
      onClick={onAddToCartClick}
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 px-8 py-3 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
    >
      Add to cart
    </button>
  );
};

export default ProductAddToCart;
