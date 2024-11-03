import { Constants } from './Constants.js';

export class Validation {
  validatePurchasePrice(purchasePrice) {
    if (purchasePrice === '' || purchasePrice === ' ') {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.EMPTY_VALUE_ERROR);
    }

    if (Number.isNaN(Number(purchasePrice)) === true) {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NOT_A_NUMBER_ERROR);
    }

    if (Number(purchasePrice) % 1000 !== 0 || purchasePrice === '0') {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.DIVIDED_BY_PRICE_ERROR);
    }
  }

  validateWinningNumbers(winningNumArr) {
    if (winningNumArr.length > 6 || winningNumArr.length < 6) {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NUMBER_SIZE_ERROR);
    }

    winningNumArr.forEach((num) => {
      if (num === true) {
        throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NOT_A_NUMBER_ERROR);
      }

      if (num < 1 || num > 45) {
        throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NUMBER_RANGE_ERROR);
      }
    });

    const set = new Set(winningNumArr);
    if (winningNumArr.length !== set.size) {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NUMBER_DUPLICATE_ERROR);
    }
  }

  validateBonusNumber(bonusNumber, winningNumArr) {
    if (bonusNumber === '' || bonusNumber === ' ') {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.EMPTY_VALUE_ERROR);
    }

    if (Number.isNaN(Number(bonusNumber)) === true) {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NOT_A_NUMBER_ERROR);
    }

    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.NUMBER_RANGE_ERROR);
    }

    winningNumArr.forEach((num) => {
      if (Number(num) === Number(bonusNumber)) {
        throw new Error(Constants.ERROR_PREFIX + ' ' + Constants.BONUS_NUMBER_DUPLICATE_ERROR);
      }
    });
  }
}
