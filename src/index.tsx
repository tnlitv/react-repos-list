import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, NormalizedCacheObject, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StylesProvider } from '@material-ui/core/styles';
import App from './pages/App/App';
import GlobalStyle from './GlobalStyle';
import { cache } from './cache';
import LocalStorageTokenService from './services/LocalStorageTokenService';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GITHUB_SCHEMA_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = LocalStorageTokenService.getToken();
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_SCHEMA_URL,
    cache: cache,
    link: authLink.concat(httpLink),
    resolvers: {},
});

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <GlobalStyle />
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
