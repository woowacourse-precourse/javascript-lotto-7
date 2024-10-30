import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import Validate from "../validate/Validate.js";
import Lotto from "../model/Lotto.js";
import { LOTTO_DATA } from "../constant/Data.js";
import { Random } from "@woowacourse/mission-utils";

class GameController {
  #gameInput;
  #gameOutput;

  constructor() {
    this.#gameInput = new GameInput();
    this.#gameOutput = new GameOutput();
  }

  async #getLotto() {
    const purchase_money = await this.#purchaseMoneyInput();
    const purchase_lotto = this.#purchaseLotto(purchase_money);
    const new_lotto = this.#newLotto(purchase_lotto);
    return new_lotto;
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const purchase_money = await this.#gameInput.readPurchaseMoney();
        this.#purchaseMoneyValidate(purchase_money);
        return purchase_money;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  #purchaseMoneyValidate(purchase_money) {
    Validate.validateNonNumber(purchase_money);
    Validate.validateSmallNumber(purchase_money);
    Validate.validateDivideThousand(purchase_money);
  }

  #purchaseLotto(purchase_money) {
    return parseInt(purchase_money / LOTTO_DATA.lottoPrice);
  }

  #getNumber() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_DATA.minNum,
        LOTTO_DATA.minMax,
        LOTTO_DATA.lottoLength
      )
    ).getNumber();
  }

  #newLotto(purchase_lotto) {
    return Array.from({ length: purchase_lotto }, () => this.#getNumber());
  }

  async startGame() {
    const new_lotto = await this.#getLotto();
  }
}

export default GameController;
