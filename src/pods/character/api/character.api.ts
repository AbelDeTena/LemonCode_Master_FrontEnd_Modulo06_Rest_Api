import { Character, LocationApi } from './character.api-model';

const BASE_URL = process.env.BASE_URL;

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterEndpoint = `${BASE_URL}/character/${id}`;
  let characterApi: Character | null = null;

  try {
    const response = await fetch(characterEndpoint);

    if (response.ok) {
      characterApi = await response.json();
    }

    return characterApi;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async (): Promise<LocationApi[]> => {
  let locationEndpoint = `${BASE_URL}/location`;
  let locationsApi: LocationApi[] = [];

  try {
    const response = await fetch(locationEndpoint);

    if (response.ok) {
      const responseJson = await response.json();
      locationsApi = responseJson.results;
    }

    return locationsApi;
  } catch (error) {
    console.log(error);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
