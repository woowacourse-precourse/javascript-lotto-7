import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE, LOTTO } from './lib/constants.js';
import {
  getIsAllItemsBetweenNumbers,
  getIsAllItemsNumeric,
  getIsAllItemsUnique,
  getIsArrayLengthMatch,
  getIsBetweenNumbers,
  getIsNumeric,
  getIsPositive,
  getIsThousandUnit,
} from './lib/utils.js';
import OutputManager from './OutputManager.js';

class InputManager {
  static #SPLIT_SEPARATOR = ',';

  static async getPurchasePrice() {
    while (1) {
      const rawPurchasePrice = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.PURCHASE_PRICE,
      );

      const purchasePrice = this.#parsePurchasePrice(rawPurchasePrice);

      const { isError, errorMessage } =
        this.#getIsValidPurchasePrice(purchasePrice);

      if (!isError) return purchasePrice;

      OutputManager.print(errorMessage);
    }
  }

  static async getWinningNumbers() {
    while (1) {
      const rawWinningNumbers = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.WINNING_NUMBER,
      );

      const winningNumbers = this.#parseWinningNumbers(rawWinningNumbers);

      const { errorMessage, isError } =
        this.#getIsValidWinningNumbers(winningNumbers);

      if (!isError) return winningNumbers;

      OutputManager.print(errorMessage);
    }
  }

  static async getBonusNumber(winningNumbers) {
    while (1) {
      const rawBonusNumber = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER,
      );

      const bonusNumber = this.#parseBonusNumber(rawBonusNumber);

      const { errorMessage, isError } = this.#getIsValidBonusNumber(
        winningNumbers,
        bonusNumber,
      );

      if (!isError) return bonusNumber;

      OutputManager.print(errorMessage);
    }
  }

  static #getIsValidPurchasePrice(purchasePrice) {
    if (!getIsNumeric(purchasePrice)) {
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    }
    if (!getIsThousandUnit(purchasePrice))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_THOUSAND_UNIT };
    if (!getIsPositive(purchasePrice))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_POSITIVE };

    return { isError: false, errorMessage: null };
  }

  static #getIsValidWinningNumbers(winningNumbers) {
    if (!getIsArrayLengthMatch(winningNumbers, LOTTO.NUMBER_COUNT))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_SIX };
    if (!getIsAllItemsNumeric(winningNumbers))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    if (
      !getIsAllItemsBetweenNumbers(
        winningNumbers,
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
      )
    )
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
      };
    if (!getIsAllItemsUnique(winningNumbers))
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_UNIQUE,
      };

    return { isError: false, errorMessage: null };
  }

  static #getIsValidBonusNumber(winningNumbers, bonusNumber) {
    if (!getIsNumeric(bonusNumber))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    if (!getIsPositive(bonusNumber))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_POSITIVE };
    if (!getIsBetweenNumbers(bonusNumber, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
      };
    if (!getIsAllItemsUnique([...winningNumbers, bonusNumber]))
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_UNIQUE,
      };

    return { isError: false, errorMessage: null };
  }

  static #parsePurchasePrice(rawPurchasePrice) {
    return rawPurchasePrice;
  }

  static #parseWinningNumbers(rawWinningNumbers) {
    return rawWinningNumbers.split(this.#SPLIT_SEPARATOR).map(Number);
  }

  static #parseBonusNumber(rawBonusNumber) {
    return +rawBonusNumber;
  }
}

export default InputManager;
