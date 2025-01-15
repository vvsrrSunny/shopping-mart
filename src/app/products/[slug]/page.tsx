import { fetchProduct } from '@/apis/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/types/types';
import NotFound from '@/not-found';

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  let product: Product | undefined;
  try {
    product = await fetchProduct(slug);
  } catch (error) {
    console.error('Error fetching product:', error);
    return <NotFound />;
  }
  return <ProductDetails product={product} />;
};

export default ProductPage;
