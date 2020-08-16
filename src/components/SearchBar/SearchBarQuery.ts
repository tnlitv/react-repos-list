import gql from 'graphql-tag';

export const GET_SEARCH_TERM = gql`
  query GetSearchTerm {
    searchTerm @client
  }
`;