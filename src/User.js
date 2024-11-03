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
        const input = await Console.readLineAsync(
          PROMPT_MESSAGE.WINNING_NUMBERS,
        );
        this.#winningNumbers = input.split(',');
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default User;
