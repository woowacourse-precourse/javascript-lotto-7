import { LOTTO_CONFIG, VALIDATION_ERRORS } from '../constants/constants.js';
import { validateAllNumber, validateAllInteger, validateAllNumberRange } from './CommonValidations.js';

const validateLottoNumberCount = (numbers) => {
  if (numbers.length !== LOTTO_CONFIG.NUMBERS_COUNT) {
    throw new Error(VALIDATION_ERRORS.LOTTO_NUMBERS.COUNT);
  }
};

const validateDuplicate = (numbers) => {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== numbers.length) {
    throw new Error(VALIDATION_ERRORS.LOTTO_NUMBERS.DUPLICATE);
  }
};

const LottoNumbersValidations = (numbers) => {
  validateLottoNumberCount(numbers);
  validateAllNumber(numbers);
  validateAllInteger(numbers);
  validateAllNumberRange(numbers);
  validateDuplicate(numbers);
};

export default LottoNumbersValidations;
