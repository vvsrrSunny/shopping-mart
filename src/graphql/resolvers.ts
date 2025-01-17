import { fetchProductById, fetchProducts } from '@/apis/products';
import { Product } from '@/types/types';
import { GraphQLError } from 'graphql';

export const resolvers = {
  products: async (): Promise<Product[]> => {
    try {
      return await fetchProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new GraphQLError('Failed to fetch products', {
        extensions: { code: 'FETCH_PRODUCTS_ERROR' },
      });
    }
  },
  product: async ({ id }: { id: string }): Promise<Product | null> => {
    try {
      const product = await fetchProductById(id);
      return product;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      if (error instanceof Error && error.message.includes('Product not found')) {
        throw new GraphQLError('Product not found', {
          extensions: { code: 'PRODUCT_NOT_FOUND', id },
        });
      }
      throw new GraphQLError('Failed to fetch product', {
        extensions: { code: 'FETCH_PRODUCT_ERROR', id },
      });
    }
  },
};
