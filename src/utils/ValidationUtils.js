import { LOTTO, ERROR_MESSAGES } from "../constants";

export const validatePurchaseAmount = (amount) => {
  const parsedAmount = parseInt(amount);
  if (isNaN(parsedAmount) || parsedAmount % LOTTO.PRICE !== 0 || parsedAmount <= 0) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }
  return parsedAmount;
};

export const validateLottoNumbers = (numbers) => {
  if (numbers.length !== LOTTO.NUMBERS_PER_TICKET) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
  }

  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }

  numbers.forEach(number => {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    }
  });

  return numbers.sort((a, b) => a - b);
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  const number = parseInt(bonusNumber);
  if (isNaN(number) || number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
  }
  if (winningNumbers.includes(number)) {
    throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
  }
  return number;
};