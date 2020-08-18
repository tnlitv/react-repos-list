import React from 'react';
import Header from './Header';
import { cleanup, renderMockedProvider, waitFor } from '../../test-utils';
import { GET_USER } from './GetUserQuery';

describe('Header', () => {
    afterEach(cleanup);

    it('queries user and renders without error', () => {
        const mocks = [
            {
                request: { query: GET_USER },
                result: { data: { viewer: { login: 'github_username' } } },
            },
        ];

        const { getByText } = renderMockedProvider(<Header />, {
            mocks,
            addTypename: false,
        });

        return waitFor(() => getByText(/Logged in as github_username/i));
    });

    it('renders error', () => {
        const mocks = [
            {
                request: { query: GET_USER },
                error: new Error(),
            },
        ];

        const { getByText } = renderMockedProvider(<Header />, {
            mocks,
            addTypename: false,
        });

        return waitFor(() => getByText(/Couldn't fetch user/i));
    });
});
