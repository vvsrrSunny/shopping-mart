import { StarIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/helpers';
import { fetchProduct } from '@/apis/products';
import { Product } from '@/types/types';
import NotFound from '@/app/not-found';
import { redirect } from 'next/navigation';
import ProductDetails from './ProductDetails';

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // await new Promise(resolve => setTimeout(resolve, 3000));
  let product: Product = {} as Product;

    product = await fetchProduct(slug);

  return (
      <ProductDetails product={product} />
  );
};

export default ProductPage;
