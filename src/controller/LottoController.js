import LottoMachine from '../model/LottoMachine.js';
import LottoPocket from '../model/LottoPocket.js';
import { readAndValidateMoney } from '../utils/reader.js';
import OuputView from '../view/OutputView.js';

class LottoController {
  #lottoMachine;

  #lottoPocket;

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
}

export default LottoController;
