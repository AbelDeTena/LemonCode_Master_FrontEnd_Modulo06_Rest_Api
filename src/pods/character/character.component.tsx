import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik'; // Asegúrate de importar Field
import Button from '@mui/material/Button';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Lookup } from '../../common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  locations: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, locations, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {(props) => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <SelectComponent
            name="locations"
            label="Locations"
            items={locations}
          />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="status" label="Status" />

          <div>
          <h2>Best Sentences</h2>
            <FieldArray
              name="bestSentences"
              render={(arrayHelpers) => (
                <div>
                  {props.values.bestSentences &&
                  props.values.bestSentences.length > 0 ? (
                    props.values.bestSentences.map((sentence, index) => (
                      <div key={index}>
                        <Field
                          name={`bestSentences.${index}`}
                          component="input"
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')}
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      Add a sentence
                    </button>
                  )}
                </div>
              )}
            />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
