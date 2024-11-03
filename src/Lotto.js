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

  // TODO: 추가 기능 구현
}

export default Lotto;
