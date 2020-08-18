import React from 'react';
import RepoList from './RepoList';
import { render, cleanup } from '../../../../test-utils';
import { SearchResultItemEdge } from '../../../../generated/graphql';

const REPO = {
    cursor: '1',
    node: {
        id: '1',
        name: 'react',
        forkCount: 1,
        stargazers: {
            totalCount: 1,
        },
        url: 'https://github.com/facebook/react',
        owner: {
            login: 'facebook',
        },
    },
} as SearchResultItemEdge;

describe('RepoList', () => {
    afterEach(cleanup);

    it('renders without error', () => {
        const data = [REPO];
        const hasMore = false;
        const loadMore = jest.fn();
        render(<RepoList data={data} hasMore={hasMore} loadMore={loadMore} />);
    });
});
