import Ratings from '@/components/server/Ratings';
import { Product } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import ProductsLayout from './ProductsLayout';
import BuyingOptions from '@/components/BuyingButtons';

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <ProductsLayout>
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
        >
          <Image
            alt={product.title}
            src={product.image}
            width={200}
            height={160}
            priority={true}
            className="aspect-square h-auto w-auto rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
          />

          <div className="pb-4 pt-10 text-center">
            <h3 className="text-sm font-medium text-gray-900">
              <Link href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
              </Link>
            </h3>
            <div className="mt-3 flex flex-col items-center">
              <Ratings rating={product.rating.rate} />
              <p className="mt-1 text-sm text-gray-500">{product.rating.count} reviews</p>
            </div>
            <p className="mt-1 text-base font-medium text-gray-900">${product.price}</p>
            <BuyingOptions product={product} />
          </div>
        </div>
      ))}
    </ProductsLayout>
  );
}
