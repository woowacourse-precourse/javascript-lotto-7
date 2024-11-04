import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import VendingMachine from '../model/VendingMachine.js';
import LottoGame from '../model/LottoGame.js';
import Calculator from '../model/Calculator.js';
import Lotto from '../model/Lotto.js';

class LottoController {
  async run() {
    const money = await this.#getPurchaseAmount();

    const machine = new VendingMachine(money, (numbers) => new Lotto(numbers));
    const lottoList = machine.printLottos(Output.printLottoNumbersAll);

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    const game = new LottoGame(winningNumbers, bonusNumber);
    const calc = new Calculator(game, lottoList);

    calc.computeWinningCountList(Output.printStatistics);
    calc.computeTotalProfitRate(money, Output.printTotalProfitRate);
  }

  /** @param {number[]} winningNumbers */
  #getBonusNumber(winningNumbers) {
    const reader = Input.readBonusNumber;
    const validator = (bonusNumber) =>
      LottoGame.validateBonusNumber(bonusNumber, winningNumbers);

    return this.#getUserInput(reader, validator);
  }

  #getWinningNumbers() {
    const reader = Input.readWinningNumbers;
    const validator = LottoGame.validateWinningNumbers;

    return this.#getUserInput(reader, validator);
  }

  #getPurchaseAmount() {
    const reader = Input.readPurchaseAmount;
    const validator = VendingMachine.validateMoney;

    return this.#getUserInput(reader, validator);
  }

  /**
   * @template T
   * @param {() => Promise<T>} reader
   * @param {(input: T) => void} validator
   * @returns {Promise<T>}
   */
  async #getUserInput(reader, validator) {
    try {
      const input = await reader();

      validator(input);

      return input;
    } catch (error) {
      Console.print(error.message);

      return await this.#getUserInput(reader, validator);
    }
  }
}

export default LottoController;
