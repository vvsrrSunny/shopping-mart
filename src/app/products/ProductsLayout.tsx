import React from 'react';

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <h2 className="sr-only">Products</h2>

      <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export default ProductsLayout;
