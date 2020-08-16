import {InMemoryCache, makeVar} from "@apollo/client";
import {relayStylePagination} from "@apollo/client/utilities";
import AuthService from './services/AuthService';

export const searchTermVar = makeVar('react');

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                search: relayStylePagination(["query"]),
                searchTerm: {
                    read() {
                        return searchTermVar();
                    }
                },
                isLoggedIn: {
                    read() {
                        return AuthService.isLoggedIn();
                    }
                }
            },
        },
    },
})