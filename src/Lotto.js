import { Random } from '@woowacourse/mission-utils';
import { LottoValidator } from './Main.js';

class Lotto {
  #numbers;

  constructor(numbers = Lotto.generateLottoNumber()) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    LottoValidator.validateGeneratedLottoNumber(numbers);
  }

  // TODO: 추가 기능 구현
  static generateLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
