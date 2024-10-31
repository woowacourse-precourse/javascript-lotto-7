import { LOTTO_CONFIG, VALIDATE_MESSAGES } from '../constants/constants.js';

const validateLottoNumberCount = (numbers) => {
  if (numbers.length !== LOTTO_CONFIG.NUMBERS_COUNT) {
    throw new Error(VALIDATE_MESSAGES.LOTTO_NUMBERS.COUNT);
  }
};

const validateNumber = (numbers) => {
  const isNumber = (number) => isNaN(number);
  if (numbers.some(isNumber)) {
    throw new Error(VALIDATE_MESSAGES.LOTTO_NUMBERS.NUMBER);
  }
};

const validateInteger = (numbers) => {
  const isInteger = (number) => !Number.isInteger(number);
  if (numbers.some(isInteger)) {
    throw new Error(VALIDATE_MESSAGES.LOTTO_NUMBERS.INTEGER);
  }
};

const validateLottoRange = (numbers) => {
  const checkRange = (number) => number < LOTTO_CONFIG.NUMBER_RANGE.MIN || number > LOTTO_CONFIG.NUMBER_RANGE.MAX;
  if (numbers.some(checkRange)) {
    throw new Error(VALIDATE_MESSAGES.LOTTO_NUMBERS.RANGE);
  }
};

const validateDuplicate = (numbers) => {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== numbers.length) {
    throw new Error(VALIDATE_MESSAGES.LOTTO_NUMBERS.DUPLICATE);
  }
};

const validateLottoNumbers = (numbers) => {
  validateLottoNumberCount(numbers);
  validateNumber(numbers);
  validateInteger(numbers);
  validateLottoRange(numbers);
  validateDuplicate(numbers);
};

export default validateLottoNumbers;
