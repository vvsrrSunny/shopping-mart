import { buildSchema } from 'graphql';

export const schema = buildSchema(`
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
