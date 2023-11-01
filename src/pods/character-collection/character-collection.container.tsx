import * as React from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {  
  const [variables, setVariables] = React.useState({ page: 1, filter: '' });  
  const [debouncedFilter] = useDebounce(variables.filter, 1000);
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection(variables);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [variables.page, debouncedFilter]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id.toString()));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  const handlePagination = {
    handleFirstPage: () => {
      setVariables((prevVariables) => ({
        ...prevVariables,
        page: 1,
      }));
    },
  
    handlePreviousPage: () => {
      if (variables.page > 1) {
        setVariables((prevVariables) => ({
          ...prevVariables,
          page: prevVariables.page - 1,
        }));
      }
    },
  
    handleNextPage: () => {
      if (variables.page < 42) {
        setVariables((prevVariables) => ({
          ...prevVariables,
          page: prevVariables.page + 1,
        }));
      }
    },
  
    handleLastPage: () => {
      setVariables((prevVariables) => ({
        ...prevVariables,
        page: 42,
      }));
    },
  };
  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVariables((prevVariables) => ({
      ...prevVariables,
      filter: e.target.value,
    }));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onPaginate={handlePagination}
      onSearch={handleSearch}
    />
  );
};
