import React, {useState} from 'react';
import styled from "styled-components";
import { InputLabel, TextField, Container, Typography, Link} from "@material-ui/core";
import AuthService from "../../services/AuthService/index";

export const Login = () => {
    const [token, setToken] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AuthService.login(token);
    };

    return <StyledContainer maxWidth="sm">
        <StyledForm onSubmit={onSubmit}>
            <div>
                <InputLabel>Github Token</InputLabel>
                <StyledTextField
                    value={token}
                    onChange={onChange}
                    fullWidth
                />
            </div>
        </StyledForm>
        <Typography variant="caption">
            Learn how to create a github personal access token {' '}
            <Link
                href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"
                target="_blank">
                here
            </Link>
        </Typography>
    </StyledContainer>;
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 100%
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 8px;
`;

export default Login;