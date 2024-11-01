import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import NumberValidate from "../validate/NumberValidate.js";
import GetNumber from "../model/GetNumber.js";
import GameResult from "../model/GameResult.js";
import { LOTTO_DATA } from "../constant/Data.js";

class GameController {
  #gameInput;
  #gameOutput;
  #getNumber;
  #gameResult;

  constructor() {
    this.#gameInput = new GameInput();
    this.#gameOutput = new GameOutput();
    this.#getNumber = new GetNumber();
    this.#gameResult = new GameResult();
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const money = await this.#gameInput.readPurchaseMoney();
        this.#purchaseMoneyValidate(money);
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

  #purchaseMoneyValidate(money) {
    NumberValidate.validateNonNumber(money);
    NumberValidate.validateSmallNumber(money);
    NumberValidate.validateDivideThousand(money);
  }

  #purchaseLotto(money) {
    return parseInt(money / LOTTO_DATA.lottoPrice);
  }

  #newLotto(purchase_lotto) {
    return Array.from({ length: purchase_lotto }, () => this.#getNumber.purchaseLotto());
  }

  async #winningLotto() {
    while (true) {
      try {
        const winning_lotto = await this.#gameInput.readWinningLotto();
        return this.#getNumber.winningLotto(winning_lotto);
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #bonusNumber(winning_lotto) {
    while (true) {
      try {
        const bonus = await this.#gameInput.readBonusNumber();
        this.#bonusNumberValidate(bonus, winning_lotto);
        return bonus;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  #bonusNumberValidate(bonus, winning_lotto) {
    NumberValidate.validateNonNumber(bonus);
    NumberValidate.validateBonusDup(bonus, winning_lotto);
    NumberValidate.validateBonusRange(bonus);
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
}

export default GameController;
