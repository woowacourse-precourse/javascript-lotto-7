import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import Validate from "../validate/Validate.js";

class GameController {
  #gameInput;
  #gameOutput;

  constructor() {
    this.#gameInput = new GameInput();
    this.#gameOutput = new GameOutput();
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const purchase_money = await this.#gameInput.readPurchaseMoney();
        await this.#purchaseMoneyValidate(purchase_money);
        return purchase_money;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #purchaseMoneyValidate(purchase_money) {
    Validate.validateNonNumber(purchase_money);
    Validate.validateSmallNumber(purchase_money);
    Validate.validateDivideThousand(purchase_money);
  }

  async #purchaseLotto(money) {
    return money / 1000;
  }

  async startGame() {
    // 사용자에게 구입할 금액을 입력받는다.
    const purchase_money = await this.#purchaseMoneyInput();

    // 입력한 금액만큼 로또를 구입하고 로또 번호를 출력한다.
    const purchase_lotto = await this.#purchaseLotto(purchase_money);
    this.#gameOutput.printPurchaseLotto(purchase_lotto);
  }
}

export default GameController;
