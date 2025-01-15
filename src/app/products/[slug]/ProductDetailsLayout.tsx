import React, { ReactNode } from 'react';

interface ProductLayoutProps {
  children: ReactNode;
}

const ProductDetailsLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div className="pb-16 pt-6 sm:pb-24">
      <div className="mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">{children}</div>
      </div>
    </div>
  );
};

export default ProductDetailsLayout;
