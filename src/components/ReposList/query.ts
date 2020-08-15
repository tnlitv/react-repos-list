import gql from 'graphql-tag';

export const QUERY_REPOS_LIST = gql`
    query Repositories {
        search(query: "react", type: REPOSITORY, first: 10) {
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        forkCount
                        stargazers {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`;
