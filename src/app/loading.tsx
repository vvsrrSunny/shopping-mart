import React from 'react';

const Loading: React.FC = () => {
  return (
      <div className="">
        <h2 className="sr-only">Loading My company Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {/* Skeleton Loading for Each Product */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="group relative border-b border-r border-gray-100 p-4 sm:p-6"
            >
              {/* Skeleton for Image */}
              <div className="animate-pulse aspect-square rounded-lg bg-gray-100" />

              <div className="pb-4 pt-10 text-center">
                {/* Skeleton for Product Title */}
                <div className="animate-pulse h-4 bg-slate-300 rounded w-3/4 mx-auto mb-2" />

                <div className="mt-3 flex flex-col items-center">
                  {/* Skeleton for Rating */}
                  <div className="animate-pulse h-4 bg-slate-300 rounded w-1/2 mb-2" />

                  {/* Skeleton for Review Count */}
                  <div className="animate-pulse h-4 bg-slate-300 rounded w-1/3 mb-4" />
                </div>

                {/* Skeleton for Price */}
                <div className="animate-pulse h-4 bg-slate-300 rounded w-1/4 mx-auto mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Loading;
