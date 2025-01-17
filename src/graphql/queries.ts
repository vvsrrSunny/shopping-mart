import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
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
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug) {
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
`;
