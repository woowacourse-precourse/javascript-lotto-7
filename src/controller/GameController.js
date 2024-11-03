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
    const amount = await this.#amountInput();
    const generate_lottos = await this.#generateLottos(amount);
    this.#gameOutput.printGenerateLottos(generate_lottos);

    const winning_lotto = await this.#getWinningNumbers();
    const bonus_number = await this.#getBonusNumber(winning_lotto);

    const result = this.#gameResult.gameResult(amount, generate_lottos, winning_lotto, bonus_number);
    this.#gameOutput.printGameResult(result);
  }

  async #amountInput() {
    while (true) {
      try {
        const amount = await this.#gameInput.readAmount();
        Exception.amountException(amount);
        return amount;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #generateLottos(amount) {
    const amount_to_lotto = this.#calculateLottoCount(amount);
    const generate_lottos = this.#createLotto(amount_to_lotto);
    return generate_lottos;
  }

  #calculateLottoCount(amount) {
    return parseInt(amount / LOTTO_DATA.lottoPrice);
  }

  #createLotto(amount_to_lotto) {
    return Array.from({ length: amount_to_lotto }, () => GetNumber.generateLottos());
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const winning_lotto = await this.#gameInput.readWinningLotto();
        return GetNumber.winningLotto(winning_lotto).map((number) => parseInt(number));
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #getBonusNumber(winning_lotto) {
    while (true) {
      try {
        const bonus_number = await this.#gameInput.readBonusNumber();
        Exception.bonusNumberException(bonus_number, winning_lotto);
        return bonus_number;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }
}

export default GameController;
