import { NextApiRequest, NextApiResponse } from 'next';
import { graphql, buildSchema } from 'graphql';
import { Product } from '@/types/types';

// Define the GraphQL schema
const schema = buildSchema(`
  type Product {
    id: ID
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
  }

  type Rating {
    rate: Float
    count: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`);

// Define the resolvers
const resolvers = {
  products: async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  },
  product: async ({ id }: { id: number }): Promise<Product> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  },
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const { query, variables } = req.body;

    try {
      const result = await graphql({
        schema,
        source: query,
        rootValue: resolvers,
        variableValues: variables,
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
