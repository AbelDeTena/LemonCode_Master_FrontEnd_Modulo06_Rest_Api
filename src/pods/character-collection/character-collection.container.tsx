import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const [page, setPage] = React.useState(1);
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection({ page: page, filter: '' });
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [page]);

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
      setPage(1);
    },
  
    handlePreviousPage: () => {
      if (page > 1) {
        const newPage = page - 1;
        setPage(newPage);
      }
    },
  
    handleNextPage: () => {
      if (page < 42) {
        const newPage = page + 1;
        setPage(newPage);
      }
    },
  
    handleLastPage: () => {
      setPage(42);
    }
  };
  

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onPaginate={handlePagination}
    />
  );
};
