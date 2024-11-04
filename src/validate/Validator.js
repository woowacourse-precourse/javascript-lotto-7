import { LOTTO_PRICE, LOTTO_NUMBER_COUNT, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, ERROR_MESSAGES } from '../constant/constant.js';

class Validator {
  static validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount <= 0 || amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  static validateWinningNumbers(numbers) {
    const parsedNumbers = numbers.split(',').map(Number);
    const hasInvalidNumber = parsedNumbers.some(num => isNaN(num) || num < LOTTO_MIN_NUMBER || num > LOTTO_MAX_NUMBER);

    if (
        parsedNumbers.length !== LOTTO_NUMBER_COUNT ||
        new Set(parsedNumbers).size !== LOTTO_NUMBER_COUNT ||
        hasInvalidNumber
    ) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }

    return parsedNumbers;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const parsedBonus = Number(bonusNumber);
    if (isNaN(parsedBonus) || parsedBonus < LOTTO_MIN_NUMBER || parsedBonus > LOTTO_MAX_NUMBER || winningNumbers.includes(parsedBonus)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    return parsedBonus;
  }
}

export default Validator;
