import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../../core/api';

let characterCollection = [...mockCharacterCollection];

interface CharacterCollectionResponse {
  characters: {
    results: CharacterEntityApi[];
  };
}

export interface CharacterCollectionVariables {
  page: number;
  filter: string;
}

export const getCharacterCollection = async ({page, filter}: CharacterCollectionVariables): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
  query ($page: Int!, $filter: String!) { 
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
        location {
          name
        }
      }
    }
  }
`;

  const { characters } =
    await graphQLClient.request<CharacterCollectionResponse>(query, {page, filter});

  return characters.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
