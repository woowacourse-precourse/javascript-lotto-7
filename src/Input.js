import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/message.js";
import ERROR from "./constants/error.js";

class Input {
  #money;

  async getPurchaseAmount() {
    try {
        const money = await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT);
        this.#moneyValidator(money);
        this.#money = money;
      } catch (error) {
        Console.print(error.message);
        await this.getPurchaseAmount();
      }
  }

  #moneyValidator(money) {
    if(isNaN(money)) {
        throw new Error(ERROR.IS_NOT_INT);
    } 
    
    if (money < 1000) {
        throw new Error(ERROR.SMALL_THAN_THOUSAND);
    }

    if (money % 1000 !== 0) {
        throw new Error(ERROR.IS_NOT_DEVIDED);
    }
  }
}

export default Input;
