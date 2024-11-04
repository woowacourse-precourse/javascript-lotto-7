import { Console } from '@woowacourse/mission-utils';
import { LOTTO, PROMPT_MESSAGE } from './constant';
import Validator from './Validator';

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
        this.#purchaseAmount = Number(
          await Console.readLineAsync(PROMPT_MESSAGE.PURCHASE_AMOUNT),
        );
        this.#validator.purchaseAmount(this.#purchaseAmount);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  get purchaseCount() {
    return this.#purchaseAmount / LOTTO.PRICE;
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

  async readBonusNumbers() {
    while (true) {
      try {
        this.#bonusNumber = Number(
          await Console.readLineAsync(PROMPT_MESSAGE.BONUS_NUMBER),
        );
        this.#validator.bonusNumber(this.#bonusNumber, this.#winningNumbers);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }
}

export default User;
