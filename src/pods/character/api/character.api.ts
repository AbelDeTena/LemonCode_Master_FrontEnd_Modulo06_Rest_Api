import { Character, LocationApi } from './character.api-model';

// const BASE_URL = 'https://rickandmortyapi.com/api';
const BASE_URL = '/api';

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterApi: Character | null = null;
  try {    
    const response = await fetch(`${BASE_URL}/character/${id}`);

    if (response.ok) {
      characterApi = await response.json();
    }

    return characterApi;
  } catch (er) {
    console.log(er);
  }
};

export const getLocations = async (): Promise<LocationApi[]> => {
  let locationsApi: LocationApi[] = [];
  try {    
    const response = await fetch(`${BASE_URL}/location`);

    if (response.ok) {
      const responseJson = await response.json();
      locationsApi = responseJson.results;
    }

    return locationsApi;
  } catch (er) {
    console.log(er);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
