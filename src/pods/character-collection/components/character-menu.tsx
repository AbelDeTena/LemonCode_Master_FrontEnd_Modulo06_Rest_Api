import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CharacterMenu: React.FunctionComponent<Props> = (props) => {
  const { onCreateCharacter, onPaginate, onSearch } = props;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
        }}
      >
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
      <div
        style={{
          marginTop: '15px',          
        }}
      >
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          onChange={onSearch}
        />
      </div>
    </div>
  );
};
