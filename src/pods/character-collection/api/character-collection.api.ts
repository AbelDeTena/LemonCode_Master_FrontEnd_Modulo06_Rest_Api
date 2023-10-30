import { CharacterEntityApi } from './character-collection.api-model';

// const BASE_URL = 'https://rickandmortyapi.com/api';
const BASE_URL = '/api';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    
    if (!response.ok) {
      throw new Error(`Error fetching character collection: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching character collection:', error);
    throw error;
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/characters/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error deleting character with ID ${id}: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error(`Error deleting character with ID ${id}:`, error);
    throw error;
  }
};

