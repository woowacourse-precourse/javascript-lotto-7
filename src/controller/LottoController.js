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
    try {
      const money = await readAndValidateMoney();
      this.#lottoMachine = new LottoMachine(money);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.#chargeMoneyToLottoMachine();
    }
  }

  #buyLottos() {
    const lottos = this.#lottoMachine.createLottos();
    this.#lottoPocket = new LottoPocket(lottos);
  }

  #displayLottos() {
    OuputView.printLottoList(this.#lottoPocket.showLottos());
  }

  async createAnswerNumbers() {
    try {
      const winningNumber = await readAndValidateWinningNumber();
      const bonusNumber = await readAndValidateBonusNumber(winningNumber);
      this.#lottoMatcher = new LottoMatcher(winningNumber, bonusNumber);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.createAnswerNumbers();
    }
  }

  displayLottoWinning() {
    const lottosRank = this.#getLottosRankCount();
    const percentage = this.#lottoMachine.calculateProfitFromLottos(lottosRank);

    OuputView.printLottoWinning(lottosRank);
    OuputView.printProfitPercentage(percentage);
  }

  #getLottosRankCount() {
    return this.#lottoMatcher.getWinningLottos(this.#lottoPocket);
  }
}

export default LottoController;
