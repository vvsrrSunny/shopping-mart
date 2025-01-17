import React from 'react';
import { Product } from '@/types/types';
import Ratings from '@/components/server/Ratings';
import Image from 'next/image';
import ProductDetailsLayout from './ProductDetailsLayout';
import ProductAddToCart from '@/components/ProductAddToCart';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <ProductDetailsLayout>
      <div className="lg:col-span-5 lg:col-start-8">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium text-gray-900">{product.title}</h1>
          <p className="text-xl font-medium text-gray-900">{product.price}</p>
        </div>
        {/* Reviews */}
        <div className="mt-4">
          <h2 className="sr-only">Reviews</h2>
          <div className="flex items-center">
            <p className="text-sm text-gray-700">
              {product.rating.rate}
              <span className="sr-only"> out of 5 stars</span>
            </p>
            <Ratings rating={product.rating.rate} className="ml-1" />
            <div className="ml-4 flex">
              <a href="#" className="text-sm font-medium text-green-700 hover:text-green-800">
                See all {product.rating.count} reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <h2 className="sr-only">Images</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
          <Image
            alt={product.title}
            src={product.image}
            width={200}
            height={160}
            priority={true}
            className="h-auto w-auto rounded-lg lg:col-span-2 lg:row-span-2"
          />
        </div>
      </div>

      <div className="mt-8 lg:col-span-5">
        <ProductAddToCart product={product} />

        {/* Product details */}
        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Description</h2>

          <div className="mt-4 space-y-4 text-sm/6 text-gray-500" />
          <p className="text-sm text-gray-600">{product.description} </p>
        </div>
      </div>
    </ProductDetailsLayout>
  );
};

export default ProductDetails;
