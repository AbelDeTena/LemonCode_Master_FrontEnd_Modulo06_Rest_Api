import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterMenu } from './components/character-menu';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onPaginate: {
    handleFirstPage: () => void;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handleLastPage: () => void;
  };
  onSearch: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    onPaginate,
    onSearch
  } = props;

  return (
    <div className={classes.root}>
      <CharacterMenu
        onCreateCharacter={onCreateCharacter}
        onPaginate={onPaginate}
        onSearch={onSearch}
      />

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
