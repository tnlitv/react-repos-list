import React from 'react';
import { InMemoryCache } from '@apollo/client';
import { cleanup, renderMockedProvider, waitFor } from '../../test-utils';
import { GET_REPOSITORIES } from './GetRepositoriesQuery';
import RepoListContainer, { PAGE_SIZE } from './RepoListContainer';

const REPO = {
    cursor: 'cursor',
    node: {
        forkCount: 1,
        id: 'id',
        name: 'react',
        owner: { __typename: 'Organization', login: 'facebook' },
        stargazers: { __typename: 'StargazerConnection', totalCount: 1 },
        url: 'https://github.com/facebook/react',
        __typename: 'Repository',
    },
    __typename: 'SearchResultItemEdge',
};

const REPOSITORIES = {
    searchTerm: 'searchTerm',
    search: {
        edges: [REPO],
        pageInfo: {
            hasNextPage: true,
            endCursor: 'cursor',
        },
        repositoryCount: 1,
    },
};

describe('RepoListContainer', () => {
    afterEach(cleanup);

    it('renders list of repositories', async () => {
        const mocks = [
            {
                request: { query: GET_REPOSITORIES, variables: { query: 'searchTerm', first: PAGE_SIZE, after: null } },
                result: { data: REPOSITORIES },
            },
        ];

        const cache = new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        searchTerm: {
                            read() {
                                return 'searchTerm';
                            },
                        },
                    },
                },
            },
        });
        const { getByTestId, queryAllByTestId } = renderMockedProvider(<RepoListContainer />, {
            mocks,
            cache,
            addTypename: true,
        });
        await waitFor(() => {
            getByTestId('repo-list-item');
        });

        return expect(queryAllByTestId('repo-list-item').length).toBe(REPOSITORIES.search.edges.length);
    });
});
