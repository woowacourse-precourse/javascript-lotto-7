import { Console } from '@woowacourse/mission-utils';
import { getWinningNumbers, getBonusNumber } from '../utils/getUserInput.js';
import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

function isInRange(number, range = LOTTO.NUMBER_RANGE) {
  return number >= range.MIN && number <= range.MAX;
}

async function validateWinningNumbers(winningNumbers) {
  try {
    const parsedWinningNumbers = validateSixNumbers(winningNumbers);
    validateAllNumeric(parsedWinningNumbers);
    validateAllInRange(parsedWinningNumbers);
  } catch (error) {
    Console.print(error.message);
    const isValidInput = await getWinningNumbers();
    validateWinningNumbers(isValidInput);
  }
}

async function validateBonusNumber(winningNumberArray, bonusNumber) {
  try {
    validateIsNumeric(bonusNumber);
    validateInRange(bonusNumber);
    validateBonusNumberUniqueness(winningNumberArray, bonusNumber);
  } catch (error) {
    Console.print(error.message);
    const isValidInput = await getBonusNumber();
    validateBonusNumber(winningNumberArray, isValidInput);
  }
}

function validateSixNumbers(winningNumbers) {
  const validateWinningNumbers = winningNumbers
    .split(LOTTO.SEPARATOR)
    .map((num) => num.trim());
  if (validateWinningNumbers.length !== LOTTO.WINNING_NUMBERS_COUNT) {
    throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
  }

  return validateWinningNumbers;
}

function validateAllNumeric(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
    }
  });
}

function validateAllInRange(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (!isInRange) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
  });
}

function validateIsNumeric(bonusNumber) {
  if (Number.isNaN(Number(bonusNumber))) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC_BONUS);
  }
}

function validateInRange(bonusNumber) {
  if (!isInRange) {
    throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
  }
}

function validateBonusNumberUniqueness(winningNumbersArray, bonusNumber) {
  if (winningNumbersArray.includes(Number(bonusNumber))) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  }
}

export { validateWinningNumbers, validateBonusNumber };
