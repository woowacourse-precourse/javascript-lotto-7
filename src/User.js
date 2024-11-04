import { Console } from '@woowacourse/mission-utils';
import { LOTTO, PROMPT_MESSAGE } from './constant/index.js';
import Validator from './Validator.js';

class User {
  #validator;
  #purchaseAmount;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#validator = new Validator();
  }

  async readPurchaseAmount() {
    while (true) {
      try {
        this.#purchaseAmount =
          Number(await Console.readLineAsync(PROMPT_MESSAGE.PURCHASE_AMOUNT)) ||
          0;
        this.#validator.purchaseAmount(this.#purchaseAmount);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async readWinningNumbers() {
    while (true) {
      try {
        const input =
          (await Console.readLineAsync(PROMPT_MESSAGE.WINNING_NUMBERS)) || '';
        const splitInputByComma = input.split(',');
        this.#winningNumbers = splitInputByComma.map(Number);
        this.#validator.winningNumbers(this.#winningNumbers);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async readBonusNumber() {
    while (true) {
      try {
        this.#bonusNumber =
          Number(await Console.readLineAsync(PROMPT_MESSAGE.BONUS_NUMBER)) || 0;
        this.#validator.bonusNumber(this.#bonusNumber, this.#winningNumbers);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }

  get purchaseCount() {
    return this.#purchaseAmount / LOTTO.PRICE;
  }

  get winningBonusNumbers() {
    return {
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default User;
