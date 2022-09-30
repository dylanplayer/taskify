import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface Props {
  children: React.ReactNode;
}

export const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function Graphql({children}: Props) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
