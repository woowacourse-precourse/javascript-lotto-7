import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './lib/constants.js';

class Input {
  #purchasePrice;
  #winnerNumberArray;
  #bonusNumber;

  async getPurchasePrice() {
    this.#purchasePrice = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_PRICE,
    );
  }

  get purchacePrice() {
    return this.#purchasePrice;
  }

  async getWinningNumbers() {
    const rawWinningNumbers = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBER,
    );
    this.#winnerNumberArray = Input.#parseWinningNumbers(rawWinningNumbers);
  }

  static #parseWinningNumbers(rawWinningNumbers) {
    return rawWinningNumbers.split(',').map(Number);
  }

  get winnerNumberArray() {
    return this.#winnerNumberArray;
  }

  async getBonusNumber() {
    const rawBonusNumber = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER,
    );
    this.#bonusNumber = Input.#parseBonusNumber(rawBonusNumber);
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
