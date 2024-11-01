import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import Exception from "../component/Exception.js";
import GetNumber from "../component/GetNumber.js";
import GameResult from "../model/GameResult.js";
import { LOTTO_DATA } from "../constant/Data.js";

class GameController {
  #gameInput;
  #gameOutput;
  #gameResult;

  constructor() {
    this.#gameInput = new GameInput();
    this.#gameOutput = new GameOutput();
    this.#gameResult = new GameResult();
  }

  async startGame() {
    const money = await this.#purchaseMoneyInput();
    const new_lotto = await this.#getLotto(money);
    this.#gameOutput.printNewLotto(new_lotto);

    const winning_lotto = await this.#winningLotto();
    const bonus = await this.#bonusNumber(winning_lotto);

    const result = this.#gameResult.gameResult(money, new_lotto, winning_lotto, bonus);
    this.#gameOutput.printGameResult(result);
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const money = await this.#gameInput.readPurchaseMoney();
        Exception.purchaseMoneyValidate(money);
        return money;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #getLotto(money) {
    const purchase_lotto = this.#purchaseLotto(money);
    const new_lotto = this.#newLotto(purchase_lotto);
    return new_lotto;
  }

  #purchaseLotto(money) {
    return parseInt(money / LOTTO_DATA.lottoPrice);
  }

  #newLotto(purchase_lotto) {
    return Array.from({ length: purchase_lotto }, () => GetNumber.purchaseLotto());
  }

  async #winningLotto() {
    while (true) {
      try {
        const winning_lotto = await this.#gameInput.readWinningLotto();
        return GetNumber.winningLotto(winning_lotto);
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #bonusNumber(winning_lotto) {
    while (true) {
      try {
        const bonus = await this.#gameInput.readBonusNumber();
        Exception.bonusNumberValidate(bonus, winning_lotto);
        return bonus;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }
}

export default GameController;
