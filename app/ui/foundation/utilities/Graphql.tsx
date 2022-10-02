import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

interface Props {
  children: React.ReactNode;
}

const csrfToken = document
  .querySelector('meta[name=csrf-token]')
  .getAttribute('content');

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

export default function Graphql({children}: Props) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
