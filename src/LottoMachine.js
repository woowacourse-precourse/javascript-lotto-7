import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, MINIMUM_PURCHASE_AMOUNT } from "./Constants.js";
import Input from "./Input.js";

class LottoMachine {
  static #validateUserPurchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);

    if (
      isNaN(amount) ||
      amount <= 0 ||
      amount % MINIMUM_PURCHASE_AMOUNT !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
    return true;
  }

  static async getUserPurchaseAmount() {
    let userPurchaseAmount;
    while (true) {
      userPurchaseAmount = await Input.getUserPurchaseAmount();
      try {
        this.#validateUserPurchaseAmount(userPurchaseAmount);
        return Number(userPurchaseAmount);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoMachine;
