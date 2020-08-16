import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import AuthService from '../../services/AuthService';
import { useGetUserQuery } from '../../generated/graphql';

export const Header = () => {
    const { data, error } = useGetUserQuery();

    return (
        <AppBar>
            <Toolbar>
                <Username>
                    {!!data && !!data.viewer && `Logged in as ${data.viewer.login}`}
                    {!!error && "Couldn't fetch user"}
                </Username>
                <Button color="primary" variant="contained" disableElevation onClick={AuthService.logout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const Username = styled(Typography)`
    margin-left: auto;
    margin-right: 16px;
`;

export default Header;
