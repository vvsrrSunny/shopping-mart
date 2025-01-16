import ProductDetails from './ProductDetails';
import { Product } from '@/types/types';
import NotFound from '@/not-found';
import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  let product: Product | undefined;
  try {
    const { data } = await client.query({
      query: gql`
        query GetProducts {
          product(id: "${slug}") {
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

    product = data.product;
    if (product === undefined) {
      return <NotFound />;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return <NotFound />;
  }
  return <ProductDetails product={product} />;
};

export default ProductPage;
