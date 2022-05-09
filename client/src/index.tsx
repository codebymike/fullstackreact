import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { Listings } from './sections';

const client = new ApolloClient({ 
  uri: '/api', 
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
     <Listings title="Listings"  />
    </ApolloProvider>
  </React.StrictMode>
);
