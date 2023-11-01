import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import * as classes from '../character-collection.styles';

interface Props {
  onCreateCharacter: () => void;
  onPaginate: {
    handleFirstPage: () => void;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handleLastPage: () => void;
  };
}

export const CharacterMenu: React.FunctionComponent<Props> = (props) => {
  const { onCreateCharacter, onPaginate } = props;

  return (
    <div className={classes.menu}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onPaginate.handleFirstPage}
        startIcon={<FirstPageIcon />}
      >
        First
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onPaginate.handlePreviousPage}
        startIcon={<ArrowBackIosIcon />}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onPaginate.handleNextPage}
        endIcon={<ArrowForwardIosIcon />}
      >
        Next
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onPaginate.handleLastPage}
        endIcon={<LastPageIcon />}
      >
        Last
      </Button>
    </div>
  );
};
