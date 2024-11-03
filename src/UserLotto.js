import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, LOTTO, USER_MESSAGES } from "../Constants.js";

export class UserLotto {

  // 로또 구입금액 입력 받기
  async getLottoPurchaseInput() {
    Console.print(USER_MESSAGES.PURCHASE_MONEY);
    const input = await Console.readLineAsync("");
    const money = Number(input.trim());

    this.validateAmount(money);
    return money;
  }

  // 구입금액 유효성 검사
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

  // 입력 받은 구입금액으로 로또 수량 계산
  CalculateAmountCount(money) {
    return Math.floor(money / LOTTO.PRICE_PER_TICKET);
  }
}