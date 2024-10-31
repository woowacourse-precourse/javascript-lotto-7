import { VALIDATION_ERRORS } from '../constants/constants.js';
import { validateNumber, validateInteger, validateNumberRange } from './CommonValidations.js';

const validateDuplicate = (number, winningNumbers) => {
  const isDuplicate = (winningNumber) => winningNumber === number;
  if (winningNumbers.some(isDuplicate)) {
    throw new Error(VALIDATION_ERRORS.BONUS_NUMBER.DUPLICATE);
  }
}

const BonusNumberValidations = (number, winningNumbers) => {
  validateNumber(number);
  validateInteger(number);
  validateNumberRange(number);
  validateDuplicate(number, winningNumbers);
};

export default BonusNumberValidations;
