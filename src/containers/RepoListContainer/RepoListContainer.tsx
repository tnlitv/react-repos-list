import React from 'react';
import ErrorBox from '../../components/ErrorBox';
import Loader from '../../components/Loader';
import RepoList from './components/RepoList';
import { useRepositoriesQuery, useGetSearchTermQuery } from '../../generated/graphql';

export const PAGE_SIZE = 25;

const RepoListContainer: React.FC = () => {
    const { data: search } = useGetSearchTermQuery();
    const query = search ? search.searchTerm : '';
    const { data, error, loading, fetchMore } = useRepositoriesQuery({
        variables: {
            query,
            first: PAGE_SIZE,
            after: null,
        },
    });

    if (loading) {
        return <Loader />;
    }
    if (error || !data) {
        return <ErrorBox />;
    }

    return (
        <RepoList
            data={data.search.edges}
            hasMore={data.search.pageInfo.hasNextPage}
            loadMore={() =>
                fetchMore({
                    variables: {
                        query,
                        first: PAGE_SIZE,
                        after: data.search.pageInfo.endCursor,
                    },
                })
            }
        />
    );
};

export default RepoListContainer;
