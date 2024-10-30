import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import OutputProcessor from './OutputProcessor.js';

class Generator {
  #numbers = [];

  #lottos = [];

  #record = '';

  constructor(quantity) {
    this.quantity = quantity;
  }

  execute() {
    OutputProcessor.print(`\n${this.quantity}개를 구매했습니다.`);
    this.#history();
    this.#printLottos();
    return this.#lottos;
  }

  #draw() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
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
    OutputProcessor.print(this.#record);
  }
}

export default Generator;
