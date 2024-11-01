import { LOTTO_CONFIG, VALIDATION_ERRORS } from '../constants/constants.js';
import { validateAllNumber, validateAllInteger, validateAllNumberRange } from './CommonValidations.js';
import validateCondition from '../utils/validateCondition.js';

const validateLottoNumberCount = (numbers) => {
  validateCondition(numbers.length !== LOTTO_CONFIG.NUMBERS_COUNT, VALIDATION_ERRORS.LOTTO_NUMBERS.COUNT);
};

const validateDuplicate = (numbers) => {
  validateCondition(new Set(numbers).size !== numbers.length, VALIDATION_ERRORS.LOTTO_NUMBERS.DUPLICATE);
};

const LottoNumbersValidations = (numbers) => {
  validateLottoNumberCount(numbers);
  validateAllNumber(numbers);
  validateAllInteger(numbers);
  validateAllNumberRange(numbers);
  validateDuplicate(numbers);
};

export default LottoNumbersValidations;
