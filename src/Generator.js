import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import OutputProcessor from './OutputProcessor.js';
import { LOTTO } from './constants/lotto.js';

class Generator {
  #numbers = [];

  #lottos = [];

  #record = '';

  constructor(quantity) {
    this.quantity = quantity;
  }

  execute() {
    OutputProcessor.purchaseLotto(this.quantity);
    this.#history();
    this.#printLottos();
    return this.#lottos;
  }

  #draw() {
    this.#numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH_WINNING_NUMBER);
  }

  #history() {
    Array.from({ length: this.quantity }).forEach(() => {
      this.#draw();
      const lotto = new Lotto(this.#numbers);
      this.#lottos.push(lotto);
      this.#numbers = [];
    });
  }

  #printLottos() {
    this.#lottos.forEach((lotto) => {
      this.#record += `[${lotto.formatSortedNumber()}]\n`;
    });
    OutputProcessor.generateLottos(this.#record);
  }
}

export default Generator;
