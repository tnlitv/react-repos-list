import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, NormalizedCacheObject, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_SCHEMA_URL,
    cache: new InMemoryCache(),
    headers: {
        authorization: `bearer ${localStorage.getItem('token') || process.env.REACT_APP_GITHUB_TOKEN}`,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
