import { ERROR_MESSAGES } from "../Constants/error.js";
import Lotto from "../Lotto.js"; 

export function validatePurchaseAmount(buyCost) {
  const STANDARD_COST = 1000;
  if (!buyCost.match(/^\d+$/)) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }

  const amount = Number(buyCost);
  
  if (amount < STANDARD_COST) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }
  if (amount % STANDARD_COST !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }

  return amount;
}

export function validateWinningNumbers(input) {
  const numbers = input.split(',').map((num) => Number(num.trim()));
  if (numbers.length !== 6 || numbers.some((num) => isNaN(num))) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
  }
  new Lotto(numbers);
  return numbers;
}

export function validateBonusNumber(bonusInput, winningNumbers) {
  const bonusNumber = Number(bonusInput.trim());
  Lotto.validateBonusNumber(bonusNumber, winningNumbers);
  return bonusNumber;
}
