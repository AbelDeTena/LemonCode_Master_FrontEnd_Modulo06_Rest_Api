import { Character, LocationApi } from './character.api-model';

const BASE_URL = '/api';

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterApi: Character | null = null;
  try {    
    const response = await fetch(`${BASE_URL}/characters/${id}`);

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
    const response = await fetch(`${BASE_URL}/locations`);

    if (response.ok) {
      const responseJson = await response.json();
      locationsApi = responseJson;
    }

    return locationsApi;
  } catch (er) {
    console.log(er);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id > 0) {
    await fetch(`${BASE_URL}/characters/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    });
  } else {
    await fetch(`${BASE_URL}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    });
  }
  return true;
};
