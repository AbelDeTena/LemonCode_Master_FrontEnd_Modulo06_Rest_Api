import { GraphQLClient } from 'graphql-request';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

export const graphQLClient = new GraphQLClient(BASE_URL);