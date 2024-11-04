import { VALIDATION_ERRORS } from '../constants/constants.js';
import { validateNumber, validateInteger, validateNumberRange } from './CommonValidations.js';
import validateCondition from '../utils/validateCondition.js';

const validateDuplicate = (number, winningNumbers) => {
  validateCondition(winningNumbers.some((winningNumber) => winningNumber === number), VALIDATION_ERRORS.BONUS_NUMBER.DUPLICATE);
}

const BonusNumberValidations = (number, winningNumbers) => {
  validateNumber(number);
  validateInteger(number);
  validateNumberRange(number);
  validateDuplicate(number, winningNumbers);
};

export default BonusNumberValidations;
