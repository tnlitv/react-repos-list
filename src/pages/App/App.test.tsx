import React from 'react';
import { InMemoryCache } from '@apollo/client';
import { cleanup, renderMockedProvider, waitFor, MockedComponent } from '../../test-utils';
import { GET_IS_LOGGED_IN } from './GetIsLoggedInQuery';
import App from './App';

jest.mock('../Search', () => {
    return { __esModule: true, default: () => <MockedComponent dataTestId="search"/> };
});
jest.mock('../Login', () => {
    return { __esModule: true, default: () => <MockedComponent dataTestId="login"/> };
});

describe('App', () => {
    afterEach(cleanup);

    it('shows login page if user is not logged in', () => {
        const mocks = [
            {
                request: { query: GET_IS_LOGGED_IN },
                result: { data: { isLoggedIn: false } },
            },
        ];
        const cache = new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        isLoggedIn: {
                            read() {
                                return false;
                            },
                        },
                    },
                },
            },
        });
        const { getByTestId } = renderMockedProvider(<App />, {
            mocks,
            cache,
        });

        return waitFor(() => getByTestId(/login/i));
    });

    it('shows search page if user is logged in', () => {
        const mocks = [
            {
                request: { query: GET_IS_LOGGED_IN },
                result: { data: { isLoggedIn: true } },
            },
        ];
        const cache = new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        isLoggedIn: {
                            read() {
                                return true;
                            },
                        },
                    },
                },
            },
        });

        const { getByTestId } = renderMockedProvider(<App />, {
            mocks,
            cache,
        });

        return waitFor(() => getByTestId('Search'));
    });
});
