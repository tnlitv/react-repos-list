import React from 'react';
import styled from "styled-components";
import {CircularProgress, Typography} from "@material-ui/core";
import {useRepositoriesQuery, useGetSearchTermQuery} from '../../generated/graphql';
import ReposList from "../ReposList/ReposList";

const PAGE_SIZE = 25;

const ReposListContainer = () => {
    const {data: search} = useGetSearchTermQuery();
    const query = search ? search.searchTerm : '';
    const {data, error, loading, fetchMore} = useRepositoriesQuery({
        variables: {
            query,
            first: PAGE_SIZE,
            after: null
        }
    });

    if (loading) {
        return <CenterWrapper> <CircularProgress/> </CenterWrapper>;
    }

    if (error || !data) {
        return <CenterWrapper> <Typography>Couldn't load data</Typography> </CenterWrapper>;
    }

    return <ReposList
        data={data.search.edges}
        hasMore={data.search.pageInfo.hasNextPage}
        loadMore={() => fetchMore({
            variables: {
                query,
                first: PAGE_SIZE,
                after: data.search.pageInfo.endCursor
            }
        })}
    />;
};

const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export default ReposListContainer;