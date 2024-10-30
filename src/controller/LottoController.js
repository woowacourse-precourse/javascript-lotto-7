import { Console } from "@woowacourse/mission-utils";
import GameInput from "../view/GameInput.js";
import Validate from "../validate/Validate.js";

class LottoController {
  #gameInput;

  constructor() {
    this.#gameInput = new GameInput();
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const purchase_money = await this.#gameInput.readPurchaseMoney();
        Validate.validatePurchaseMoney(purchase_money);
        return purchase_money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #purchaseLotto(money) {
    return money / 1000;
  }

  async startGame() {
    const purchase_money = await this.#purchaseMoneyInput();
    const purchase_lotto = await this.#purchaseLotto(purchase_money);
    Console.print(purchase_lotto);
  }
}

export default LottoController;
