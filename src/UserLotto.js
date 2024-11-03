import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, LOTTO, USER_MESSAGES } from "../Constants.js";

export class UserLotto {

  async getLottoPurchaseInput() {
    Console.print(USER_MESSAGES.PURCHASE_MONEY);
    const input = await Console.readLineAsync("");
    const money = Number(input.trim());

    this.validateAmount(money);
  }

  validateAmount(money) {
    if (isNaN(money) || money === null || money === undefined) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_TYPE);
    }
    if (money <= 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_OR_ZERO_AMOUNT);
    }
    if (money % LOTTO.PRICE_PER_TICKET !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }
}