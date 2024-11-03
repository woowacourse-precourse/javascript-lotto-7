import { Console } from '@woowacourse/mission-utils';
import { LOTTO, PROMPT_MESSAGE } from './constant';
import Validator from './Validator';

class User {
  #purchaseAmount;
  #validator;

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
}

export default User;
