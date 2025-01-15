import Ratings from '@/components/Ratings';
import { Product } from '@/types/types';
import { classNames } from '@/utils/helpers';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import ProductsLayout from './ProductsLayout';

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
              <img
                alt={product.title}
                src={product.image}
                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
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
                <p className="mt-4 text-base font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
          </ ProductsLayout>
  );
}
