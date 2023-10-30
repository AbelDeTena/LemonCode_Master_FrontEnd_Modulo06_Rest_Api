import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

interface ValidatorProps {
  value: string;
  customArgs: string[];
}

interface ValidationResult {
  succeeded: boolean;
  type: string;
  message: string;
}

export const acceptedValuesValidator = (fieldValidatorArgs:ValidatorProps):ValidationResult => {
  const { value, customArgs } = fieldValidatorArgs;
  const validationResult = {
    succeeded: false,
    type: 'ACCEPTED_VALUES_VALIDATOR',
    message: `Value should be equal to some of: ${customArgs.join(', ')}`,
  };
  if (customArgs.includes(value)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
}

const StatusList = ['Alive', 'Dead', 'unknown'];
const GenderList = ['Female', 'Male', 'Genderless', 'unknown'];

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    location: [Validators.required],
    gender: [
      {
        validator: acceptedValuesValidator,
        customArgs: GenderList
      }
    ],
    species: [Validators.required],
    status: [
      {
      validator: acceptedValuesValidator,
      customArgs: StatusList
      }
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
