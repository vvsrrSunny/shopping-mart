import { Product } from '@/types/types';
import Products from './Products';
import NotFound from '@/not-found';
import client from '@/lib/apollo-client';
import { GET_PRODUCTS } from '@/graphql/queries';

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
    });
    products = data.products;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <NotFound />;
  }

  return <Products products={products} />;
}
