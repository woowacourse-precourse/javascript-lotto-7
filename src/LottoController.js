import { Random } from '@woowacourse/mission-utils';
import IOProcessor from './IOProcessor.js';
import Lotto from './Lotto.js';
import StringParser from './StringParser.js';
import { OUPUT_MESSGE, LOTTO_PRICE } from './constant.js';

/**
 *
 */
class LottoController {
  #lottos;
  #winningNumbers;
  #winningBonusNumber;
  #resultTable;
  #ioProcessor;

  /**
   *
   */
  constructor() {
    this.#winningNumbers = [];
    this.#winningBonusNumber = 0;
    this.#resultTable = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.#ioProcessor = new IOProcessor();
  }

  /**
   *
   */
  buyLottos(amount) {
    const lottoSize = amount / LOTTO_PRICE;
    this.#lottos = Array.from(
      { length: lottoSize },
      () => new Lotto(this.generateLotto())
    );

    this.#ioProcessor.processOuput('');
    this.#ioProcessor.processOuput(
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

  /**
   *
   */
  setWinningNumbers(winningNumbers) {
    const stringParser = new StringParser();
    this.#winningNumbers = stringParser.parseString(winningNumbers).map(Number);
  }

  /**
   *
   */
  setWinningBonusNumber(winningBonusNumber) {
    this.#winningBonusNumber = Number(winningBonusNumber);
  }

  /**
   *
   */
  calculateLottoResult() {
    this.#lottos.forEach((lotto) => {
      const rank = lotto.getLottoResult(
        this.#winningNumbers,
        this.#winningBonusNumber
      );
      this.#resultTable[rank] += 1;
    });
  }
}

export default LottoController;
