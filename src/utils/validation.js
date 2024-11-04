import { LOTTO, ERROR_MESSAGE } from "./constants.js";

export const validatePurchaseAmount = (amount) => {
  const number = Number(amount);
  if (isNaN(number) || number % LOTTO.PRICE !== 0 || number < LOTTO.PRICE) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
  return number;
};

export const validateWinningNumbers = (input) => {
  const numbers = input.split(",").map((num) => Number(num.trim()));
  validateNumbers(numbers);
  return numbers;
};

export const validateBonusNumber = (number, winningNumbers) => {
  const bonusNumber = Number(number);
  if (
    isNaN(bonusNumber) ||
    bonusNumber < LOTTO.MIN_NUMBER ||
    bonusNumber > LOTTO.MAX_NUMBER ||
    winningNumbers.includes(bonusNumber)
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
  }
  return bonusNumber;
};

export const validateNumbers = (numbers) => {
  const uniqueNumbers = new Set(numbers);
  if (
    numbers.length !== LOTTO.LENGTH ||
    uniqueNumbers.size !== LOTTO.LENGTH ||
    !numbers.every((num) => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER)
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
  }
};
