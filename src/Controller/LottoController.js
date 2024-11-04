import LottoMachine from "../Model/LottoMachine.js";
import { IOUtils } from "../Util/IOUtils.js";
import Validator from "../Validator/Validator.js";
import IOHandler from "../View/IOHandler.js";

class LottoController {
  #lottoMachine;
  #ioHandler;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#ioHandler = new IOHandler();
  }

  async run() {
    const numOfLottos = await this.#inputMoney();
    const lottos = await this.#createLottos(numOfLottos);
    this.#ioHandler.outputLottos(lottos);
    const winningLotto = await this.#inputWinningNumbers();
    const rateOfReturn = this.#lottoMachine.calculateEarningRate(
      lottos,
      winningLotto,
      numOfLottos
    );
    const matchingTable = this.#lottoMachine.getMatchingTable();
    this.#ioHandler.outputResult(matchingTable, rateOfReturn);
  }

  async #inputMoney() {
    try {
      const money = await this.#ioHandler.inputPurchaseMoney();
      Validator.validateMoney(money);
      return this.#lottoMachine.enterMoney(money);
    } catch (err) {
      IOUtils.output(err.message);
      return await this.#inputMoney();
    }
  }

  async #inputWinningNumbersExceptBonus() {
    try {
      const winningNumbers = await this.#ioHandler.inputWinningNumber();
      Validator.validateWinningNumber(winningNumbers);
      return winningNumbers;
    } catch (err) {
      IOUtils.output(err.message);
      return await this.#inputWinningNumbersExceptBonus();
    }
  }

  async #inputBonusNumber() {
    try {
      const bonusNumber = await this.#ioHandler.inputBonusNumber();
      Validator.validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (err) {
      IOUtils.output(err.message);
      return await this.#inputBonusNumber();
    }
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputWinningNumbersExceptBonus();
    const bonusNumber = await this.#inputBonusNumber();
    return this.#lottoMachine.createWinningLottos(
      winningNumbers.split(",").map((num) => Number(num.trim())),
      bonusNumber
    );
  }

  async #createLottos(numOfLottos) {
    return this.#lottoMachine.createLottos(numOfLottos);
  }
}

export default LottoController;
