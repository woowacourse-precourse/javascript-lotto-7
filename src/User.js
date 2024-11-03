import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from './constant';
import Validator from './Validator';

class User {
  #purchaseCount;
  #validator;

  constructor() {
    this.#validator = new Validator();
  }

  readPurchaseAmount() {
    try {
      const purchaseAmount = Console.readLineAsync(
        PROMPT_MESSAGE.PURCHASE_AMOUNT,
      );
      this.#validator.purchaseAmount(purchaseAmount);
      return;
    } catch (error) {
      Console.print(error.message);
      return this.readPurchaseAmount();
    }
  }
}

export default User;
