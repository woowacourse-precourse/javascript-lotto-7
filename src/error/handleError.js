import ValidationError from './ValidationError.js';

export function handleError(validation) {
  const { success, message } = validation();

  if (!success) {
    throw new ValidationError(message);
  }
}

export function handleErrors(validations = []) {
  validations.forEach((func) => handleError(func));
}
