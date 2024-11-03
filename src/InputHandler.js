import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE } from './lib/constant.js';

class InputHandler {
  static async getBuyPrice() {
    const buyPrice = await Console.readLineAsync(INPUT_MESSAGE.BUY_PRICE);
    const parsedBuyPrice = parseInt(buyPrice, 10);
    this.#validateBuyPrice(parsedBuyPrice);
    return buyPrice;
  }

  static async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBERS,
    );
    return winningNumbers;
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return bonusNumber;
  }

  static #validateBuyPrice(buyPrice) {
    this.#validateBuyPriceType(buyPrice);
    this.#validatePositiveNumber(buyPrice);
    this.#validateBuyPriceUnit(buyPrice);
  }

  static #validateBuyPriceUnit(buyPrice) {
    if (buyPrice % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.BUY_PRICE_UNIT);
    }
  }

  static #validateBuyPriceType(buyPrice) {
    if (Number.isNaN(buyPrice)) {
      throw new Error(ERROR_MESSAGE.BUY_PRICE_TYPE);
    }
  }

  static #validatePositiveNumber(number) {
    if (number <= 0) {
      throw new Error(ERROR_MESSAGE.BUY_PRICE_POSITIVE);
    }
  }
}

export default InputHandler;
