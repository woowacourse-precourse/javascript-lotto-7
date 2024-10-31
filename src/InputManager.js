import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './lib/constants.js';
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

class InputManager {
  static #SPLIT_SEPARATOR = ',';
  static #LOTTO_NUMBER_MIN = 1;
  static #LOTTO_NUMBER_MAX = 45;
  static #LOTTO_ARRAY_LENGTH = 6;

  static async getPurchasePrice() {
    while (1) {
      const rawPurchasePrice = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.PURCHASE_PRICE,
      );

      const { isError, errorMessage } =
        this.#getIsValidPurchasePrice(rawPurchasePrice);

      if (!isError) return this.#parsePurchasePrice(rawPurchasePrice);

      MissionUtils.Console.print(errorMessage);
    }
  }

  static async getWinningNumbers() {
    while (1) {
      const rawWinningNumbers = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.WINNING_NUMBER,
      );
      const { errorMessage, isError } =
        this.#getIsValidWinningNumbers(rawWinningNumbers);

      if (!isError) return this.#parseWinningNumbers(rawWinningNumbers);

      MissionUtils.Console.print(errorMessage);
    }
  }

  static async getBonusNumber() {
    while (1) {
      const rawBonusNumber = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER,
      );

      const { errorMessage, isError } =
        this.#getIsValidBonusNumber(rawBonusNumber);

      if (!isError) return this.#parseBonusNumber(rawBonusNumber);

      MissionUtils.Console.print(errorMessage);
    }
  }

  static #getIsValidPurchasePrice(rawPurchasePrice) {
    if (!getIsNumeric(rawPurchasePrice)) {
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    }
    if (!getIsThousandUnit(rawPurchasePrice))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_THOUSAND_UNIT };
    if (!getIsPositive(rawPurchasePrice))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_POSITIVE };

    return { isError: false, errorMessage: null };
  }

  static #getIsValidWinningNumbers(rawWinningNumbers) {
    const winningNumberArray = rawWinningNumbers.split(this.#SPLIT_SEPARATOR);
    if (!getIsArrayLengthMatch(winningNumberArray, this.#LOTTO_ARRAY_LENGTH))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_SIX };
    if (!getIsAllItemsNumeric(winningNumberArray))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    if (
      !getIsAllItemsBetweenNumbers(
        winningNumberArray,
        this.#LOTTO_NUMBER_MIN,
        this.#LOTTO_NUMBER_MAX,
      )
    )
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
      };
    if (!getIsAllItemsUnique(winningNumberArray))
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_UNIQUE,
      };

    return { isError: false, errorMessage: null };
  }

  static #getIsValidBonusNumber(rawBonusNumber) {
    if (!getIsNumeric(rawBonusNumber))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_NUMERIC };
    if (!getIsPositive(rawBonusNumber))
      return { isError: true, errorMessage: ERROR_MESSAGE.NOT_POSITIVE };
    if (!getIsBetweenNumbers(rawBonusNumber, 1, 45))
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
      };

    return { isError: false, errorMessage: null };
  }

  static #parsePurchasePrice(rawPurchasePrice) {
    return rawPurchasePrice;
  }

  static #parseWinningNumbers(rawWinningNumbers) {
    return rawWinningNumbers.split(',').map(Number);
  }

  static #parseBonusNumber(rawBonusNumber) {
    return +rawBonusNumber;
  }
}

export default InputManager;
