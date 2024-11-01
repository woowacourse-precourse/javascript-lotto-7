import LottoMachine from '../model/LottoMachine.js';
import LottoMatcher from '../model/LottoMatcher.js';
import LottoPocket from '../model/LottoPocket.js';
import {
  readAndValidateBonusNumber,
  readAndValidateMoney,
  readAndValidateWinningNumber,
} from '../utils/reader.js';
import OuputView from '../view/OutputView.js';

class LottoController {
  #lottoMachine;

  #lottoPocket;

  #lottoMatcher;

  async initLottoProcess() {
    await this.#chargeMoneyToLottoMachine();
    this.#buyLottos();
    this.#displayLottos();
  }

  async #chargeMoneyToLottoMachine() {
    const money = await readAndValidateMoney();
    this.#lottoMachine = new LottoMachine(money);
  }

  #buyLottos() {
    const lottos = this.#lottoMachine.createLottos();
    this.#lottoPocket = new LottoPocket(lottos);
  }

  #displayLottos() {
    OuputView.printLottoList(this.#lottoPocket.showLottos());
  }

  async createAnswerNumbers() {
    const winningNumber = await readAndValidateWinningNumber();
    const bonusNumber = await readAndValidateBonusNumber(winningNumber);

    this.#lottoMatcher = new LottoMatcher(winningNumber, bonusNumber);
  }
}

export default LottoController;
