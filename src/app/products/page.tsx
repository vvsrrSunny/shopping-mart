import { Product } from '@/types/types';
import Products from './Products';
import { fetchProducts } from '@/apis/products';
import NotFound from '@/not-found';

export default async function ProductsPage() {
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Error fetching product:', error);
    return <NotFound />;
  }

  return <Products products={products} />;
}
