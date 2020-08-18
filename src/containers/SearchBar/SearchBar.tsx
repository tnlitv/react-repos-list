import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormControl, TextField } from '@material-ui/core';
import useDebounce from '../../hooks/useDebounce/useDebounce';
import { searchTermVar } from '../../cache';
import { useGetSearchTermQuery } from '../../generated/graphql';

const INPUT_DELAY = 250;

export const SearchBar: React.FC = () => {
    const { data } = useGetSearchTermQuery();
    const [searchTerm, setSearchTerm] = useState(data ? data.searchTerm : '');
    const debouncedSearchTerm = useDebounce(searchTerm, INPUT_DELAY);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);

    useEffect(() => {
        searchTermVar(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return (
        <StyledFormControl fullWidth>
            <StyledTextField variant="filled" value={searchTerm} onChange={onChange} />
        </StyledFormControl>
    );
};

const StyledFormControl = styled(FormControl)`
    position: sticky;
    background-color: #fff;
    top: 90px;
    z-index: 1;
`;

const StyledTextField = styled(TextField)`
    & .MuiFilledInput-underline:before,
    .MuiFilledInput-underline:after,
    .MuiFilledInput-underline:hover:before {
        border-bottom: none;
    }

    & .MuiFilledInput-input {
        padding: 10px 12px;
    }
`;

export default SearchBar;
