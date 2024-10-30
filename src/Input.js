import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './lib/constants.js';
import { getIsNumeric, getIsPositive, getIsThousandUnit } from './lib/utils.js';

class Input {
  #purchasePrice;
  #winningNumberArray;
  #bonusNumber;

  async getPurchasePrice() {
    const rawPurchasePrice = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_PRICE,
    );
    Input.#validatePurchasePrice(rawPurchasePrice);
    this.#purchasePrice = Input.parsePurchasePrice(rawPurchasePrice);
  }

  static #validatePurchasePrice(rawPurchasePrice) {
    if (!getIsNumeric(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
    if (!getIsThousandUnit(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    if (!getIsPositive(rawPurchasePrice))
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
  }

  static parsePurchasePrice(rawPurchasePrice) {
    return rawPurchasePrice;
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }

  async getWinningNumbers() {
    const rawWinningNumbers = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBER,
    );
    this.#winningNumberArray = Input.#parseWinningNumbers(rawWinningNumbers);
  }

  static #parseWinningNumbers(rawWinningNumbers) {
    return rawWinningNumbers.split(',').map(Number);
  }

  get winningNumberArray() {
    return this.#winningNumberArray;
  }

  async getBonusNumber() {
    const rawBonusNumber = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER,
    );
    Input.#validateBonusNumber(rawBonusNumber);
    this.#bonusNumber = Input.#parseBonusNumber(rawBonusNumber);
  }

  static #validateBonusNumber(rawBonusNumber) {
    if (!getIsNumeric(rawBonusNumber))
      throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
  }

  static #parseBonusNumber(rawBonusNumber) {
    return +rawBonusNumber;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get lottoCount() {
    return this.#purchasePrice / 1000;
  }
}

export default Input;
