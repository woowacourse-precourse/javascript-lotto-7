import { LOTTO } from './constant';
import getRandomSortedNumbers from './util/getRandomSortedNumbers';
class Lotto {
  #numbers;

  constructor() {
    this.#numbers = getRandomSortedNumbers(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.COUNT,
    );
  }

  static purchaseLotto(count) {
    return Array.from({ length: count }, () => new Lotto());
  }
}

export default Lotto;
