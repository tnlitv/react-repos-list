import gql from 'graphql-tag';

export const QUERY_REPOS_LIST = gql`
    query Repositories($query: String!, $first: Int, $after: String) {
        searchTerm @client @export(as: "query")
        search(query: $query, type: REPOSITORY, first: $first, after: $after) {
            edges {
                cursor
                node {
                    ... on Repository {
                        id
                        name
                        forkCount
                        stargazers {
                            totalCount
                        }
                        url
                        owner {
                          login
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
            repositoryCount
        }
    }
`;
