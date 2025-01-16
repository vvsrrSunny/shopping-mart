import React from 'react';
import ProductsLayout from './ProductsLayout';

const Loading: React.FC = () => {
  return (
    <ProductsLayout>
      {/* Skeleton Loading for Each Product */}
      {[...Array(12)].map((_, index) => (
        <div key={index} className="group relative border-b border-r border-gray-100 p-4 sm:p-6">
          {/* Skeleton for Image */}
          <div className="aspect-square animate-pulse rounded-lg bg-gray-100" />

          <div className="pb-4 pt-10 text-center">
            {/* Skeleton for Product Title */}
            <div className="mx-auto mb-2 h-4 w-3/4 animate-pulse rounded bg-slate-300" />

            <div className="mt-3 flex flex-col items-center">
              {/* Skeleton for Rating */}
              <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-slate-300" />

              {/* Skeleton for Review Count */}
              <div className="mb-4 h-4 w-1/3 animate-pulse rounded bg-slate-300" />
            </div>

            {/* Skeleton for Price */}
            <div className="mx-auto mt-1 h-4 w-1/4 animate-pulse rounded bg-slate-300" />
          </div>
        </div>
      ))}
    </ProductsLayout>
  );
};

export default Loading;
