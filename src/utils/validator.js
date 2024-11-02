import { ERROR_MESSAGES } from '../datas/error.js';

export const validatePurchaseAmount = (price) => {
  if (!/^\d+$/.test(price)) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }

  const amount = Number(price);

  if (amount <= 0 || amount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }
};

export const validateWinningNumbers = (winningNumbers) => {
  if (
    new Set(winningNumbers).size !== 6 ||
    winningNumbers.some((num) => num < 1 || num > 45)
  ) {
    throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
  }
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  if (
    bonusNumber < 1 ||
    bonusNumber > 45 ||
    winningNumbers.includes(bonusNumber)
  ) {
    throw new Error(
      bonusNumber < 1 || bonusNumber > 45
        ? ERROR_MESSAGES.INVALID_BONUS_NUMBER
        : ERROR_MESSAGES.BONUS_DUPLICATE
    );
  }
};

export const parseWinningNumbers = (numbers) => {
  return numbers.split(',').map((num) => Number(num.trim()));
};
