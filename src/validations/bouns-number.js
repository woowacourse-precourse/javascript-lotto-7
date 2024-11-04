import { ERROR_MESSAGES, LOTTO_NUMBER_RANGE } from '../constants/constants.js';

const { INVALID_BONUS_NUMBER, INVALID_LOTTO_NUMBER, INVALID_NUMBER_INPUT } =
  ERROR_MESSAGES;
const { MIN_NUMBER, MAX_NUMBER } = LOTTO_NUMBER_RANGE;

const isValidRange = (number) => number >= MIN_NUMBER && number <= MAX_NUMBER;

const validateNumberRange = (number) => {
  if (!isValidRange(number)) {
    throw new Error(INVALID_LOTTO_NUMBER);
  }
  return number;
};

const validateNumber = (input) => {
  const parsedNumber = Number(input);
  if (Number.isNaN(parsedNumber)) {
    throw new Error(INVALID_NUMBER_INPUT);
  }
  return parsedNumber;
};

const validateDuplicateBonusNumber = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(INVALID_BONUS_NUMBER);
  }
};

const validateBonusNumber = (input, winningNumbers) => {
  const bonusNumber = validateNumber(input);

  validateDuplicateBonusNumber(bonusNumber, winningNumbers);
  validateNumberRange(bonusNumber);

  return bonusNumber;
};

export default validateBonusNumber;
