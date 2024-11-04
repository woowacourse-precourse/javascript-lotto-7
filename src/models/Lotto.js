import { Random } from '@woowacourse/mission-utils';
import LottoValidator from '../utils/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers = Lotto.generateLottoNumber()) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    LottoValidator.validateGeneratedLottoNumber(numbers);
  }

  static generateLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
