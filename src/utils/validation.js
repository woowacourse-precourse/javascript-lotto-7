import { INPUT_ERROR, LOTTO_ERROR } from '../constants/error.js';
import { LOTTO_NUMBER_RANGE } from '../constants/lottoNumbers.js';

const isBlank = input => input === '';

const isNumber = input => !Number.isNaN(Number(input));

const isThousandUnit = input => Number(input) % 1000 === 0;

const validateWinningNumbers = input => {
  if (isBlank(input)) {
    throw new Error(INPUT_ERROR.inputBlankError);
  }

  const NUMBERS = input.split(',').map(num => Number(num.trim()));

  const regex = /^(\d+)(,\s*\d+)*$/;
  if (!regex.test(NUMBERS)) {
    throw new Error(LOTTO_ERROR.lottoDelimiterError);
  }

  if (NUMBERS.length !== LOTTO_NUMBER_RANGE.count) {
    throw new Error(LOTTO_ERROR.lottoLengthError);
  }

  const UNIQUE_NUMBERS = new Set([...NUMBERS]);
  if (UNIQUE_NUMBERS.size !== NUMBERS.length) {
    throw new Error(LOTTO_ERROR.lottoDuplicateError);
  }

  NUMBERS.forEach(number => {
    if (
      number < LOTTO_NUMBER_RANGE.minimum ||
      number > LOTTO_NUMBER_RANGE.maximum
    ) {
      throw new Error(LOTTO_ERROR.lottoRangeError);
    }
  });

  return NUMBERS;
};

const validateBonusNumber = (bonusNumber, winningNumbers) => {
  if (isBlank(bonusNumber)) {
    throw new Error(INPUT_ERROR.inputBlankError);
  }

  const NUMBER = Number(bonusNumber);

  if (Number.isNaN(NUMBER)) {
    throw new Error(INPUT_ERROR.inputTypeError);
  }

  if (
    NUMBER < LOTTO_NUMBER_RANGE.minimum ||
    NUMBER > LOTTO_NUMBER_RANGE.maximum
  ) {
    throw new Error(LOTTO_ERROR.lottoRangeError);
  }
  if (winningNumbers.includes(NUMBER)) {
    throw new Error(LOTTO_ERROR.bonusDuplicateError);
  }

  return NUMBER;
};

export {
  isBlank,
  isNumber,
  isThousandUnit,
  validateWinningNumbers,
  validateBonusNumber,
};
