import ERRORS from '../constants/Errors.js';

class Validator {
  static validatePurchaseAmount(amount) {
    if (amount === '') throw new Error(ERRORS.PURCHASE_AMOUNT_EMPTY);
    if (isNaN(amount)) throw new Error(ERRORS.PURCHASE_AMOUNT_NOT_NUMBER);
    if (Number(amount) <= 0) throw new Error(ERRORS.PURCHASE_AMOUNT_NEGATIVE);
    if (Number(amount) % 1000 !== 0)
      throw new Error(ERRORS.PURCHASE_AMOUNT_INVALID_UNIT);
  }

  static validateWinningNumbers(numbers) {
    if (!numbers || numbers.length === 0)
      throw new Error(ERRORS.WINNING_NUMBERS_EMPTY);

    if (numbers.length > 0 && numbers.length !== 6)
      throw new Error(ERRORS.WINNING_NUMBERS_INVALID_COUNT);

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6)
      throw new Error(ERRORS.WINNING_NUMBERS_DUPLICATE);

    numbers.forEach((number) => {
      if (typeof number !== 'number' || number < 1 || number > 45) {
        throw new Error(ERRORS.WINNING_NUMBERS_NOT_NUMBER);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber === undefined || bonusNumber === null)
      throw new Error(ERRORS.BONUS_NUMBER_EMPTY);
    if (
      typeof bonusNumber !== 'number' ||
      bonusNumber < 1 ||
      bonusNumber > 45
    ) {
      throw new Error(ERRORS.BONUS_NUMBER_OUT_OF_RANGE);
    }
    if (winningNumbers.includes(bonusNumber))
      throw new Error(ERRORS.BONUS_NUMBER_DUPLICATE);
  }
}

export default Validator;
