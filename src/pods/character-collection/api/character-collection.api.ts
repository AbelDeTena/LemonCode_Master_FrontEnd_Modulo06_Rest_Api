import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const BASE_URL = 'https://rickandmortyapi.com/api/';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await axios.get(`${BASE_URL}character/`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching character collection:', error);
    throw error;
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
