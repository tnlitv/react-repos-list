import React from 'react';
import styled from 'styled-components';
import { Container, Paper } from '@material-ui/core';
import Header from '../../containers/Header';
import RepoListContainer from '../../containers/RepoListContainer';
import SearchBar from '../../containers/SearchBar';

const Search: React.FC = () => (
    <>
        <Header />
        <StyledPaper>
            <Container maxWidth="md">
                <SearchBar />
            </Container>
        </StyledPaper>
        <StyledContainer maxWidth="md">
            <RepoListContainer />
        </StyledContainer>
    </>
);

const StyledPaper = styled(Paper)`
    top: 64px;
    position: fixed;
    padding: 16px 0;
    width: 100%;
    z-index: 1;
`;

const StyledContainer = styled(Container)`
    position: relative;
    top: 150px;
    margin-bottom: 50px;
`;

export default Search;
