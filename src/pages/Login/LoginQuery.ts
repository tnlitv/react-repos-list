import gql from 'graphql-tag';

export const GET_IS_LOGGED_IN = gql`
  query GetIsLoggedIn {
    isLoggedIn @client
  }
`;