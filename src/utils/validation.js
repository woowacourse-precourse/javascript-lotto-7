import ERROR_MESSAGES from '../constants/errorConstants.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (purchaseAmount === '' || isNaN(Number(purchaseAmount))) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER);
  }
  if (purchaseAmount % 1000 != 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND);
  }
  if (Number(purchaseAmount) <= 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO);
  }
}

export function validateWinningNumber(winningNumber) {
  const numberArray = winningNumber.split(',');
  numberArray.forEach((number) => {
    if (!checkPositiveInteger(Number(number))) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_IS_NOT_NUMBER);
    }
  });

  const numbers = numberArray.map(Number);
  numbers.forEach((number) => {
    if (checkNumberOutOfRange(number)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_BOUNDS);
    }
  });
}

export function validateBonus(bonus) {
  if (!checkPositiveInteger(Number(bonus))) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_IS_NOT_NUMBER);
  }

  if (checkNumberOutOfRange(Number(bonus))) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_BOUNDS);
  }
}

export function checkDuplicateNumber(winningNumberArray, bonus) {
  const numberSet = new Set();
  const numberArray = winningNumberArray.split(',');
  numberArray.forEach((number) => {
    numberSet.add(number);
  });
  numberSet.add(bonus);
  if (numberSet.size !== numberArray.length + 1) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_IN_WINNING_AND_BONUS);
  }
}

function checkNumberOutOfRange(number) {
  return number < 1 || number > 45;
}

function checkPositiveInteger(number) {
  return Number.isInteger(number);
}
