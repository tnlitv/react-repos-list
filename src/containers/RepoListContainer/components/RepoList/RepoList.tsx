import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, CircularProgress } from '@material-ui/core';
import RepoListItem from '../RepoListItem';
import { Maybe, SearchResultItemEdge } from '../../../../generated/graphql';

interface Props {
    data?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
    loadMore: (page: number) => void;
    hasMore: boolean;
}

const RepoList: React.FC<Props> = ({ data, loadMore, hasMore }: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Stars</TableCell>
                        <TableCell align="right">Forks</TableCell>
                    </TableRow>
                </TableHead>

                {!!data && (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={loadMore}
                        hasMore={hasMore}
                        initialLoad={false}
                        element={'tbody'}
                        loader={<Loader data-testid="repo-list-loader" />}
                    >
                        {data.map(({ node }: any) => node && <RepoListItem repository={node} />)}
                    </InfiniteScroll>
                )}
            </Table>
        </TableContainer>
    );
};

const Loader = () => (
    <TableRow>
        <ProgressContainer colSpan={4}>
            <CircularProgress />
        </ProgressContainer>
    </TableRow>
);

const ProgressContainer = styled.td`
    text-align: center;
    padding: 8px 0;
`;

export default RepoList;
