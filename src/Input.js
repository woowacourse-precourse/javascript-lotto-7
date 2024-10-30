import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './lib/constants.js';
import {
  getIsAllItemsBetweenNumbers,
  getIsAllItemsNumeric,
  getIsAllItemsUnique,
  getIsArrayLengthMatch,
  getIsNumeric,
  getIsPositive,
  getIsThousandUnit,
} from './lib/utils.js';

class Input {
  purchasePrice;
  winningNumberArray;
  bonusNumber;

  async getPurchasePrice() {
    const rawPurchasePrice = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_PRICE,
    );
    Input.#validatePurchasePrice(rawPurchasePrice);
    this.purchasePrice = Input.#parsePurchasePrice(rawPurchasePrice);
  }

  async getWinningNumbers() {
    const rawWinningNumbers = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBER,
    );
    Input.#validateWinningNumbers(rawWinningNumbers);
    this.winningNumberArray = Input.#parseWinningNumbers(rawWinningNumbers);
  }

  async getBonusNumber() {
    const rawBonusNumber = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER,
    );
    Input.#validateBonusNumber(rawBonusNumber);
    this.bonusNumber = Input.#parseBonusNumber(rawBonusNumber);
  }

  static #validatePurchasePrice(rawPurchasePrice) {
    if (!getIsNumeric(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
    if (!getIsThousandUnit(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    if (!getIsPositive(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
  }

  static #validateWinningNumbers(rawWinningNumbers) {
    const winningNumberArray = rawWinningNumbers.split(',');
    if (!getIsArrayLengthMatch(winningNumberArray, 6))
      throw new Error(ERROR_MESSAGE.NOT_SIX);
    if (!getIsAllItemsNumeric(winningNumberArray))
      throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
    if (!getIsAllItemsBetweenNumbers(winningNumberArray, 1, 45))
      throw new Error(ERROR_MESSAGE.NOT_ALL_ITEMS_BETWEEN_1_AND_45);
    if (!getIsAllItemsUnique(winningNumberArray))
      throw new Error(ERROR_MESSAGE.NOT_ALL_ITEMS_UNIQUE);
  }

  static #validateBonusNumber(rawBonusNumber) {
    if (!getIsNumeric(rawBonusNumber))
      throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
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

  get lottoCount() {
    return this.purchasePrice / 1000;
  }
}

export default Input;
