import React from 'react';
import { render, cleanup } from '../../../../test-utils';
import RepoListItem, { Repository } from './RepoListItem';

describe('RepoListItem', () => {
    afterEach(cleanup);

    it('renders without error', () => {
        const repository: Repository = {
            id: 'id',
            name: 'name',
            forkCount: 1,
            stargazers: {
                totalCount: 1,
            },
            url: 'url',
            owner: {
                login: 'owner_login',
            },
        };
        render(<RepoListItem repository={repository} />);
    });
});
