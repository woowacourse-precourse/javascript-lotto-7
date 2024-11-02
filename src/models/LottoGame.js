import { Console } from '@woowacourse/mission-utils';

import INPUT_PROMPT from '../constants/inputConstant.js';
import InputHandler from '../utils/InputHandler.js';
import Validator from '../utils/Validator.js';

class LottoGame {
  #lottos;

  constructor(lottoMachine) {
    this.#lottos = null;
    this.lottoMachine = lottoMachine;
  }

  async play() {
    const inputPurchasePrice = await InputHandler.getInput(
      INPUT_PROMPT.PURCHASE_PRICE,
    );
    Validator.validatePurchasePrice(inputPurchasePrice);

    this.setLottos(
      this.lottoMachine.generateLottos(Number.parseInt(inputPurchasePrice, 10)),
    );
    this.displayLottos();
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  displayLottos() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
  }
}

export default LottoGame;
