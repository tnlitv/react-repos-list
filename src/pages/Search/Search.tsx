import React from 'react';
import styled from "styled-components";
import {Container, Paper} from "@material-ui/core";
import Header from "../../components/Header/Header";
import ReposListContainer from "../../components/ReposListContainer/ReposListContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => <>
    <Header/>
    <StyledPaper>
        <Container maxWidth="md">
            <SearchBar/>
        </Container>
    </StyledPaper>
    <StyledContainer maxWidth="md">
        <ReposListContainer/>
    </StyledContainer>
</>;

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