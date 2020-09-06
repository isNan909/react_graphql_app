import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import JobsWrapper from './pages/JobsWrapper';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
  });
  return (
    <ApolloProvider client={client}>
      <>
        <JobsWrapper />
      </>
    </ApolloProvider>
  );
}

export default App;
