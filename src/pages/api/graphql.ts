import { NextApiRequest, NextApiResponse } from 'next';
import { graphql } from 'graphql';
import { schema } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';

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

      if (result.errors) {
        res.status(500).json({ errors: result.errors });
        return;
      }

      res.status(200).json(result);
    } catch (error) {
      console.error('GraphQL Error:', error);
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
