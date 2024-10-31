import { LOTTO_CONFIG, VALIDATE_MESSAGES } from '../constants/constants.js';

const validateNumber = (number) => {
  if (isNaN(number)) {
    throw new Error(VALIDATE_MESSAGES.BONUS_NUMBER.NUMBER);
  }
}

const validateInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(VALIDATE_MESSAGES.BONUS_NUMBER.INTEGER);
  }
}

const validateBonusNumberRange = (number) => {
  if (number < LOTTO_CONFIG.NUMBER_RANGE.MIN || number > LOTTO_CONFIG.NUMBER_RANGE.MAX) {
    throw new Error(VALIDATE_MESSAGES.BONUS_NUMBER.RANGE);
  }
}

const validateDuplicate = (number, winningNumbers) => {
  const isDuplicate = (winningNumber) => winningNumber === number;
  if (winningNumbers.some(isDuplicate)) {
    throw new Error(VALIDATE_MESSAGES.BONUS_NUMBER.DUPLICATE);
  }
}

const validateBonusNumber = (number, winningNumbers) => {
  validateNumber(number);
  validateInteger(number);
  validateBonusNumberRange(number);
  validateDuplicate(number, winningNumbers);
};

export default validateBonusNumber;
