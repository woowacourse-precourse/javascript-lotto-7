import LottoMachine from "../Model/LottoMachine.js";
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
    this.#ioHandler.outputResult(lottos, rateOfReturn);
  }

  async #inputMoney() {
    const money = await this.#ioHandler.inputPurchaseMoney();
    Validator.validateMoney(money);
    return this.#lottoMachine.enterMoney(money);
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#ioHandler.inputWinningNumber();
    Validator.validateWinningNumber(winningNumbers);
    const bonusNumber = await this.#ioHandler.inputBonusNumber();
    Validator.validateBonusNumber(bonusNumber);
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
