import { Random } from '@woowacourse/mission-utils';
import IOProcessor from './IOProcessor.js';
import Lotto from './Lotto.js';
import { OUPUT_MESSGE, LOTTO_PRICE } from './constant.js';

/**
 *
 */
class LottoController {
  #lottos;

  /**
   *
   */
  constructor(amount) {
    this.ioProcessor = new IOProcessor();

    const lottoSize = amount / LOTTO_PRICE;
    this.#lottos = Array.from(
      { length: lottoSize },
      () => new Lotto(this.generateLotto())
    );

    this.ioProcessor.processOuput('');
    this.ioProcessor.processOuput(
      lottoSize + OUPUT_MESSGE.OUTPUT_BOUGHT_LOTTOS
    );
    this.#lottos.forEach((lotto) => lotto.printLotto());
  }

  /**
   *
   */
  generateLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoController;
