import { Product } from '@/types/types';
import Products from './Products';
import NotFound from '@/not-found';
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    const { data } = await client.query({
      query: gql`
        query GetProducts {
          products {
            id
            title
            price
            description
            image
            rating {
              count
              rate
            }
          }
        }
      `,
    });
    products = data.products;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <NotFound />;
  }

  return <Products products={products} />;
}
