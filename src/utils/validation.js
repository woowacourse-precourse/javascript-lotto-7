import ERROR_MESSAGES from '../constants/errorConstants.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (purchaseAmount === '' || isNaN(Number(purchaseAmount))) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER);
  }
  if (purchaseAmount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND);
  }
  if (Number(purchaseAmount) <= 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO);
  }
}

export function validateWinningNumber(winningNumber) {
  const numberArray = winningNumber.split(',').map(Number);

  if (numberArray.length !== 6) {
    throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_COUNT);
  }

  numberArray.forEach((number) => {
    if (!checkPositiveInteger(number)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_IS_NOT_NUMBER);
    }
    if (checkNumberOutOfRange(number)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_BOUNDS);
    }
  });

  const uniqueNumbers = new Set(numberArray);
  if (uniqueNumbers.size !== numberArray.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_IN_WINNING_NUMBER);
  }
}

export function validateBonus(bonus, winningNumber) {
  const bonusNumber = Number(bonus);

  if (!checkPositiveInteger(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_IS_NOT_NUMBER);
  }
  if (checkNumberOutOfRange(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_BOUNDS);
  }

  const winningNumbers = winningNumber.split(',').map(Number);
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_IN_WINNING_AND_BONUS);
  }
}

function checkNumberOutOfRange(number) {
  return number < 1 || number > 45;
}

function checkPositiveInteger(number) {
  return Number.isInteger(number);
}
