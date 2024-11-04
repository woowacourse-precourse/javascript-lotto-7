import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE } from './lib/constant.js';

class InputHandler {
  static async getBuyPrice() {
    try {
      const buyPrice = await Console.readLineAsync(INPUT_MESSAGE.BUY_PRICE);
      this.#validateBuyPrice(buyPrice);
      return buyPrice;
    } catch (error) {
      Console.print(error.message);
      return this.getBuyPrice();
    }
  }

  static async getWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(
        INPUT_MESSAGE.WINNING_NUMBERS,
      );
      this.#validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  static async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER,
      );
      this.#validateBonusNumber(winningNumbers, bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  static #validateBuyPrice(buyPrice) {
    this.#validateNumberType(buyPrice);
    this.#validatePositiveNumber(buyPrice);
    this.#validateBuyPriceUnit(buyPrice);
  }

  static #validateWinningNumbers(winningNumbers) {
    const numbers = winningNumbers.split(',');
    this.#validateWinningNumberCount(numbers);
    numbers.forEach((number) => {
      this.#validateNumberType(number);
      this.#validatePositiveNumber(number);
      this.#validateWinningNumberRange(number);
    });
    this.#validateWinningNumberDuplicate(numbers);
  }

  static #validateBonusNumber(winningNumbers, bonusNumber) {
    this.#validateNumberType(bonusNumber);
    this.#validatePositiveNumber(bonusNumber);
    this.#validateWinningNumberRange(bonusNumber);
    this.#validateBonusNumberDuplicate(winningNumbers, bonusNumber);
  }

  static #validateBuyPriceUnit(buyPrice) {
    if (buyPrice % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.BUY_PRICE_UNIT);
    }
  }

  static #validateNumberType(inputNumber) {
    if (Number.isNaN(Number(inputNumber))) {
      throw new Error(ERROR_MESSAGE.INPUT_TYPE);
    }
  }

  static #validatePositiveNumber(number) {
    if (number <= 0) {
      throw new Error(ERROR_MESSAGE.NUMBER_POSITIVE);
    }
  }

  static #validateWinningNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_COUNT);
    }
  }

  static #validateWinningNumberRange(number) {
    if (parseInt(number, 10) < 1 || parseInt(number, 10) > 45) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_RANGE);
    }
  }

  static #validateWinningNumberDuplicate(winningNumbers) {
    const winningUniqueNumbers = new Set(winningNumbers);
    if (winningNumbers.length !== winningUniqueNumbers.size) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
    }
  }

  static #validateBonusNumberDuplicate(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
    }
  }
}

export default InputHandler;
