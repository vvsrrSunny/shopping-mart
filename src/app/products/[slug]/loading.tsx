import React from 'react';

const ProductLoading: React.FC = () => {
  return (
    <div className="pb-16 pt-6 sm:pb-24">
      <div className="mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          {/* Product Info Section (Title, Price, Reviews) */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between animate-pulse">
              <div className="h-8 bg-slate-700 rounded w-1/2"></div>
              <div className="h-8 bg-slate-700 rounded w-1/4"></div>
            </div>
            {/* Reviews Section */}
            <div className="mt-4 animate-pulse">
              <div className="flex items-center">
                <div className="h-6 bg-slate-700 rounded w-16"></div>
                <div className="ml-4 h-6 bg-slate-700 rounded w-24"></div>
              </div>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 animate-pulse">
            <div className="h-64 bg-slate-700 rounded-lg w-full"></div>
          </div>

          {/* Product Details & Add to Cart Section */}
          <div className="mt-8 lg:col-span-5">
            {/* Add to Cart Button */}
            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate-pulse"
            >
              <div className="h-6 bg-slate-700 rounded w-3/4"></div>
            </button>

            {/* Product Description Section */}
            <div className="mt-10 animate-pulse">
              <h2 className="h-6 bg-slate-700 rounded w-1/4"></h2>
              <div className="mt-4 space-y-4 text-sm text-gray-500">
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                <div className="h-4 bg-slate-700 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoading;
