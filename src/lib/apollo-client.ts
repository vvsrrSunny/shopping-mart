import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `http://next-graphql-two.vercel.app/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
