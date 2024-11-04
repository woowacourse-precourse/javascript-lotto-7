import { ERROR, LOTTO, REGEX } from './constants/index.js';

export class Validator {
  validatePurchaseAmount = (purchaseAmount) => {
    if (purchaseAmount === '') {
      throw new Error(ERROR.EMPTY_PURCHASE_AMOUNT_MEESSAGE);
    }
    if (!REGEX.NUMBER.test(purchaseAmount)) {
      throw new Error(ERROR.NONE_INTEGER_PURCHASE_AMOUNT_MESSAGE);
    }
    if (purchaseAmount < 1000) {
      throw new Error(ERROR.MINIMUM_PURCHASE_AMOUNT_MESSAGE);
    }
    if (parseInt(purchaseAmount, 10) % LOTTO.UNIT_PRICE !== 0) {
      throw new Error(ERROR.UNIT_PRICE_MESSAGE);
    }
  };

  validateWinningNumberString = (winningNumbersString) => {
    if (!REGEX.WINNING_NUMBER.test(winningNumbersString)) {
      throw new Error(ERROR.INVALID_CHARACTER_MESSAGE);
    }
  };

  validateWinningNumbers = (winningNumbers) => {
    if (winningNumbers.length !== LOTTO.NUMBER_OF_SPACE) {
      throw new Error(ERROR.INVALID_LOTTO_SPACE_MESSAGE);
    }
    const uniqueWinningNumbers = new Set(winningNumbers);
    if (uniqueWinningNumbers.size !== LOTTO.NUMBER_OF_SPACE) {
      throw new Error(ERROR.DUPLICATED_NUMBER_MESSAGE);
    }
    winningNumbers.forEach((winningNumber) => {
      if (this.isValidLottoNumber(winningNumber)) {
        throw new Error(ERROR.INVALID_LOTTO_NUMBER_MESSAGE);
      }
    });
  };

  validateBonusNumber = (winningNumber, bonusNubmer) => {
    if (bonusNubmer === '') {
      throw new Error(ERROR.EMPTY_BONUS_NUMBER_MESSAGE);
    }
    if (!REGEX.NUMBER.test(bonusNubmer)) {
      throw new Error(ERROR.NONE_INTEGER_BONUS_NUMBER_MESSAGE);
    }
    if (this.isValidLottoNumber(bonusNubmer)) {
      throw new Error(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
    }
    if (winningNumber.includes(parseInt(bonusNubmer, 10))) {
      throw new Error(ERROR.DUPLICATED_BOCUS_NUMBER_MESSAGE);
    }
  };

  isValidLottoNumber = (number) =>
    parseInt(number, 10) < LOTTO.MINIMUM_NUMBER ||
    parseInt(number, 10) > LOTTO.MAXIMUM_NUMBER;
}
