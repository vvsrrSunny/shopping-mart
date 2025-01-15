import React from 'react';
import ProductDetailsLayout from './ProductDetailsLayout';

const ProductLoading: React.FC = () => {
  return (
    <ProductDetailsLayout>
      {/* Product Info Section (Title, Price, Reviews) */}
      <div className="lg:col-span-5 lg:col-start-8">
        <div className="h-8 w-3/4 animate-pulse rounded bg-slate-300"></div>
        {/* Reviews Section */}
        <div className="mt-4 animate-pulse">
          <div className="flex items-center">
            <div className="h-6 w-1/3 rounded bg-yellow-100"></div>
            <div className="ml-4 h-6 w-1/3 rounded bg-green-100"></div>
          </div>
        </div>
      </div>

      {/* Product Image Section */}
      <div className="mt-8 animate-pulse lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <div className="h-64 w-full rounded-lg bg-slate-300"></div>
      </div>

      {/* Product Details & Add to Cart Section */}
      <div className="mt-8 lg:col-span-5">
        {/* Add to Cart Button */}
        <button
          type="submit"
          className="mt-8 flex w-full animate-pulse items-center justify-center rounded-md border border-transparent bg-green-100 px-8 py-3 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Loading...
        </button>

        {/* Product Description Section */}
        <div className="mt-10 animate-pulse">
          <h2 className="h-6 w-1/4 rounded bg-slate-300"></h2>
          <div className="mt-4 space-y-4 text-sm text-gray-500">
            <div className="h-4 w-3/4 rounded bg-slate-300"></div>
            <div className="h-4 w-1/2 rounded bg-slate-300"></div>
            <div className="h-4 w-2/3 rounded bg-slate-300"></div>
          </div>
        </div>
      </div>
    </ProductDetailsLayout>
  );
};

export default ProductLoading;
