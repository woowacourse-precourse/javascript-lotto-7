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
    while (true) {
      try {
        const purchaseAmount = Console.readLineAsync(
          PROMPT_MESSAGE.PURCHASE_AMOUNT,
        );
        this.#validator.purchaseAmount(Number(purchaseAmount));
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default User;
